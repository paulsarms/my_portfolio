
//# sourceMappingURL=scripts.map
jQuery(document).ready(function () {
	var foldheight = jQuery(window).height();
    jQuery(".front #header-wrapper").css("height", foldheight + "px");
	
	jQuery(".front .mid-415").click(function() {
		jQuery('html, body').animate({
			scrollTop: jQuery("#block-52 h3.title").offset().top - 40
		}, 1000);
	});
	jQuery(".front .mid-417").click(function() {
		jQuery('html, body').animate({
			scrollTop: jQuery("#block-50 h3.title").offset().top - 40
		}, 1000);
	});
	
	 if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      if(hash=="portfolio"){
			jQuery('html, body').animate({
				scrollTop: jQuery("#block-52 h3.title").offset().top - 40
			}, 1000);
	  }
	  if(hash=="resume"){
			jQuery('html, body').animate({
				scrollTop: jQuery("#block-50 h3.title").offset().top - 40
			}, 1000);
	  }
      // hash found
  } else {
      // No hash found
  }
  
 // jQuery(".views-widget .form-item.form-type-radio.form-item-tid").click(function(){
	//  jQuery(".view-portfolio .view-content").fadeOut();
	 // jQuery(".view-portfolio .view-content").fadeIn();
	 // console.log("clocked");
 // });
  
});