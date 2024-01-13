import { defineField } from 'sanity'

export const Moyu = {
    name: 'Moyu',
    type: 'document',
    title: 'Moyu',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Cube Title'
        },

        {
            name: 'price',
            type: 'number',
            title: 'Cube Price'
        },

        {
            name: 'image',
            type: 'image',
            title: 'Cube Image'
        }, 
        { 
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 90,
            }
          },

        defineField(
            {
                name: 'company',
                title: 'Cube Company',
                type: 'reference',
                to: [
                    {
                        type: "Company"
                    }
                ]
            }
        )
    ]
}