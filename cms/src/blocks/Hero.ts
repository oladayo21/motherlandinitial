import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Hero Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Hero Subtitle',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Hero Description',
      type: 'textarea',
      admin: {
        rows: 3,
      },
    },
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'overlayOpacity',
      label: 'Overlay Opacity',
      type: 'number',
      defaultValue: 50,
      min: 0,
      max: 100,
      admin: {
        description: 'Dark overlay opacity (0-100)',
      },
    },
    {
      name: 'height',
      label: 'Hero Height',
      type: 'select',
      defaultValue: 'large',
      options: [
        { label: 'Small (40vh)', value: 'small' },
        { label: 'Medium (60vh)', value: 'medium' },
        { label: 'Large (80vh)', value: 'large' },
        { label: 'Full Screen (100vh)', value: 'full' },
      ],
    },
    {
      name: 'alignment',
      label: 'Content Alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'primaryButton',
      label: 'Primary Button',
      type: 'group',
      fields: [
        {
          name: 'text',
          label: 'Button Text',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Button Link',
          type: 'text',
        },
      ],
    },
    {
      name: 'secondaryButton',
      label: 'Secondary Button',
      type: 'group',
      fields: [
        {
          name: 'text',
          label: 'Button Text',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Button Link',
          type: 'text',
        },
      ],
    },
  ],
}