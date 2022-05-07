const { defaultTheme } = require('vuepress')
// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { searchPlugin } = require('@vuepress/plugin-search')
module.exports = {
  base: '/sblog/',
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    // 在这里进行配置
    // search: true,
    // searchMaxSuggestions: 10,
    logo: '/images/logo.jpg',
    repo: 'https://gitee.com/Dirp',
    navbar: [
      {
        text: '前端',
        link: '/sb/web/',
      },
      {
        text: '后端',
        link: '/sb/backend/',
      },
    ],
  })
}