import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),

    defineField({
      name: 'address',
      title: 'Address of the Restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'long',
      title: 'Longitude of the Restaurant',
      type: 'number',
    }),

    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant',
      type: 'number',
    }),

    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4},
          {title: '5', value: 5},
        ],
      },
    }),

    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
