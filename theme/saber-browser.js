import 'quasar/dist/quasar.min.css'
import 'vuesax/dist/vuesax.css'
import './style/base.css'
import './style/config.scss'
import './style/wysiwyg.scss'
import 'prismjs/themes/prism.css'

import Vue from 'vue'
import Vuesax from 'vuesax'
import moment from 'vue-moment'
import quasar from 'quasar'

export default ({ router , setHead }) => {
  
  if (process.browser) {
    Vue.use(Vuesax, {
      server:true
    })
    Vue.use(moment)
    Vue.use(quasar)
    const nprogress = require('nprogress')
    nprogress.configure({ showSpinner: false })
    require('nprogress/nprogress.css')

    const loaded = Object.create(null)

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start()
      }

      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      nprogress.done()
    })
  }

  setHead({
    link: [
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }
    ],
    meta: [
      { name: 'theme-color', content: '#ffffff' }
    ]
  })
}
