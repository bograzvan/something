<?php //drupal_set_message(print_r($node, 1)); ?>

<div class="situri-drupal">
	<div id="situri-drupal-title"><?php echo $node->title; ?></div>
	<div id="situri-drupal-field-image"><?php echo render($content['field_image']); ?></div>
	<div id="situri-drupal-body"><?php echo render($content['body']); ?></div>
	<div id="situri-drupal-tags"><?php echo render($content['field_tags']); ?></div>
	<div id="situri-drupal-link-to-site"><?php echo render($content['field_link_to_site']); ?></div>
</div>