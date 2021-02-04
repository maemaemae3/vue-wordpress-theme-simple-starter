<p align="center">
  <img src="vue-wordpress-theme-simple-starter.svg" width=30%>
</p>

<a href="README_ja.md">Readme for japanese</a>

# Vue Wordpress simple starter theme
A WordPress theme written in [Vue.js](https://jp.vuejs.org/index.html) for developers who wants to:
- develop WordPress with Vue.js **only**
- use wordpress as like a headless CMS
- make frontend / backend on the same host
- develop website blazing fast in local using Hot reloading

This theme is inspired and forked from [VueWordPress Theme Starter](https://github.com/EvanAgee/vuejs-wordpress-theme-starter), make it simpler and some packages upgraded.

## features
- Hot reloading(using [browsersync](https://browsersync.io)) for local development
- [VueRouter](https://github.com/vuejs/vue-router) integrated
- [Vuex](https://github.com/vuejs/vuex) integrated
- [Vuetify](https://vuetifyjs.com) integrated
- [Sass](https://sass-lang.com) integrated
- [Axios](https://github.com/axios/axios) for API requests
- base project built by vue-cli 4.X

## Getting started
0. make your local wordpress environment.  
there are many tools like [local](https://localwp.com/?download), [bitnami](https://bitnami.com/stack/wordpress/installer), XAMPP, and so on.

1. Clone the repo inside to your `wp-content/themes/` directory.  
If you want to change directory name, please edit `THEME_DIRECTORY_NAME` of `settings.js`.
3. **Navigate to the theme directory in your terminal** and run `npm install`
4. run `npm run watch` for development/hot reloading
5. Activate the theme in your WordPress settings.
6. Update your permalink settings `(Settings -> Permalinks)` to be **"Day and name"**.  
You can change settings by editing `router/index.js`.

6. when website is ready for deployment, run `npm run build` and deploy `theme-dir` to your `wp-content/themes/` directory in your server.  
(Don't forget to activate the theme!)
7. That's it!

## References
- [vue-router](https://github.com/vuejs/vue-router)
- [Creating Vuex Modules](https://vuex.vuejs.org/en/modules.html)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
