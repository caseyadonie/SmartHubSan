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
                  buildHookId: '5f481f961f7386cc4587d3c8',
                  title: 'Sanity Studio',
                  name: 'smarthubsan-studio',
                  apiId: '404d53eb-062a-46e3-9211-1c2972753634'
                },
                {
                  buildHookId: '5f481f969405890f8effd717',
                  title: 'Landing pages Website',
                  name: 'smarthubsan',
                  apiId: '91790909-e0a2-4220-a4a0-d9c054e54c2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/caseyadonie/SmartHubSan',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://smarthubsan.netlify.app', category: 'apps'}
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
