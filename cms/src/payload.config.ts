// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

// Import Globals
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'
import { Footer } from './globals/Footer'
import { ClubInfo } from './globals/ClubInfo'
import { Sponsors } from './globals/Sponsors'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages],
  globals: [
    SiteSettings,
    Navigation,
    Footer,
    ClubInfo,
    Sponsors,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      collections: ['pages'],
      generateTitle: ({ doc }) => `${doc?.title?.value ?? ''} | Motherland SC`,
      generateDescription: ({ doc }) => doc?.excerpt?.value || doc?.description?.value || 'Welcome to Motherland SC Berlin',
      generateImage: ({ doc }) => doc?.featuredImage?.value || doc?.ogImage?.value,
      generateURL: ({ doc }) => `${process.env.NEXT_PUBLIC_SITE_URL || 'https://motherlandsc.com'}/${doc?.slug?.value ?? ''}`,
      uploadsCollection: 'media',
      fields: [
        // Additional custom SEO fields can be added here
      ],
    }),
    // storage-adapter-placeholder
  ],
})
