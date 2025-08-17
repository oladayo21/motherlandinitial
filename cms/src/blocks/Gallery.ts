import { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Image Gallery',
    plural: 'Image Galleries',
  },
  fields: [
    {
      name: 'heading',
      label: 'Gallery Heading',
      type: 'text',
    },
    {
      name: 'images',
      label: 'Gallery Images',
      type: 'array',
      minRows: 2,
      maxRows: 20,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          label: 'Image Caption',
          type: 'text',
        },
        {
          name: 'altText',
          label: 'Alt Text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'layout',
      label: 'Gallery Layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        { label: 'Grid', value: 'grid' },
        { label: 'Masonry', value: 'masonry' },
        { label: 'Slider', value: 'slider' },
        { label: 'Lightbox Grid', value: 'lightbox' },
      ],
    },
    {
      name: 'columns',
      label: 'Columns (Desktop)',
      type: 'number',
      defaultValue: 3,
      min: 2,
      max: 6,
    },
  ],
}