import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  admin: {
    group: 'Settings',
    description: 'Footer content and structure',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Footer Sections',
          fields: [
            {
              name: 'sections',
              label: 'Footer Sections',
              type: 'array',
              required: true,
              minRows: 1,
              maxRows: 6,
              admin: {
                description: 'Footer column sections',
                components: {
                  RowLabel: ({ data }) => data?.title || 'Footer Section',
                },
              },
              fields: [
                {
                  name: 'title',
                  label: 'Section Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'links',
                  label: 'Section Links',
                  type: 'array',
                  required: true,
                  minRows: 1,
                  maxRows: 10,
                  admin: {
                    components: {
                      RowLabel: ({ data }) => data?.label || 'Link',
                    },
                  },
                  fields: [
                    {
                      name: 'label',
                      label: 'Label',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'type',
                      label: 'Link Type',
                      type: 'select',
                      required: true,
                      defaultValue: 'internal',
                      options: [
                        {
                          label: 'Internal Page',
                          value: 'internal',
                        },
                        {
                          label: 'External URL',
                          value: 'external',
                        },
                      ],
                    },
                    {
                      name: 'url',
                      label: 'URL',
                      type: 'text',
                      admin: {
                        condition: (_, siblingData) => siblingData?.type === 'external',
                      },
                    },
                    {
                      name: 'page',
                      label: 'Page',
                      type: 'relationship',
                      relationTo: 'pages',
                      admin: {
                        condition: (_, siblingData) => siblingData?.type === 'internal',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Social & Newsletter',
          fields: [
            {
              name: 'socialLinks',
              label: 'Social Media Links',
              type: 'array',
              required: true,
              admin: {
                description: 'Social media profiles',
                components: {
                  RowLabel: ({ data }) => data?.platform || 'Social Link',
                },
              },
              fields: [
                {
                  name: 'platform',
                  label: 'Platform',
                  type: 'select',
                  required: true,
                  options: [
                    {
                      label: 'Facebook',
                      value: 'facebook',
                    },
                    {
                      label: 'Twitter',
                      value: 'twitter',
                    },
                    {
                      label: 'Instagram',
                      value: 'instagram',
                    },
                    {
                      label: 'YouTube',
                      value: 'youtube',
                    },
                    {
                      label: 'TikTok',
                      value: 'tiktok',
                    },
                    {
                      label: 'LinkedIn',
                      value: 'linkedin',
                    },
                  ],
                },
                {
                  name: 'url',
                  label: 'Profile URL',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'icon',
                  label: 'Icon Class',
                  type: 'text',
                  admin: {
                    description: 'Optional custom icon class',
                  },
                },
              ],
            },
            {
              name: 'newsletterEnabled',
              label: 'Enable Newsletter Signup',
              type: 'checkbox',
              defaultValue: true,
            },
            {
              name: 'newsletterTitle',
              label: 'Newsletter Title',
              type: 'text',
              defaultValue: 'Stay Connected',
              admin: {
                condition: (data) => data?.newsletterEnabled === true,
              },
            },
            {
              name: 'newsletterDescription',
              label: 'Newsletter Description',
              type: 'textarea',
              admin: {
                condition: (data) => data?.newsletterEnabled === true,
              },
            },
          ],
        },
        {
          label: 'App Links & Copyright',
          fields: [
            {
              name: 'appLinks',
              label: 'Mobile App Links',
              type: 'group',
              fields: [
                {
                  name: 'iosUrl',
                  label: 'iOS App Store URL',
                  type: 'text',
                  admin: {
                    description: 'Link to iOS app',
                  },
                },
                {
                  name: 'androidUrl',
                  label: 'Google Play Store URL',
                  type: 'text',
                  admin: {
                    description: 'Link to Android app',
                  },
                },
              ],
            },
            {
              name: 'copyrightText',
              label: 'Copyright Text',
              type: 'text',
              required: true,
              defaultValue: '© {year} Motherland SC. All rights reserved.',
              admin: {
                description: 'Use {year} for current year',
              },
            },
            {
              name: 'legalLinks',
              label: 'Legal Links',
              type: 'array',
              maxRows: 10,
              admin: {
                description: 'Privacy, Terms, etc.',
                components: {
                  RowLabel: ({ data }) => data?.label || 'Legal Link',
                },
              },
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  label: 'URL',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}