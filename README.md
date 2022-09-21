<p align="center">
  <img src="vue-wordpress-theme-simple-starter.svg" width=30%>
</p>

<a href="README_ja.md">Readme for japanese</a>

# Vue Wordpress simple starter theme
A WordPress theme written in [Vue.js](https://vuejs.org) for developers who wants to:
- develop WordPress with Vue.js **only**
- use wordpress as like a headless CMS
- make frontend / backend on the same host
- develop website blazing fast in local using Hot reloading

This theme is inspired and forked from [VueWordPress Theme Starter](https://github.com/EvanAgee/vuejs-wordpress-theme-starter), make it simpler and some packages upgraded.

## features
- Hot reloading(using [browsersync](https://browsersync.io)) for local development
- [Pinia](https://pinia.vuejs.org) for state management
- [vue-meta](https://vue-meta.nuxtjs.org) for SEO
- [Axios](https://github.com/axios/axios) for API requests
- [Vue Router](https://router.vuejs.org) integrated
- [Sass](https://sass-lang.com) integrated
- base project built by [create-vue](https://github.com/vuejs/create-vue)

## Getting started
0. make your local wordpress environment.  
there are many tools like [local](https://localwp.com/?download), [bitnami](https://bitnami.com/stack/wordpress/installer), XAMPP, and so on.

1. Clone the repo inside to your `wp-content/themes/` directory.  
2. run `npm install`  
3. Copy [`.env.sample`](.env.sample) to `.env` and edit settings.  
Edit `VITE_WEBSITE_NAME` to your site name. It is used for meta tag in yor site.  
If you want to change directory name, please edit `THEME_DIRECTORY_NAME`.  
4. **Navigate to the theme directory in your terminal** and run `npm install`
5. run `npm run watch` for development/hot reloading
6. Activate the theme in your WordPress settings.
7. Update your permalink settings `(Settings -> Permalinks)` to be **"Day and name"**.  
You can change settings by editing `router/index.js`.

8. when website is ready for deployment, run `npm run build` and deploy `theme-dir` to your `wp-content/themes/` directory in your server.  
(Don't forget to activate the theme!)
9. That's it!

## References
- [vue-router](https://github.com/vuejs/router)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
