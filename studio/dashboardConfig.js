export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62c2cf7e16537f60a2af16b0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w1ej7mhw',
                  apiId: '3f066974-7d42-4d9c-b049-6fbbe8481d17'
                },
                {
                  buildHookId: '62c2cf7f91bd05673a572fd1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5v8h7ki3',
                  apiId: 'a3adb9a7-3955-40af-bd43-e44b6df76bc0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcus-atvero/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5v8h7ki3.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
