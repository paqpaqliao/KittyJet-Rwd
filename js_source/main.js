

$(document).ready(function(){

	 var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');


	 $("#TopBt").click(function(){
		 
		  $body.animate({
			  scrollTop: 0
		  }, 500); 
 
		  return false;					 
	 });
	 

	 $('#Version').hover(function(){
		
	     $('#Version').animate({left:'-350px'},500);

	 },function(){
			
	     $('#Version').animate({left:'0'},300);

	 });
	 
		
		
	$('.Menu-trigger').on('click', function (){

		$(".MobileBlock").fadeToggle();
		$(".MobileMenuFrame").fadeToggle();
		
		
		$(this).toggleClass('active');
		
		$("body").toggleClass('body_delscroll');
		$(".MobileButton").toggleClass('MobileButton_click');
		
        return false;
    });	
	
	 

});


$(window).load(function(){
	
	$(".LoadingBox").fadeOut(500);
	
});
	
	
	
	