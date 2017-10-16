

$(document).ready(function(){


     // Tab year Select ------------------------------------------------------------------------------------------------------
	 
     //將第一分類的主年份按鈕、子選項加上標記，將第一分類以外的內容隱藏
	 $('.Main_tab li').eq(0).addClass('active');
	 $('.Second_tab li').eq(0).addClass('active');
	 
	 $('.Showcase > div').eq(0).siblings().css("display","none");
	 $('.Showcase > div').eq(0).find("ul").eq(0).siblings().css("display","none");
	 
	 
	 $(".Main_tab li").hover(function(){
		
		  var $this = $(this);
 
		  if( $this.hasClass('active') ) return;
 
		  $this.toggleClass('hover');
	
	 }).click(function(){
		  
		  var _ActiveIndex = $('.Main_tab li').filter('.active').index(), 
		  
			  _Index = $(this).index();
			  
			  _ActiveShow_Kind = $('.Showcase > div').eq(_Index);
			  
			  _ActiveShow_Con = _ActiveShow_Kind.find("ul").eq(0);
	     
		  
		  if(_ActiveIndex != _Index){
			  
			  //S1.主項目hover效果切換
			  $('.Main_tab li').filter('.active').removeClass('active').removeClass('hover');
			  $('.Main_tab li').eq(_Index).addClass('active');
			  
			  //S2.子項目hover效果切換為第一個
			  $('.Second_tab li').filter('.active').removeClass('active').removeClass('hover');
		      $('.Second_tab li').eq(0).addClass('active');
		 
		      //S3.隱藏之前的大分類，並顯示選擇分類的第一子項目內容
			  
		      //隱藏原本顯示的分類
		      $('.Showcase > div').eq(_ActiveIndex).css("display","none");
		 
		      //顯示大分類內容
	          _ActiveShow_Kind.css("display","block");
			  //將子分類內容隱藏
			  _ActiveShow_Con.siblings().css("display","none");
			  _ActiveShow_Con.css("display","block");
		  
		  }
 
	 });
	 
	 
	 
     // Tab season Select ------------------------------------------------------------------------------------------------------
	 
	 $(".Second_tab li").hover(function(){
		
		  if( $(this).hasClass('active') ) return;
 
		  $(this).toggleClass('hover');
	
	 }).click(function(){
		  
		  var _S_ActiveIndex = $('.Second_tab li').filter('.active').index(),
		  
			  _S_Index = $(this).index();
			  
			  _At_Kind_Index = $('.Main_tab li').filter('.active').index();

			  _At_Kind = $('.Showcase > div').eq(_At_Kind_Index);
			  
		  
		  if( _S_ActiveIndex != _S_Index ){
			  
			  $('.Second_tab li').filter('.active').removeClass('active').removeClass('hover');
		 
		      //隱藏原本顯示的分類
		      _At_Kind.find("ul").eq(_S_ActiveIndex).css("display","none");
		 
		      //取得點選的標籤，將其對應的分類內容秀出
	          _At_Kind.find("ul").eq(_S_Index).css("display","block");
	          
			  $('.Second_tab li').eq(_S_Index).addClass('active');
		  
		  }
 
	 });
	 
	 
	 
});	
 