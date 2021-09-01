import { createApp, h } from 'vue'
import { createMetaManager } from 'vue-meta'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

InertiaProgress.init()

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .mixin({ methods: { route: window.route } })
      .use(plugin)
      .use(createMetaManager({
        titleTemplate: title => (title ? `${title} - Ping CRM` : 'Ping CRM'),
      }))
      .mount(el)
  },
})
