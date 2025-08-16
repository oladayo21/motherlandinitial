import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Settings',
    description: 'General site configuration and metadata',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'siteName',
              label: 'Site Name',
              type: 'text',
              required: true,
              defaultValue: 'Motherland SC',
              admin: {
                description: 'The name of your website',
              },
            },
            {
              name: 'tagline',
              label: 'Tagline',
              type: 'text',
              admin: {
                description: 'Site tagline or slogan',
              },
            },
            {
              name: 'logo',
              label: 'Site Logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Main logo displayed in header',
              },
            },
            {
              name: 'favicon',
              label: 'Favicon',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Browser tab icon (32x32 or 16x16)',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seoTitle',
              label: 'Default SEO Title',
              type: 'text',
              admin: {
                description: 'Default title for search engines',
              },
            },
            {
              name: 'seoDescription',
              label: 'Default Meta Description',
              type: 'textarea',
              admin: {
                description: 'Default description for search engines (150-160 characters)',
              },
            },
            {
              name: 'seoImage',
              label: 'Default OG Image',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Default image for social media sharing (1200x630)',
              },
            },
            {
              name: 'googleAnalyticsId',
              label: 'Google Analytics ID',
              type: 'text',
              admin: {
                description: 'GA tracking ID (e.g., G-XXXXXXXXXX)',
              },
            },
          ],
        },
        {
          label: 'Maintenance',
          fields: [
            {
              name: 'maintenanceMode',
              label: 'Enable Maintenance Mode',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'When enabled, the site will show a maintenance message',
              },
            },
            {
              name: 'maintenanceMessage',
              label: 'Maintenance Message',
              type: 'richText',
              admin: {
                condition: (data) => data?.maintenanceMode === true,
                description: 'Message to display during maintenance',
              },
            },
          ],
        },
      ],
    },
  ],
}