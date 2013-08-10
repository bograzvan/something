<div class="feed-items">
	<div id="feed-items-title"><a <?php echo "href=".url('node/'.$node->nid);?>><?php echo $node->title;?></a></div>
	<br>
	<div><?php echo render($content['field_feed_item_description']); ?></div>
</div>