// utils/markdownParser.ts
import MarkdownIt from 'markdown-it'

interface ProjectMetadata {
 id: string
 card: {
   title: string
   description: string
   imageUrl: string
 }
}

interface SectionData {
 type: string
 data: any
}

interface ProjectData extends ProjectMetadata {
 sections: {
   order: string[]
   content: {
     [key: string]: SectionData
   }
 }
}

export class MarkdownProjectParser {
 private md: MarkdownIt

 constructor() {
   this.md = new MarkdownIt({
     html: true,
     breaks: true,
     linkify: true,
     typographer: true
   })
 }

 private parseMarkdownContent(content: string): string {
   // Enlever les balises p et nettoyer les br
   return content
     .replace(/^# /gm, '') // Enlève les # des titres
     .replace(/<\/?p>/g, '') // Enlève les balises <p>
     .replace(/<br>/g, '\n') // Remplace les <br> par des retours à la ligne
     .trim()
 }

 parseProject(content: string): ProjectData | null {
   try {
     const sections = content.split(/\n## @/).filter(Boolean)
     const projectData: Partial<ProjectData> = {
       sections: {
         order: [],
         content: {}
       }
     }

     sections.forEach(section => {
       const [type, ...lines] = section.trim().split('\n')
       const sectionContent = lines.join('\n').trim()
       const sectionType = type.trim()
       const sectionId = `${sectionType}-${projectData.sections!.order.length}`

       switch (sectionType) {
         case 'metadata':
           const [id, title, description, imageUrl] = lines.map(line => line.trim())
           projectData.id = id
           projectData.card = { title, description, imageUrl }
           break

         case 'hero':
           const [client, ...titleLines] = lines
           projectData.sections!.content[sectionId] = {
             type: 'hero',
             data: {
               client: this.parseMarkdownContent(client),
               title: this.parseMarkdownContent(titleLines.join('\n'))
             }
           }
           projectData.sections!.order.push(sectionId)
           break

         case 'carousel':
           projectData.sections!.content[sectionId] = {
             type: 'carousel',
             data: {
               images: lines
                 .filter(line => line.trim().startsWith('-'))
                 .map(line => line.replace('-', '').trim())
             }
           }
           projectData.sections!.order.push(sectionId)
           break

         case 'article':
           const titleMatch = sectionContent.match(/^# (.+)$/m)
           const articleTitle = titleMatch ? titleMatch[1].trim() : ''
           const articleContent = sectionContent
             .replace(/^# .+$/m, '')
             .trim()

           projectData.sections!.content[sectionId] = {
             type: 'article',
             data: {
               title: this.parseMarkdownContent(articleTitle),
               content: this.parseMarkdownContent(articleContent)
             }
           }
           projectData.sections!.order.push(sectionId)
           break

         case 'columns':
           const parts = sectionContent.split(/(?=^# )/m).filter(Boolean)
           if (parts.length >= 2) {
             const leftMatch = parts[0].match(/^# (.+)\n([\s\S]+)/)
             const rightMatch = parts[1].match(/^# (.+)\n([\s\S]+)/)

             if (leftMatch && rightMatch) {
               projectData.sections!.content[sectionId] = {
                 type: 'columns',
                 data: {
                   leftTitle: this.parseMarkdownContent(leftMatch[1]),
                   leftContent: this.parseMarkdownContent(leftMatch[2]),
                   rightTitle: this.parseMarkdownContent(rightMatch[1]),
                   rightContent: this.parseMarkdownContent(rightMatch[2])
                 }
               }
               projectData.sections!.order.push(sectionId)
             }
           }
           break

         case 'singleImage':
           const [imgUrl, alt] = lines
           projectData.sections!.content[sectionId] = {
             type: 'singleImage',
             data: {
               imageUrl: imgUrl.trim(),
               alt: alt.trim()
             }
           }
           projectData.sections!.order.push(sectionId)
           break

         case 'quote':
           projectData.sections!.content[sectionId] = {
             type: 'quote',
             data: {
               title: this.parseMarkdownContent(sectionContent)
             }
           }
           projectData.sections!.order.push(sectionId)
           break
       }
     })

     if (this.validateProjectData(projectData)) {
       return projectData as ProjectData
     }
     return null

   } catch (error) {
     console.error('Error parsing project:', error)
     return null
   }
 }

 private validateProjectData(data: Partial<ProjectData>): boolean {
   if (!data.id || !data.card || !data.sections) {
     console.warn('Missing required project fields')
     return false
   }

   if (!data.sections.order || !data.sections.content) {
     console.warn('Missing sections structure')
     return false
   }

   const requiredMetadataFields = ['title', 'description', 'imageUrl']
   for (const field of requiredMetadataFields) {
     if (!data.card[field]) {
       console.warn(`Missing required card field: ${field}`)
       return false
     }
   }

   return true
 }
}