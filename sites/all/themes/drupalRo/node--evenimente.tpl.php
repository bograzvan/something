<?php
	if($block = _block_get_renderable_array(_block_render_blocks(array(block_load('shareThis', 'sharethis_block'))))){    
		$output = drupal_render($block);} 
?>

<div class="evenimente">
	<div><?php echo render($content['field_evenimente_image']);?></div>
	<div id="evenimente-title"><?php echo $node->title; ?></div>
	<div id="posted-by-evenimente-container">
		<div id="posted-by-evenimente"><?php echo 'By '.'<a>'.$node->name.'</a>'.' on '.
			date('d M Y',$node->created).'<div id="bubble"><img src="/sites/all/themes/drupalRo/img/bubble.png"></img></div>'.
			$node->comment_count.' '.'<span>comments</span>';?></div>
		<div id="blog-links-evenimente"><?php echo $output; ?></div>
	</div>
	<div id="evenimente-body-custom"><?php echo render($content['body']); ?></div>
	<div><?php echo render($content['comments']); ?></div> 
</div>