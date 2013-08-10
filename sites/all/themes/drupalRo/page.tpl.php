<div id="container" class="clearfix">
	<div id="skip-link">
		<a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
		<?php if ($main_menu): ?>
		<a href="#navigation" class="element-invisible element-focusable"><?php print t('Skip to navigation'); ?></a>
		<?php endif; ?>
	</div>
	
		<?php if(!empty($page['top_header'])){?>
			<section id="top-header" role="banner" class="clearfix">
				<div id="top-header-block">
					<?php print render($page['top_header']); ?>
				</div>	
			</section> <!-- /#top_header -->
		<?php }?>
	
		<?php if(!empty($page['header'])){?>
			<header id="header" role="banner" class="clearfix">
				<div id="header-block">
					<?php print render($page['header']); ?>
				</div>
			</header> <!-- /#header -->
		<?php }?>
  
		<?php if(!empty($page['nivo_bar'])){
		?>
		<section id="nivo-bar" role="banner" class="clearfix">
			<div id="nivo-bar-block">
				<?php print render($page['nivo_bar']); ?>
			</div>
		</section> <!-- /#nivo-bar -->
		<?php }?>
	
	
	<div id="page">
		<section id="main" role="main" class="clearfix">
			<div id="main-content-sidebar-second">
				<?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper clearfix"><?php print render($tabs); ?></div><?php endif; ?>
				<?php print render($page['help']); ?>
				<?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
			<?php if(!empty($page['content'])){?>	
				<div id="main-content">
					<?php print $messages; ?>
					<?php print render($page['content']); ?>
				</div>
			<?php }?>
			<?php if(!empty($page['sidebar_second'])){?>
				<div id="sidebar-second">
					<?php print render($page['sidebar_second']); ?>
				</div>
			<?php }?>
			</div>
		</section> <!-- /#main -->

	</div>
	
		<?php if(!empty($page['footer'])){?>
			<footer id="footer" role="contentinfo" class="clearfix">
				<div id="footer-block">
					<?php print render($page['footer']); ?>
				</div>
			</footer> <!-- /#footer -->
		<?php } ?>
</div> <!-- /#container -->
