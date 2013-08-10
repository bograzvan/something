/* login menu */
	var y = 0;
	var y2 = 0;
	var x = 0;

jQuery('#body').hide();
jQuery(document).ready(function(){
	jQuery('#body').show();
	//alert(document.documentElement.clientWidth);
	//jQuery('#footer').css('top', document.documentElement.clientHeight);
	//jQuery('#login-button').mousedown(function(){ return false;}); /* UNCOMMENT THIS IF YOU WANT TO DISPLAY THE LOGIN MENU BLOCK IN THE HEADER */
	//jQuery('#login-button').mouseup(function(){ return false;});
	//jQuery('#login-button').click(function(){
		//jQuery('#user-login-form').fadeToggle("slow");
		//return false;
	//})
	
	jQuery('#main-content .view-showcase-highlights .view-footer .view-display-id-block_4').hide();
	jQuery('#main-content .view-showcase-highlights .view-footer .view-display-id-block_3').show();
	jQuery('#main-content .view-showcase-highlights .view-footer .view-display-id-block_6').hide();
	
	jQuery('#article-read-more-link span').text('Citeste mai departe');
	jQuery('#featured-posts').unwrap();
	jQuery('#recent-comments').unwrap();
	
	// DROP DOWN MENU CODE - START
	/*planeta drupal drop down menu*/
	
	jQuery('#block-system-main-menu ul li a').mouseover(function(){
		jQuery(this).css('background-color','#81ceff');
		return false;
		})
		
	
	jQuery('#block-system-main-menu ul li a').mouseleave(function(){
		jQuery(this).css('background-color','#fff');
		return false;
	})
	/*
	jQuery('#main-menu-evenimente').mouseenter(function(e){
		jQuery('#main-menu-evenimente').show();
		jQuery('#drop-down-menu').show();
		y = jQuery('#block-system-main-menu').offset();
		e.stopPropagation();
		return false;
	})	
		
	jQuery('#main-menu-evenimente').mouseleave(function(e){
		jQuery('#main-menu-evenimente').css('background-color','#fff');
		if(e.pageY < y.top + 25){ //25 is half the height of the menu item
			jQuery('#drop-down-menu').hide();
			jQuery(this).css('background-color','#fff');	
		}else{
			jQuery('#drop-down-menu').show();
			jQuery(this).css('background-color','#81ceff');	
		}
		return false;
	})
	
	jQuery('#drop-down-menu').mouseleave(function(e){
		jQuery('#drop-down-menu').hide();
		jQuery('#main-menu-evenimente').css('background-color','#fff');
		return false;
	})*/
	//DROP DOWN MENU CODE - END
	
	jQuery('#edit-search-block-form--2').click(function(){
		jQuery('#edit-search-block-form--2').val('');	
	})
	
	jQuery('#user-register-form .username').click(function(){
		jQuery('#user-register-form .username').val('');	
	})
	
	jQuery('#user-register-form .form-item-mail input.form-text').click(function(){
		jQuery('#user-register-form .form-item-mail input.form-text').val('');	
	})
	
	jQuery('#comments .field-name-comment-body').removeClass('field-label-inline');
	jQuery('#comments .field-name-comment-body').removeClass('clearfix');	
	
	var i = 1;
	
	jQuery('#main-content .view-down .views-row-1 .field-content p').each(function(i){
		if(i<1){
			jQuery(this).attr('class','first-p');
		}
		if(i>1 && i<4){
			jQuery(this).attr('class','next-p');
		}
		if(i>3){
			jQuery(this).remove();
			i++;
		}
	}) 

	jQuery('#main-content-sidebar-second ul.tabs li').each(function(i){
		if(i==2){
			jQuery(this).attr('class','social-login-identities');
		}
	})
	
	jQuery('#edit-submitted-creaza-un-grup-nou-creza-un-grup-nou').click(function(){
		jQuery(this).val('');
	})
	
	jQuery('#edit-submitted-creaza-un-grup-nou-descriere-scurta').click(function(){
		jQuery(this).val('');
	})
	
	jQuery('#main-content-sidebar-second ul.tabs li').each(function(i){
		if(i==0){
			jQuery(this).attr('class', 'create-new-account');
		}
		if(i==1){
			jQuery(this).attr('class', 'log-in');
		}
	})
	
	jQuery('#edit-submitted-creaza-un-grup-nou-creza-un-grup-nou').attr('size','0');
	if(navigator.userAgent.match(/iPad/i)) {
		jQuery('#edit-submitted-creaza-un-grup-nou-creza-un-grup-nou').css('width','93%');
	}

	var cicle = true;
	
	jQuery('#webform-component-creaza-un-grup-nou legend a.fieldset-title').click(function(){
		if(cicle){
			jQuery('#webform-component-creaza-un-grup-nou').css('min-height','35px');
			jQuery('#webform-client-form-1312 div .form-actions .form-submit').hide();
			cicle = false;
		}else{
			jQuery('#webform-component-creaza-un-grup-nou').css('min-height','230px');
			jQuery('#webform-client-form-1312 div .form-actions .form-submit').show();
			cicle = true;
		}
	})	
});