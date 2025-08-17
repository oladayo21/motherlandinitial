import { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Content } from '../blocks/Content'
import { TwoColumn } from '../blocks/TwoColumn'
import { Stats } from '../blocks/Stats'
import { Gallery } from '../blocks/Gallery'
import { CTA } from '../blocks/CTA'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    group: 'Content',
    description: 'Create and manage pages with flexible content blocks',
  },
  versions: {
    drafts: true,
    maxPerDoc: 10, // Keep last 10 versions
  },
  timestamps: true, // Adds createdAt and updatedAt automatically
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'URL Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL path for this page (e.g., "about-us")',
      },
    },
    {
      name: 'layout',
      label: 'Page Content',
      type: 'blocks',
      blocks: [
        Hero,
        Content,
        TwoColumn,
        Stats,
        Gallery,
        CTA,
      ],
      admin: {
        description: 'Build your page by adding different types of content blocks',
      },
    },
    // SEO fields are automatically added by the SEO plugin
  ],
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        // Auto-generate slug from title if not provided
        if (operation === 'create' && !data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '')
        }
        return data
      },
    ],
  },
}