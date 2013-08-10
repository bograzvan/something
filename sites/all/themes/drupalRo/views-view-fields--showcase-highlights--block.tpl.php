<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
 
?>	<div class='highlights-showcase-image'><?php print $fields['field_image']->content; ?></div>
	<div class='highlights-showcase'>
		<div class='highlights-showcase-title'><?php print $fields['title']->content; ?></div>
		<div class='highlights-showcase-continut'><?php print $fields['field_continut']->content; ?></div>
		<div class='highlights-showcase-site'>
			<div class='highlights-showcase-site-info-label'><?php print $fields['field_site_info']->label; ?></div>
			<div class='highlights-showcase-site-info'><?php print $fields['field_site_info']->content; ?></div>
		</div>
		<div class='highlights-showcase-dezvoltator'>
			<div class='highlights-showcase-dezvoltator-info-label'><?php print $fields['field_dezvoltator_info']->label; ?></div>
			<div class='highlights-showcase-dezvoltator-info'><?php print $fields['field_dezvoltator_info']->content; ?></div>
		</div>
		<div class='highlights-showcase-field-rating'><?php print $fields['field_rating']->content; ?></div>
		<div class='highlights-showcase-field-tags'>
			<div class='highlights-showcase-field-tags-categorii-label'><?php print $fields['field_tags']->label; ?></div>
			<div class='highlights-showcase-field-tags-categorii'><?php print $fields['field_tags']->content; ?></div>
		</div>
	</div>
	<hr>