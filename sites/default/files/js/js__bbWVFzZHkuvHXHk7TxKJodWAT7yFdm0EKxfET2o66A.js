/******************************************************************************************************************************

 * @ Original idea by by Binny V A, Original version: 2.00.A 
 * @ http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * @ Original License : BSD
 
 * @ jQuery Plugin by Tzury Bar Yochay 
        mail: tzury.by@gmail.com
        blog: evalinux.wordpress.com
        face: facebook.com/profile.php?id=513676303
        
        (c) Copyrights 2007
        
 * @ jQuery Plugin version Beta (0.0.3)
 * @ License: jQuery-License.
 
TODO:
    add queue support (as in gmail) e.g. 'x' then 'y', etc.
    add mouse + mouse wheel events.

USAGE:
    $.hotkeys.add('Ctrl+c', function(){ alert('copy anyone?');});
    $.hotkeys.add('Ctrl+c', {target:'div#editor', type:'keyup', propagate: true},function(){ alert('copy anyone?');});>
    $.hotkeys.remove('Ctrl+c'); 
    $.hotkeys.remove('Ctrl+c', {target:'div#editor', type:'keypress'}); 
    
******************************************************************************************************************************/
(function (jQuery) {

  this.version = '(beta)(0.0.3)';

  this.all = {};

  this.special_keys = {
    27: 'esc', 9: 'tab', 32:'space', 13: 'return', 8:'backspace', 145: 'scroll', 20: 'capslock', 
    144: 'numlock', 19:'pause', 45:'insert', 36:'home', 46:'del',35:'end', 33: 'pageup', 
    34:'pagedown', 37:'left', 38:'up', 39:'right',40:'down', 112:'f1',113:'f2', 114:'f3', 
    115:'f4', 116:'f5', 117:'f6', 118:'f7', 119:'f8', 120:'f9', 121:'f10', 122:'f11', 123:'f12'};        

  this.shift_nums = { "`":"~", "1":"!", "2":"@", "3":"#", "4":"$", "5":"%", "6":"^", "7":"&", 
    "8":"*", "9":"(", "0":")", "-":"_", "=":"+", ";":":", "'":"\"", ",":"<", 
    ".":">",  "/":"?",  "\\":"|" };        

  this.add = function(combi, options, callback) {
    if (jQuery.isFunction(options)) {
      callback = options;
      options = {};
    }
    var opt = {};
    var defaults = {type: 'keydown', propagate: false, disableInInput: false, target: 'html'};
    var that = this;
    var opt = jQuery.extend( opt , defaults, options || {} );
    combi = combi.toLowerCase();        
        
    // inspect if keystroke matches
    var inspector = function(event) {
      event = jQuery.event.fix(event); // jQuery event normalization.
      var selector = event.data.selector;
      var element = jQuery(event.target);

      // Disable shortcut keys in Input, Textarea fields
      if(opt['disableInInput'] && element.is('textarea, input')) {
        return;
      }

      var
        code = event.which,
        type = event.type,
        character = String.fromCharCode(code).toLowerCase(),
        special = that.special_keys[code],
        shift = event.shiftKey,
        ctrl = event.ctrlKey,
        alt= event.altKey,
        propagate = true, // default behaivour
        mapPoint = null;

      var cbMap = that.all[selector].events[type].callbackMap;
      if(!shift && !ctrl && !alt) { // No Modifiers
        mapPoint = cbMap[special] ||  cbMap[character]
      }
      
      // deals with combinaitons (alt|ctrl|shift+anything)
      else{
        var modif = '';
        if(alt) modif +='alt+';
        if(ctrl) modif+= 'ctrl+';
        if(shift) modif += 'shift+';
        // modifiers + special keys or modifiers + characters or modifiers + shift characters
        mapPoint = cbMap[modif+special] || cbMap[modif+character] || cbMap[modif+that.shift_nums[character]]
      }

      if (mapPoint){
        mapPoint.cb(event);
        if(!mapPoint.propagate) {
          event.stopPropagation();
          event.preventDefault();
          return false;
        }
      }
    };

    // first hook for this element
    if (!this.all[opt.target]){
      this.all[opt.target] = {events:{}};
    }
    if (!this.all[opt.target].events[opt.type]){
      this.all[opt.target].events[opt.type] = {callbackMap: {}}
      jQuery(opt.target).bind(opt.type, {selector: opt.target}, inspector);
    }
    this.all[opt.target].events[opt.type].callbackMap[combi] =  {cb: callback, propagate:opt.propagate};                
    return jQuery;
	};    

  this.remove = function(exp, opt) {
    opt = opt || {};
    target = opt.target || 'html';
    type = opt.type || 'keydown';
    exp = exp.toLowerCase();
    jQuery(target).unbind(type);
    delete this.all[target].events[type].callbackMap[exp];
    return jQuery;
	};
	
  jQuery.hotkeys = this;
  return jQuery;    

})(jQuery);;

