import yaml from 'js-yaml';
import { remark } from 'remark';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import type { Root, RootContent } from 'mdast';

type DirectiveNode = {
  type: 'containerDirective' | 'leafDirective';
  name: string;
  attributes?: Record<string, string | null>;
  children: RootContent[];
};

const remarkParser = remark().use(remarkDirective);
const remarkSerializer = remark();

function parseFrontmatter(content: string): { data: Record<string, any>; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: content };
  const data = (yaml.load(match[1]) as Record<string, any>) ?? {};
  const body = content.slice(match[0].length).trim();
  return { data, body };
}

function nodeToMarkdown(children: RootContent[]): string {
  return remarkSerializer.stringify({ type: 'root', children } as Root).trim();
}

function extractText(children: RootContent[]): string {
  return (children as any[])
    .filter((n) => n.type === 'paragraph')
    .flatMap((p: any) => p.children ?? [])
    .filter((n: any) => n.type === 'text')
    .map((n: any) => n.value as string)
    .join(' ')
    .trim();
}

function extractListItems(children: RootContent[]): string[] {
  const items: string[] = [];
  for (const child of children as any[]) {
    if (child.type === 'list') {
      for (const listItem of child.children) {
        const text = (listItem.children ?? [])
          .flatMap((p: any) => p.children ?? [])
          .filter((n: any) => n.type === 'text')
          .map((n: any) => n.value as string)
          .join('');
        if (text) items.push(text);
      }
    } else if (child.type === 'paragraph') {
      const text = (child.children ?? [])
        .filter((n: any) => n.type === 'text')
        .map((n: any) => n.value as string)
        .join('');
      if (text) items.push(text);
    }
  }
  return items;
}

function extractCols(children: RootContent[]): { title: string; items: string[] }[] {
  const cols: { title: string; items: string[] }[] = [];
  visit({ type: 'root', children } as Root, 'containerDirective', (node: any) => {
    if (node.name === 'col') {
      cols.push({
        title: node.attributes?.title ?? '',
        items: extractListItems(node.children ?? []),
      });
    }
  });
  return cols;
}

function extractSectionData(node: DirectiveNode): Record<string, unknown> {
  const attrs = node.attributes ?? {};
  const children = node.children ?? [];

  switch (node.name) {
    case 'hero':
      return { client: attrs.client, title: attrs.title };

    case 'quote':
      return { content: attrs.content ?? extractText(children) };

    case 'singleImage':
    case 'parallaxImage':
      return {
        imageUrl: attrs.url,
        alt: attrs.alt ?? '',
        aspectRatio: attrs.ratio ?? '16/9',
      };

    case 'carousel':
      return { images: extractListItems(children) };

    case 'columns': {
      const cols = extractCols(children);
      return {
        left: cols[0] ?? { title: '', items: [] },
        right: cols[1] ?? { title: '', items: [] },
      };
    }

    case 'article':
      return {
        title: attrs.title,
        content: nodeToMarkdown(children),
      };

    default:
      return attrs as Record<string, unknown>;
  }
}

export class ContentParser {
  parseForCard(content: string) {
    const { data } = parseFrontmatter(content);
    if (!data.id) return null;
    return {
      id: data.id,
      title: data.metadata?.title,
      role: data.metadata?.role,
      description: data.metadata?.description,
      cover: data.metadata?.cover,
    };
  }

  parseContent(content: string) {
    const { data, body } = parseFrontmatter(content);
    const tree = remarkParser.parse(body) as Root;
    const sections: { component: string; data: Record<string, unknown> }[] = [];

    for (const node of tree.children) {
      if (node.type === 'containerDirective' || node.type === 'leafDirective') {
        sections.push({
          component: (node as any).name,
          data: extractSectionData(node as unknown as DirectiveNode),
        });
      }
    }

    return { metadata: data, sections };
  }
}
