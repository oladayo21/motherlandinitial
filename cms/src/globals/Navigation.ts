import { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  admin: {
    group: 'Settings',
    description: 'Main navigation menu structure',
  },
  fields: [
    {
      name: 'mainMenu',
      label: 'Main Menu',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 10,
      admin: {
        description: 'Main navigation items',
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
              label: 'Internal Link',
              value: 'internal',
            },
            {
              label: 'External Link',
              value: 'external',
            },
            {
              label: 'Dropdown Menu',
              value: 'dropdown',
            },
          ],
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'external',
            description: 'External URL (e.g., https://example.com)',
          },
        },
        {
          name: 'page',
          label: 'Page',
          type: 'relationship',
          relationTo: 'pages',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'internal',
            description: 'Select an internal page',
          },
        },
        {
          name: 'submenu',
          label: 'Dropdown Items',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'dropdown',
            description: 'Dropdown menu items',
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
                  label: 'Internal Link',
                  value: 'internal',
                },
                {
                  label: 'External Link',
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
                description: 'External URL',
              },
            },
            {
              name: 'page',
              label: 'Page',
              type: 'relationship',
              relationTo: 'pages',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'internal',
                description: 'Select an internal page',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'quickLinks',
      label: 'Quick Links',
      type: 'array',
      maxRows: 5,
      admin: {
        description: 'Header quick links (e.g., Login, Contact)',
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
        {
          name: 'icon',
          label: 'Icon Class',
          type: 'text',
          admin: {
            description: 'Optional icon class (e.g., fa-user)',
          },
        },
      ],
    },
  ],
}