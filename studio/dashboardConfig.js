export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ea88056e2243a53d7422de4',
                  title: 'Sanity Studio',
                  name: 'Foundation-AI-Landing-Pages-studio',
                  apiId: '6fa66a42-c8f2-4a5f-83a3-3f36bf511fec'
                },
                {
                  buildHookId: '5ea88056ec040054709fae5f',
                  title: 'Landing pages Website',
                  name: 'Foundation-AI-Landing-Pages',
                  apiId: '114bedb4-dd01-4e44-9fa9-f2c65d78c094'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertcedwards/Foundation-AI-Landing-Pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Foundation-AI-Landing-Pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
