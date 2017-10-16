

$(document).ready(function(){


	 $('.Main_tab li').eq(0).addClass('active');

	 $('.News_List ul').eq(0).siblings().css("display","none");
	 
	 
	 
	 $(".Main_tab li").hover(function(){
		
		  var $this = $(this);
 
		  if( $this.hasClass('active') ) return;
 
		  $this.toggleClass('hover');
	
	 }).click(function(){
		  
		  var  _ActiveIndex = $('.Main_tab li').filter('.active').index(), 
		  
		       $this = $(this),
		  
			   _Index = $this.index();
	     
		  
		  if(_ActiveIndex != _Index){

		      //隱藏原本顯示的分類
			  $('.Main_tab li').filter('.active').removeClass('active').removeClass('hover');
			  
		      $('.News_List ul').eq(_ActiveIndex).css("display","none");
		 
		      //取得點選的標籤，將其對應的分類內容秀出
	          $('.News_List ul').eq(_Index).css("display","block");
	          $('.Main_tab li').eq(_Index).addClass('active');
		  
		  }

 
	 });
	 
});	 