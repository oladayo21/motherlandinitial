import { Block } from 'payload'

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content Section',
    plural: 'Content Sections',
  },
  fields: [
    {
      name: 'heading',
      label: 'Section Heading',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'textarea',
      required: true,
      admin: {
        rows: 10,
      },
    },
    {
      name: 'backgroundStyle',
      label: 'Background Style',
      type: 'select',
      defaultValue: 'white',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Light Gray', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Primary Color', value: 'primary' },
      ],
    },
    {
      name: 'alignment',
      label: 'Text Alignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'maxWidth',
      label: 'Content Width',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Narrow', value: 'narrow' },
        { label: 'Medium', value: 'medium' },
        { label: 'Wide', value: 'wide' },
        { label: 'Full Width', value: 'full' },
      ],
    },
  ],
}