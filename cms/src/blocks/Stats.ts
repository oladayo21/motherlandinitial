import { Block } from 'payload'

export const Stats: Block = {
  slug: 'stats',
  labels: {
    singular: 'Statistics Bar',
    plural: 'Statistics Bars',
  },
  fields: [
    {
      name: 'heading',
      label: 'Section Heading',
      type: 'text',
    },
    {
      name: 'stats',
      label: 'Statistics',
      type: 'array',
      minRows: 2,
      maxRows: 6,
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "500+", "15", "2023"',
          },
        },
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "Players", "Teams", "Founded"',
          },
        },
        {
          name: 'icon',
          label: 'Icon Class',
          type: 'text',
        },
      ],
    },
    {
      name: 'backgroundStyle',
      label: 'Background Style',
      type: 'select',
      defaultValue: 'primary',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Light Gray', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Primary Color', value: 'primary' },
        { label: 'Gradient', value: 'gradient' },
      ],
    },
  ],
}