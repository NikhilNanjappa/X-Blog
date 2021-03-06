
/*Begin custom.js file
azee - Minimal Blog theme for Jekyll  main JS file
 *  owwwlab.com @2014
 *  owwwlab@gmail.com
----------------------------------------------*/
(function($) {
    "use strict";

    var $emptyHeaders=$('.blog-no-header').parents('.post-header');
    $emptyHeaders.parents('.post-item').addClass('no-header');
    $emptyHeaders.remove();

    var $contactwrapper=$('#contact-wrapper');

    $('#contact-section').on('click',function(e){
    	e.preventDefault();
    	$contactwrapper.animate({top:0},300);
    })
    $('#contact-close').on('click',function(e){
    	e.preventDefault();
    	$contactwrapper.animate({top:'100%'},300);
    })

 })(jQuery);

 jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.size() == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
       var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
            }
    });

    };
  
  // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

// Accordion
 var headers = ["H1","H2","H3","H4","H5","H6"];

$(".accordion").click(function(e) {
  var target = e.target,
      name = target.nodeName.toUpperCase();
  
  if($.inArray(name,headers) > -1) {
    var subItem = $(target).next();
    
    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion p, .accordion div").filter(function() {
      if($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true; 
      }
    });
    $(allAtDepth).slideUp("fast");
    
    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle("fast",function() {
        $(".accordion :visible:last");
    });
    $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
  }
});

// Search
$('.link.search').click(function(){
    $('#searching').addClass('active');
    $('#searchThis input').focus();
});

$('#closeSearch').click(function(){
    $('#searching').removeClass('active');
    $('#searchThis input').blur();
    $('#searchThis input').val('');
    $('#searchResults').empty();
});