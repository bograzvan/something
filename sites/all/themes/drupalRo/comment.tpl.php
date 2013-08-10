<article class="<?php print $classes . ' ' . $zebra; ?>"<?php print $attributes; ?>>
  
  <header>
	<?php /*    
	<?php print render($title_prefix); ?>
    <h3<?php print $title_attributes; ?>><?php print $title ?></h3>
    <?php print render($title_suffix); ?>
    */?>
	
    <span class="submitted"><?php print $author; ?> - <?php //print $created; ?></span>
	
	<?php /*
    <?php if ($new): ?>
      <span class="new"><?php print $new ?></span>
    <?php endif; ?>
	  */?>
  </header>
  <div class="content"<?php print $content_attributes; ?>>
  <?php print $picture; ?>
  <div id='comments-date' ><?php print date('d M Y',$comment->created); ?></div>
  <?php hide($content['links']); print render($content); ?><?php /*echo "<img id='comment-white-arrow' src='/sites/all/themes/drupalRo/img/commentLeftWhiteArrow.png'></img>"*/?>
  <?php if ($signature): ?>
  <div class="user-signature clearfix">
    <?php print $signature ?>
  </div>
    <?php endif; ?>
  </div>

  <?php if (!empty($content['links'])): ?>
    <footer>
      <?php print render($content['links']) ?>
    </footer>
  <?php endif; ?>
 
</article> <!-- /.comment -->
