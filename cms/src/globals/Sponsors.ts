import { GlobalConfig } from 'payload'

export const Sponsors: GlobalConfig = {
  slug: 'sponsors',
  label: 'Sponsors & Partners',
  admin: {
    group: 'Settings',
    description: 'Manage club sponsors and partners',
  },
  fields: [
    {
      name: 'mainSponsor',
      label: 'Main Sponsor',
      type: 'group',
      admin: {
        description: 'Primary/Title sponsor',
      },
      fields: [
        {
          name: 'name',
          label: 'Sponsor Name',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          label: 'Sponsor Logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Sponsor logo image',
          },
        },
        {
          name: 'website',
          label: 'Sponsor Website',
          type: 'text',
          admin: {
            description: 'Sponsor website URL',
          },
        },
        {
          name: 'since',
          label: 'Partnership Since',
          type: 'number',
          min: 1900,
          max: new Date().getFullYear(),
          admin: {
            description: 'Year partnership started',
          },
        },
      ],
    },
    {
      name: 'kitSponsor',
      label: 'Kit Sponsor',
      type: 'group',
      admin: {
        description: 'Kit/Jersey sponsor',
      },
      fields: [
        {
          name: 'name',
          label: 'Sponsor Name',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          label: 'Sponsor Logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'website',
          label: 'Sponsor Website',
          type: 'text',
        },
        {
          name: 'since',
          label: 'Partnership Since',
          type: 'number',
          min: 1900,
          max: new Date().getFullYear(),
        },
      ],
    },
    {
      name: 'officialPartners',
      label: 'Official Partners',
      type: 'array',
      admin: {
        description: 'Other official partners and sponsors',
      },
      fields: [
        {
          name: 'name',
          label: 'Partner Name',
          type: 'text',
          required: true,
        },
        {
          name: 'logo',
          label: 'Partner Logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'website',
          label: 'Partner Website',
          type: 'text',
        },
        {
          name: 'category',
          label: 'Partnership Category',
          type: 'select',
          options: [
            {
              label: 'Official Partner',
              value: 'official',
            },
            {
              label: 'Technical Partner',
              value: 'technical',
            },
            {
              label: 'Media Partner',
              value: 'media',
            },
            {
              label: 'Regional Partner',
              value: 'regional',
            },
            {
              label: 'Community Partner',
              value: 'community',
            },
            {
              label: 'Other',
              value: 'other',
            },
          ],
        },
        {
          name: 'order',
          label: 'Display Order',
          type: 'number',
          admin: {
            description: 'Order of display (lower numbers appear first)',
          },
        },
      ],
    },
  ],
}