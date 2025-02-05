// utils/markdownParser.ts
import matter from 'gray-matter';
import yaml from 'js-yaml';

interface BaseMetadata {
  type: 'experience' | 'project';
  id: string;
  metadata: {
    title: string;
    description: string;
    [key: string]: any;
  }
}

interface ComponentSection {
  component: string; // le nom après @
  data: any;        // les données yaml parsées
}

export class ContentParser {
  parseForCard(content: string) {
    try {
      // Extraction simple des métadonnées avec une regex
      const metadataMatch = content.match(/---\n([\s\S]*?)\n---/);
      if (!metadataMatch) return null;
      
      const metadata = yaml.load(metadataMatch[1]);
      return {
        id: metadata.id,
        title: metadata.metadata?.title,
        role: metadata.metadata?.role,
        description: metadata.metadata?.description,
        cover: metadata.metadata?.cover
      };
    } catch (e) {
      console.error('Erreur parsing metadata:', e);
      return null;
    }
  }

  parseContent(content: string) {
    try {
      // Extraction des métadonnées
      const metadataMatch = content.match(/---\n([\s\S]*?)\n---/);
      if (!metadataMatch) return null;
      
      const metadata = yaml.load(metadataMatch[1]);
      
      // Extraction du contenu après les métadonnées
      const mainContent = content.replace(/---\n[\s\S]*?\n---/, '').trim();
      
      // Parse les sections
      const sections = this.parseSections(mainContent);
      
      return {
        metadata,
        sections
      };
    } catch (e) {
      console.error('Erreur parsing content:', e);
      return null;
    }
  }

  private parseSections(content: string) {
    const sectionRegex = /## @(\w+)\n([\s\S]*?)(?=## @|\n## @|$)/g;
    const sections = [];
    let match;

    while ((match = sectionRegex.exec(content)) !== null) {
      const [_, component, rawData] = match;
      try {
        let data;
        
        if (component === 'singleImage' || component === 'parallaxImage') {
          const lines = rawData.trim().split('\n').filter(line => line.trim());
          data = {
            imageUrl: lines[0]?.trim() || '',
            alt: lines[1]?.trim() || '',
            aspectRatio: lines[2]?.trim() || '16/9'
          };
        } else if (component === 'columns') {
          // Utiliser directement yaml.load pour parser la structure YAML
          data = yaml.load(rawData.trim());
        } else {
          data = rawData.includes(':') 
            ? yaml.load(rawData.trim())
            : { content: rawData.trim() };
        }

        sections.push({
          component,
          data
        });
      } catch (e) {
        console.error(`Erreur parsing section ${component}:`, e);
        console.error('Raw data:', rawData);
      }
    }

    return sections;
  }
}