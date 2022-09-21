<?php
add_theme_support('title-tag');
function change_title_separator( $sep ){
  $sep = ' | ';
  return $sep;
}
add_filter( 'document_title_separator', 'change_title_separator' );

// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
  add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

// Load scripts
function load_vue_scripts() {
  wp_enqueue_script(
    'vue-wordpress-theme-simple-starter',
    get_stylesheet_directory_uri() . '/dist/assets/main.js',
    array( 'jquery' ),
    filemtime( get_stylesheet_directory() . '/dist/assets/main.js' ),
    true
  );

  wp_enqueue_style(
    'vue-wordpress-theme-simple-starter',
    get_stylesheet_directory_uri() . '/dist/assets/main.css',
    null,
    filemtime( get_stylesheet_directory() . '/dist/assets/main.css' )
  );
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );

function meta_ogp() {
  $title = is_single()
    ? strip_tags(get_the_title()) . ' | ' . get_bloginfo('name')
    : get_bloginfo('name');

  echo '<meta property="og:title" content="' .$title .'">';
}
add_action( 'wp_head', 'meta_ogp' );

// https://liginc.co.jp/367078
function add_thumbnail_to_JSON() {
  register_rest_field('post',
    'featured_image', //NAME OF THE NEW FIELD TO BE ADDED - you can call this anything
    array(
      'get_callback' => 'wp_get_featured_image',
      'update_callback' => null,
      'schema' => null,
    )
  );
}

function wp_get_featured_image($object, $field_name, $request) {
  $feat_img_array = wp_get_attachment_image_src($object['featured_media'], 'large', true);
  return [
    'src' => $feat_img_array[0],
    'width' => $feat_img_array[1],
    'height' => $feat_img_array[2],
  ];
}
add_action('rest_api_init', 'add_thumbnail_to_JSON');

function add_site_title_to_post_JSON() {
  register_rest_field('post',
    'site_title',
    array(
      'get_callback' => function () {
        return get_bloginfo('name');
      },
      'update_callback' => null,
      'schema' => null,
    )
  );
}
add_action('rest_api_init', 'add_site_title_to_post_JSON');

function add_site_title_to_page_JSON() {
  register_rest_field('page',
    'site_title',
    array(
      'get_callback' => function () {
        return get_bloginfo('name');
      },
      'update_callback' => null,
      'schema' => null,
    )
  );
}
add_action('rest_api_init', 'add_site_title_to_page_JSON');

function replace_preview_post_link ($url, $post) {
  if ($post->post_status == 'publish') {
    $generate_url = $url;
  } else {
    $post_slug = basename(get_permalink());
    $generate_url = home_url().'/preview-post'.$post_slug.'&wpnonce='.wp_create_nonce('wp_rest');
  }
  return $generate_url;
}
add_filter('preview_post_link', 'replace_preview_post_link', 10, 2 );

// workaround script until there's an official solution for https://github.com/WordPress/gutenberg/issues/13998
function fix_preview_link_on_draft() {
  echo '<script type="text/javascript">
  jQuery(document).ready(function () {
    const checkPreviewInterval = setInterval(checkPreview, 1000);
    function checkPreview() {
      const editorPreviewButton = jQuery(".edit-post-header-preview__button-external");

      if (editorPreviewButton.length && editorPreviewButton.attr("href") !== "' . get_preview_post_link() . '" ) {
        editorPreviewButton.attr("href", "' . get_preview_post_link() . '");
        editorPreviewButton.off();
        editorPreviewButton.click(false);
        editorPreviewButton.on("click", function(e) {
          const editorPostSaveDraft = jQuery(".editor-post-save-draft");

          if(editorPostSaveDraft.length > 0) {
            editorPostSaveDraft.click();
          }
          const intervalId = setInterval(function() {
            // find out when the post is saved or published
            const saved = document.querySelector(".is-saved");
            const published = "' . get_post_status() . '" === "publish";
            if(saved || published) {
              clearInterval(intervalId);
              const win = window.open("' . get_preview_post_link() . '", "_blank");
              if (win) {
                win.focus();
              }
            }
          }, 50);
        });
      }
    }
  });
  </script>';
}
add_action( 'admin_footer-edit.php', 'fix_preview_link_on_draft' ); // Fired on the page with the posts table
add_action( 'admin_footer-post.php', 'fix_preview_link_on_draft' ); // Fired on post edit page
add_action( 'admin_footer-post-new.php', 'fix_preview_link_on_draft' ); // Fired on add new post page