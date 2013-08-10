<?php //drupal_set_message(print_r($node, 1));
	//dpm($node);
	render($node);
	if($block = _block_get_renderable_array(_block_render_blocks(array(block_load('shareThis', 'sharethis_block'))))){    
	$output = drupal_render($block);}
?>

<?php global $language; ?>

<div class="articol">
	<div><?php echo render($content['field_image']); ?></div>
	<div id="blog-title"><?php echo $node->title; ?></div>
	<br>
	<div id="posted-by-blog-links">
		<div id="posted-by"><?php echo 'Postat de '.'<a>'.$node->name.'</a>'.' pe '.
			date('d M Y',$node->created).'<div id="bubble"><img src="/sites/all/themes/drupalRo/img/bubble.png"></img></div>'.
			$node->comment_count.' '.'<span>comentarii</span>';?></div>
		<div id="blog-links"><?php echo $output; ?></div> <?php //to show the 'share this' button ?>
	</div>
	<br>
	<div id='article-body'><?php echo render($content['body']); ?></div>
	<?php echo render($content['flippy_pager']);?>
	<?php if($node->comment_count > 0){ ?>
		<div id='articole-comentarii-title'><h2><?php echo t('Comentarii'); ?></h2></div>
	<?php }?>
	<div><?php echo render($content['comments']); ?></div> <?php // to show the comments ?>
	<div id="article-read-more-link" class="article-more-read-link">
		<a <?php if(!$page) {echo "href='node/$node->nid'";};?> ><?php
			if($language->language == 'en') {echo 'Read more';}
			if($language->language == 'ro') {echo 'Citește mai departe';};?></a></div>
</div>