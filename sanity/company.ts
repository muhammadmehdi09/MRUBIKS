import {defineType , defineField} from 'sanity'


export const Company = defineType({
    name: 'Company',
    type: 'document',
    title: 'Company',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Company Title'
        })     
    ]
})