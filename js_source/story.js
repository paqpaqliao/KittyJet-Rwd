

$(document).ready(function(){


	 $('.Main_tab li').eq(0).addClass('active');

	 $('.Airplane_Detail > div').eq(0).css("display","block");
	 	 
	 
	 $(".Main_tab li").hover(function(){
		
		var $this = $(this);
 
		if( $this.hasClass('active') ) return;
 
		$this.toggleClass('hover');
	
	 }).click(function(){
		  
		var _ActiveIndex = $('.Main_tab li').filter('.active').index(), 
		  
		    $this = $(this),
		  
		    _Index = $this.index();
	     		  
		if(_ActiveIndex != _Index){
			  
		    $('.Main_tab li').filter('.active').removeClass('active').removeClass('hover');
		 
		    $('.Airplane_Detail > div').eq(_ActiveIndex).fadeOut("fast",function(){
		  
	            $('.Airplane_Detail > div').eq(_Index).fadeIn();
	            $('.Main_tab li').eq(_Index).addClass('active');
				
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
		 
	    $('.Airplane_Detail > div').eq(_ActiveIndex).fadeOut("fast",function(){
		  
	        $('.Airplane_Detail > div').eq(_Index).fadeIn();
	        $('.Main_tab li').eq(_Index).addClass('active');
		  
	    });		  
	}	
}
