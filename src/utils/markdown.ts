import MarkdownIt from 'markdown-it'

/**
 * Rendu Markdown des corps d'articles.
 * Tous les niveaux de titre (`#`, `##`, `###`) deviennent des <h3> : le titre
 * de l'article est déjà un <h2>, et l'on évite qu'un `#` hérite du style
 * display de la page.
 */
const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  breaks: false,
})

md.renderer.rules.heading_open = () => '<h3>'
md.renderer.rules.heading_close = () => '</h3>'

const defaultLinkOpen =
  md.renderer.rules.link_open ??
  ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  const href = String(token.attrGet('href') ?? '')
  if (/^https?:\/\//.test(href)) {
    token.attrSet('target', '_blank')
    token.attrSet('rel', 'noopener')
  }
  return defaultLinkOpen(tokens, idx, options, env, self)
}

export const renderMarkdown = (source: string): string => md.render(source)
