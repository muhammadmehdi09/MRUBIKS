import { defineField } from 'sanity'

export const Gan = {
    name: 'Gan',
    type: 'document',
    title: 'Gan',
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