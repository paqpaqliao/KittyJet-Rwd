

$(document).ready(function(){


	 $('.Main_tab li').eq(0).addClass('active');
     $('.Second a').eq(0).addClass('active');

	 $('.Airplane_Detail ul').eq(0).css("display","block");
	 
	 
	 $(".Second a").click(function(){

		  var _ActiveIndex = $('.Main_tab li').filter('.active').index(), 
		  
		      $this = $(this),
		  
			  _Index = $this.index();
			  
			  
		  if(_ActiveIndex != _Index){
			  
		      $('.Second a').filter('.active').removeClass('active');
		     
			  $('.Main_tab li').filter('.active').removeClass('active').removeClass('hover');
		  
		 
		      $('.Airplane_Detail ul').eq(_ActiveIndex).fadeOut("fast",function(){
		 
	              $('.Airplane_Detail ul').eq(_Index).fadeIn();
	              $('.Main_tab li').eq(_Index).addClass('active');
	              $this.addClass('active');
				  
				  $('#RoutesST')[0].selectedIndex = _Index;
			  
	          });
		  }

	 });
	 
});	 

	 
function TabSelect(Val)
{
    var _ActiveIndex = $('.Main_tab li').filter('.active').index(), 
		  
	    _Index = Val;
	     		  
	if(_ActiveIndex != _Index){
			  
	    $('.Main_tab li').filter('.active').removeClass('active').removeClass('hover');
		$('.Second a').filter('.active').removeClass('active');
		
	    $('.Airplane_Detail ul').eq(_ActiveIndex).fadeOut("fast",function(){
		  
	        $('.Airplane_Detail ul').eq(_Index).fadeIn();
	        $('.Main_tab li').eq(_Index).addClass('active');
			$('.Second a').eq(_Index).addClass('active');
		  
	    });		  
	}	
}
