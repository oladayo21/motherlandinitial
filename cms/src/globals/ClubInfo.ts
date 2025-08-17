import { GlobalConfig } from 'payload'

export const ClubInfo: GlobalConfig = {
  slug: 'club-info',
  label: 'Club Information',
  admin: {
    group: 'Settings',
    description: 'Club information, history, and stadium details',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Info',
          fields: [
            {
              name: 'clubName',
              label: 'Official Club Name',
              type: 'text',
              required: true,
              defaultValue: 'Motherland SC',
            },
            {
              name: 'founded',
              label: 'Date Founded',
              type: 'date',
              required: true,
              admin: {
                description: 'Date the club was established',
                date: {
                  pickerAppearance: 'dayOnly',
                  displayFormat: 'dd/MM/yyyy',
                },
              },
            },
            {
              name: 'nickname',
              label: 'Club Nickname',
              type: 'text',
              admin: {
                description: 'e.g., "The Lions", "The Eagles"',
              },
            },
            {
              name: 'motto',
              label: 'Club Motto',
              type: 'text',
              admin: {
                description: 'Club slogan or motto',
              },
            },
            {
              name: 'colors',
              label: 'Club Colors',
              type: 'group',
              fields: [
                {
                  name: 'primary',
                  label: 'Primary Color',
                  type: 'text',
                  admin: {
                    description: 'Hex code (e.g., #FF0000)',
                  },
                },
                {
                  name: 'secondary',
                  label: 'Secondary Color',
                  type: 'text',
                  admin: {
                    description: 'Hex code (e.g., #FFFFFF)',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'About & History',
          fields: [
            {
              name: 'aboutUs',
              label: 'About Us',
              type: 'textarea',
              required: true,
              admin: {
                description: 'About the club content',
                rows: 6,
              },
            },
            {
              name: 'history',
              label: 'Club History',
              type: 'textarea',
              admin: {
                description: 'Detailed club history',
                rows: 8,
              },
            },
            {
              name: 'vision',
              label: 'Vision Statement',
              type: 'textarea',
              admin: {
                description: 'Club vision for the future',
              },
            },
            {
              name: 'mission',
              label: 'Mission Statement',
              type: 'textarea',
              admin: {
                description: 'Club mission and purpose',
              },
            },
          ],
        },
        {
          label: 'Values & Achievements',
          fields: [
            {
              name: 'values',
              label: 'Core Values',
              type: 'array',
              maxRows: 10,
              admin: {
                description: 'Club core values',
              },
              fields: [
                {
                  name: 'title',
                  label: 'Value Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Value Description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'achievements',
              label: 'Major Achievements',
              type: 'array',
              admin: {
                description: 'Trophies and major achievements',
              },
              fields: [
                {
                  name: 'year',
                  label: 'Year',
                  type: 'number',
                  required: true,
                  min: 1800,
                  max: new Date().getFullYear(),
                },
                {
                  name: 'title',
                  label: 'Achievement Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Achievement Details',
                  type: 'textarea',
                },
              ],
            },
          ],
        },
        {
          label: 'Stadium',
          fields: [
            {
              name: 'stadium',
              label: 'Stadium Information',
              type: 'group',
              fields: [
                {
                  name: 'name',
                  label: 'Stadium Name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'capacity',
                  label: 'Stadium Capacity',
                  type: 'number',
                  required: true,
                  min: 0,
                  admin: {
                    description: 'Total seating capacity',
                  },
                },
                {
                  name: 'address',
                  label: 'Stadium Address',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'coordinates',
                  label: 'GPS Coordinates',
                  type: 'point',
                  admin: {
                    description: 'For map display',
                  },
                },
                {
                  name: 'image',
                  label: 'Stadium Photo',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'description',
                  label: 'Stadium Description',
                  type: 'textarea',
                  admin: {
                    description: 'History and features of the stadium',
                    rows: 5,
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'contact',
              label: 'Contact Information',
              type: 'group',
              fields: [
                {
                  name: 'email',
                  label: 'Contact Email',
                  type: 'email',
                  required: true,
                },
                {
                  name: 'phone',
                  label: 'Contact Phone',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'address',
                  label: 'Office Address',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'businessHours',
                  label: 'Business Hours',
                  type: 'text',
                  admin: {
                    description: 'e.g., Mon-Fri 9AM-5PM',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}