/**
 * Cookie plugin 1.0
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};
;

(function ($) {

// Store all l10n_client related data + methods in its own object
$.extend(Drupal, {
  l10nClient: new (function() {
    // Set "selected" string to unselected, i.e. -1
    this.selected = -1;
    // Keybindings
    this.keys = {'toggle':'ctrl+shift+s', 'clear': 'esc'}; // Keybindings
    // Keybinding functions
    this.key = function(pressed) {
      switch(pressed) {
        case 'toggle':
          // Grab user-hilighted text & send it into the search filter
          userSelection = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text;
          userSelection = String(userSelection);
          if(userSelection.length > 0) {
            Drupal.l10nClient.filter(userSelection);
            Drupal.l10nClient.toggle(1);
            $('#l10n-client .string-search').val(userSelection);
            $('#l10n-client .string-search').focus();
          } else {
            if($('#l10n-client').is('.l10n-client-minimized')) {
              Drupal.l10nClient.toggle(1);
              if(!$.browser.safari) {
                $('#l10n-client .string-search').focus();
              }
            } else {
              Drupal.l10nClient.toggle(0);
            }
          }
        break;
        case 'clear':
          this.filter(false);
        break;
      }
    }
    // Toggle the l10nclient
    this.toggle = function(state) {
      switch(state) {
        case 1:
          $('#l10n-client-string-select, #l10n-client-string-editor, #l10n-client .labels .label').show();
          $('#l10n-client').height('22em').removeClass('l10n-client-minimized');
          $('#l10n-client .labels .toggle').text('X');
          if(!$.browser.msie) {
            $('body').css('border-bottom', '22em solid #fff');
          }
          $.cookie('Drupal_l10n_client', '1', {expires: 7, path: '/'});
        break;
        case 0:
          $('#l10n-client-string-select, #l10n-client-string-editor, #l10n-client .labels .label').hide();
          $('#l10n-client').height('2em').addClass('l10n-client-minimized');
          $('#l10n-client .labels .toggle').text(Drupal.t('Translate Text'));
          if(!$.browser.msie) {
            $('body').css('border-bottom', '0px');
          }
          $.cookie('Drupal_l10n_client', '0', {expires: 7, path: '/'});
        break;
      }
    }
    // Get a string from the DOM tree
    this.getString = function(index, type) {
      return $('#l10n-client-data div:eq('+index+') .'+type).text();
    }
    // Set a string in the DOM tree
    this.setString = function(index, data) {
      $('#l10n-client-data div:eq('+index+') .target').text(data);
    }
    // Filter the the string list by a search string
    this.filter = function(search) {
      if(search == false || search == '') {
        $('#l10n-client #l10n-client-search-filter-clear').focus();
        $('#l10n-client-string-select li').show();
        $('#l10n-client .string-search').val('');
        $('#l10n-client .string-search').focus();
      } else {
        if(search.length > 0) {
          $('#l10n-client-string-select li').hide();
          $('#l10n-client-string-select li:contains('+search+')').show();
        }
      }
    }
  })
});

// Attaches the localization editor behavior to all required fields.
Drupal.behaviors.l10nClient = {}
Drupal.behaviors.l10nClient.attach = function (context) {
  // Killswitch - attach only once.
  if ($('#l10n-client').is('.l10n-client-processed')) {
    return;
  }

  // First time - init & attach all handlers.
  $('#l10n-client').addClass('l10n-client-processed');

  switch($.cookie('Drupal_l10n_client')) {
    case '1':
      Drupal.l10nClient.toggle(1);
    break;
    default:
      Drupal.l10nClient.toggle(0);
    break;
  }

  // If the selection changes, copy string values to the source and target fields.
  // Add class to indicate selected string in list widget.
  $('#l10n-client-string-select li').click(function() {
    $('#l10n-client-string-select li').removeClass('active');
    $(this).addClass('active');
    var index = $('#l10n-client-string-select li').index(this);

    $('#l10n-client-string-editor .source-text').text(Drupal.l10nClient.getString(index, 'source'));
    $('#l10n-client-form .translation-target').val(Drupal.l10nClient.getString(index, 'target'));
    $('#l10n-client-form .source-textgroup').val(Drupal.l10nClient.getString(index, 'textgroup'));
    $('#l10n-client-form .source-context').val(Drupal.l10nClient.getString(index, 'context'));
    $('#l10n-client-string-editor .context').text(Drupal.l10nClient.getString(index, 'context'));

    Drupal.l10nClient.selected = index;
    $('#l10n-client-form .form-submit').removeAttr("disabled");
  });

  // When l10n_client window is clicked, toggle based on current state.
  $('#l10n-client .labels .toggle').click(function() {
    if($('#l10n-client').is('.l10n-client-minimized')) {
      Drupal.l10nClient.toggle(1);
    } else {
      Drupal.l10nClient.toggle(0);
    }
  });

  // Copy source text to translation field on button click.
  $('#l10n-client-form .edit-copy').click(function() {
    $('#l10n-client-form .translation-target').val($('#l10n-client-string-editor .source-text').text());
    return false;
  });

  // Clear translation field on button click.
  $('#l10n-client-form .edit-clear').click(function() {
    $('#l10n-client-form .translation-target').val('');
    return false;
  });

  // Register keybindings using jQuery hotkeys
  if($.hotkeys) {
    $.hotkeys.add(Drupal.l10nClient.keys['toggle'], function(){Drupal.l10nClient.key('toggle')});
    $.hotkeys.add(Drupal.l10nClient.keys['clear'], {target:'#l10n-client .string-search', type:'keyup'}, function(){Drupal.l10nClient.key('clear')});
  }

  // Custom listener for l10n_client livesearch
  $('#l10n-client .string-search').keyup(function(key) {
    Drupal.l10nClient.filter($('#l10n-client .string-search').val());
  });

  // Clear search
  $('#l10n-client #l10n-client-search-filter-clear').click(function() {
    Drupal.l10nClient.filter(false);
    return false;
  });

  // Send AJAX POST data on form submit.
  $('#l10n-client-form').submit(function() {
    $('#l10n-client-form .form-submit').attr("disabled", "true");
    $.ajax({
      type: "POST",
      url: $('#l10n-client-form').attr('action'),
      // Send source and target strings.
      data: {
        source: $('#l10n-client-string-editor .source-text').text(),
        target: $('#l10n-client-form .translation-target').val(),
        textgroup: $('#l10n-client-form .source-textgroup').val(),
        context: $('#l10n-client-string-editor .context').text(),
        'form_token': $('#l10n-client-form input[name=form_token]').val()
      },
      success: function (data) {
        // Store string in local js
        Drupal.l10nClient.setString(Drupal.l10nClient.selected, $('#l10n-client-form .translation-target').val());

        // Figure out the display of the new translation in the selection list.
        var newTranslation = $('#l10n-client-form .translation-target').val();
        var newTranslationDisplay = newTranslation;
        var newTranslationStripped = newTranslation.replace(/<\/?[^<>]+>/gi, '')
                                                   .replace(/&quot;/g, '"')
                                                   .replace(/&lt;/g, "<")
                                                   .replace(/&gt;/g, ">")
                                                   .replace(/&amp;/g, "&");
        if (newTranslationStripped.length == 0) {
          // Only contains HTML tags (edge case). Keep the whole string.
          // HTML tags will show up in the selector, but that is normal in this case.
          newTranslationDisplay = newTranslation;
        }
        else if (newTranslationStripped.length > 81) {
          // Long translation, strip length to display only first part.
          // We strip at 78 chars and add thre dots, if the total length is
          // above 81.
          newTranslationDisplay = newTranslationStripped.substr(0, 78) + '...';
        }

        // Mark string as translated.
        $('#l10n-client-string-select li').eq(Drupal.l10nClient.selected).removeClass('untranslated').removeClass('active').addClass('translated').text(newTranslationDisplay);

        // Empty input fields.
        $('#l10n-client-string-editor .source-text').html(data);
        $('#l10n-client-form .translation-target').val('');

      },
      error: function (xmlhttp) {
        alert(Drupal.t('An HTTP error @status occured.', { '@status': xmlhttp.status }));
      }
    });
    return false;
  });

};

})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
