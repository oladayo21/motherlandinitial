import { Block } from 'payload'

export const TwoColumn: Block = {
  slug: 'two-column',
  labels: {
    singular: 'Two Column Layout',
    plural: 'Two Column Layouts',
  },
  fields: [
    {
      name: 'heading',
      label: 'Section Heading',
      type: 'text',
    },
    {
      name: 'leftColumn',
      label: 'Left Column Content',
      type: 'textarea',
      required: true,
      admin: {
        rows: 8,
      },
    },
    {
      name: 'rightColumn',
      label: 'Right Column Content',
      type: 'textarea',
      required: true,
      admin: {
        rows: 8,
      },
    },
    {
      name: 'columnRatio',
      label: 'Column Ratio',
      type: 'select',
      defaultValue: '50-50',
      options: [
        { label: '50/50', value: '50-50' },
        { label: '60/40', value: '60-40' },
        { label: '40/60', value: '40-60' },
        { label: '70/30', value: '70-30' },
        { label: '30/70', value: '30-70' },
      ],
    },
    {
      name: 'reverseOnMobile',
      label: 'Reverse Columns on Mobile',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}