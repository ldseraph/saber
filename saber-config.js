module.exports = {
  siteConfig: {
    title: 'QuAieduy'
  },
  theme: './theme',
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug'
  },
  themeConfig: {
    nav: [
			{ text: '导航', link: '/navigarions' }, 
			{ text: '工具', link: '/portfolios' }, 
			{ text: '文章', link: '/blog' },
			{ text: '关于', link: '/about' }
    ]
  },
  plugins: [
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        paginationOptions: {
          perPage: 2
        }
      }
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-critical'
    },
    {
      resolve: 'saber-plugin-search'
    }
  ]
}
