<p align="center">
  <img src="vue-wordpress-theme-simple-starter.svg" width=30%>
</p>

# Vue Wordpress simple starter theme
[Vue.js](https://v3.ja.vuejs.org)で書かれた、こんな開発者のためのWordPressテーマです。
- Vue.jsを使用してWordpressのテーマを効率よく開発したい
- WP REST APIとVueでお手軽にサイト構築したい
- 記事・固定ページ部分だけWordPressで編集できるようにしたい
- ローカル環境で効率よく開発したい

このテーマは [VueWordPress Theme Starter](https://github.com/EvanAgee/vuejs-wordpress-theme-starter) のフォークです。こちらを元に各種パッケージのバージョンアップ、改善を行っています。

## 各種機能
- [browsersync](https://browsersync.io)を使用した開発環境でのホットリロード
- [Vue Router](https://router.vuejs.org)
- [vue-meta](https://vue-meta.nuxtjs.org)
- [Pinia](https://pinia.vuejs.org)
- [Sass](https://sass-lang.com)
- [Axios](https://github.com/axios/axios)
- [create-vue](https://github.com/vuejs/create-vue) でビルドしたものをベースにしています

## Getting started
0. ローカル環境の構築  
[local](https://localwp.com/?download)、[bitnami](https://bitnami.com/stack/wordpress/installer)、XAMPP等好きなものをご使用下さい

1. このリポジトリを `wp-content/themes/` ディレクトリにクローン  
ディレクトリ名を変更する場合、`settings.js` の `THEME_DIRECTORY_NAME` の値を変更して下さい。
2. `npm install`  
3. [`.env.sample`](.env.sample) を `.env` にコピーし、ファイルを編集して下さい。  
`VITE_WEBSITE_NAME` はサイトのtitle属性などに使用されます。  
ビルドされるファイル名を変更したい場合は、`THEME_DIRECTORY_NAME`の値を変更して下さい。  
4. `npm run watch` を実行し、ホットリロードを有効にした状態でビルドを行います
5. WordPressの設定にて、該当テーマを有効にします
6. パーマリンク設定 `(設定 -> パーマリンク)` を **"日付と投稿名"** に変更します  
パーマリンク設定を変更したい場合は `router/index.js` を編集して下さい。

7. 本番環境にあげる準備が整ったら、`npm run build` を実行し、 `theme-dir` ディレクトリをサーバ上の `wp-content/themes/` ディレクトリに格納します。(テーマの有効化を忘れずに！)

## 参考
- [vue-router](https://github.com/vuejs/router)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
