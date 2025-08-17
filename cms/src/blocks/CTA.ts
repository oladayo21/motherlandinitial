import { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Call to Actions',
  },
  fields: [
    {
      name: 'heading',
      label: 'CTA Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'CTA Description',
      type: 'textarea',
      admin: {
        rows: 3,
      },
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
          required: true,
        },
        {
          name: 'link',
          label: 'Button Link',
          type: 'text',
          required: true,
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
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'style',
      label: 'CTA Style',
      type: 'select',
      defaultValue: 'centered',
      options: [
        { label: 'Centered', value: 'centered' },
        { label: 'Left Aligned', value: 'left' },
        { label: 'Split (Text Left, Buttons Right)', value: 'split' },
      ],
    },
  ],
}