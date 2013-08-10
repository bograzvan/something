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
$nid = $fields['nid']->content;
?>
<script>
jQuery(document).ready(function(){
	//jQuery('.button_<?php echo $nid; ?>').hide();

	jQuery('#body_<?php echo $nid; ?>').click(function(){
		if(jQuery('#button_<?php echo $nid; ?>').text() == 'Close'){
			jQuery('.ev-body-trimed').show();
			jQuery('#button_<?php echo $nid; ?>').text('Details');
			jQuery('.button_<?php echo $nid; ?>').fadeOut('fast');
		}else if(jQuery('#button_<?php echo $nid; ?>').text() == 'Details'){
			jQuery('.ev-body-trimed').hide();
			jQuery('#button_<?php echo $nid; ?>').text('Close');
			jQuery('.button_<?php echo $nid; ?>').fadeIn('fast');
		}
	})
})
</script>

<?php
	if($block = _block_get_renderable_array(_block_render_blocks(array(block_load('shareThis', 'sharethis_block'))))){    
		$output = drupal_render($block);} 
?>

<div class="row">
	<div class="the_date"><?php print $fields['field_date']->content; ?></div>
	<div id='body_<?php echo $nid; ?>'>
	<div id="evenimente-body">
		<?php
			echo "<div id='button_".$nid."' class='button_id'>Details</div>";
			echo '<div class="ev-title">'.$fields['title']->content.'</div>';
			echo '<div class="ev-body-trimed">'.$fields['body_1']->content.'</div>';
			echo '<div style="display: none;" class="ev-body button_'.$nid.'">'.$fields['body']->content.'</div>';
			echo '<div style="display: none;" class="ev-field-program-label button_'.$nid.'">'.$fields['field_program']->label.'</div>';
			echo '<div style="display: none;" class="ev-field-program button_'.$nid.'">'.$fields['field_program']->content.'</div>';
			echo '<div style="display: none;" class="ev-field-locatie-label button_'.$nid.'">'.$fields['field_locatie']->label.'</div>';
			echo '<div style="display: none;" class="ev-field-locatie button_'.$nid.'">'.$fields['field_locatie']->content.'</div>';
			echo '<div style="display: none;" class="ev-field-parteneri-label button_'.$nid.'">'.$fields['field_parteneri']->label.'</div>'; 
			echo '<div style="display: none;" class="ev-field-parteneri button_'.$nid.'">'.$fields['field_parteneri']->content.'</div>'; 
			echo '<div style="display: none;" class="ev-field-sharethis button_'.$nid.'">'.$output.'Share'.'</div>';
		?>
	</div>
	</div>
</div>
