export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622ec623e5d1f05f875ab00f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j87sif3b',
                  apiId: 'cea0ec6a-fc8e-448a-a872-a68126e653be'
                },
                {
                  buildHookId: '622ec6238174995f058f36a6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xok4j8pa',
                  apiId: '7e80b6bf-7e90-4c54-9617-442d08bf32b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rodvar/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xok4j8pa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
