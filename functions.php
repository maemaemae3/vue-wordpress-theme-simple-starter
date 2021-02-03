<?php
add_theme_support('title-tag');

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
		get_stylesheet_directory_uri() . '/dist/scripts/app.js',
		array( 'jquery' ),
		filemtime( get_stylesheet_directory() . '/dist/scripts/app.js' ),
		true
	);

	wp_enqueue_style(
		'vue-wordpress-theme-simple-starter',
		get_stylesheet_directory_uri() . '/dist/styles.css',
		null,
		filemtime( get_stylesheet_directory() . '/dist/styles.css' )
	);
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );

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