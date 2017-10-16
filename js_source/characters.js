

$(document).ready(function(){
	
		//768以上使用 ---------------------------------------------------------------------------------------	
	
	 
	var  AddTxt01 = '<div class="Expand_Frame"><div class="Close"></div><div class="Expand"><img src="',
	 
	     AddTxt02 = '" /></div></div>',
		  
		 AddTxt03 = '<div class="Arrow"></div>',

	     Allwidth = $("#gridbox01").width(),
		  
	     Itemwidth = $("#gridbox01 li").width()+4,
		  
		 LineQty = Math.floor( Allwidth/Itemwidth );
		  
		  
    //first item set&open -------------------------------------------------------------
		  
	var  $Frist = $('#gridbox01 li').eq(0),
		  
	     FristContent = $Frist.find('a').attr('title'),
		  
		 FristPich = $Frist.find('a').data('pich');
		  
		 $Frist.addClass('active');
		  
         $Frist.find('a').after( AddTxt01 + FristContent + AddTxt02 + AddTxt03 ); 
		  
		 // ----------------------------------------------------------------------------
		  
		 $Frist.animate( { height: FristPich+300 }, 400 );
		
		 $Frist.find('.Expand_Frame').css("height",FristPich+100 );
		 
		 $Frist.find('.Expand_Frame').slideDown(500);
		 
		 $Frist.find('.Expand').fadeIn(700);

		 
    //Click item set&open -------------------------------------------------------------
	 
	$("#gridbox01 li a").click(function(){
		
	    var  $this = $(this).parent(),
		     thisIndex = $this.index(),
			 thisLine = Math.floor(thisIndex/LineQty),
		     thisContent = $this.find('a').attr('title'),
			 thisPich = $this.find('a').data('pich'),		  
			  
			 openIndex = LineQty * thisLine,
			 $OpenLi = $("#gridbox01 li").eq(openIndex),
						  
			 $Previous = $('#gridbox01 li').filter('.active'),
			 PreviousIndex = $Previous.index(),
			 PreviousPich = $Previous.find('a').data('pich');


			 // ------------------------------------------------------------------
			 
			 
			 //判斷是否相同
			 
		     if( openIndex == PreviousIndex ){
				 
				 $('.Arrow').remove();
				 
				 if( thisIndex == PreviousIndex ){
					 
                     $this.find('.Expand_Frame').after( AddTxt03 ); 

				 }else{
					 
                     $(this).after( AddTxt03 ); 
			     }
				 
		         $Previous.animate( { height: thisPich+300 }, 400 );
					 
		         $Previous.find('.Expand_Frame').css("height",thisPich+100 );
				 
		         $Previous.find('.Expand_Frame').slideDown(500);
				 
		         $Previous.find('.Expand_Frame img').attr('src', thisContent );
				 
			 }else{
				 
			     //收起、刪除內容、收起來
				 
				 $('.Expand_Frame').css("height",0).remove();
				 $('.Arrow').remove();
		         $Previous.animate({ height: '185px' } ,function(){
					 
					 $Previous.removeClass('active');
				 });
				 
			 //開啟新的展開區塊 ---------------------------------------------
			 
			     //加上標記
			     $OpenLi.addClass('active');
				 
			     //在撐開的LI裡面加上展開區塊
                 $OpenLi.find('a').after( AddTxt01 + thisContent + AddTxt02 ); 

				 if( thisIndex == openIndex ){
					 
                      $this.find('.Expand_Frame').after( AddTxt03 ); 

				 }else{
					 
                      $(this).after( AddTxt03 ); 
			     }
				 
		         //撐開
		         $OpenLi.animate( { height: thisPich+300 }, 400 );
			
		         $OpenLi.find('.Expand_Frame').css("height",thisPich+100 );
		  
		         $OpenLi.find('.Expand_Frame').slideDown(500);
		         
		         $OpenLi.find('.Expand').fadeIn(700);
				 
			 }
			 
        });	
		
		
		//768以下使用 ---------------------------------------------------------------------------------------
		
	 
	 	$("#gridbox02 li a").click(function(){
		 
	        var $this = $(this).parent(),
		        thisIndex = $this.index(), 		  
			    $ShowBox = $(".gridbox_model02").eq(thisIndex);
		 
		    $ShowBox.addClass('active');
		 
		    $(".gridbox_Screen").fadeIn("fast");				  
		    $ShowBox.fadeIn(700);	  	 
		 
		});
	 
	 	$(".gridbox_Screen").click(function(){
		 
		    $(".gridbox_Screen").fadeOut("fast");				  

            $(".gridbox_model02").filter('.active').fadeOut("fast" ,function(){
					 
					 $(".gridbox_model02").filter('.active').removeClass('active');
				 });			
		});	
		
	 	$(".ShowClose").click(function(){
		 
		    $(".gridbox_Screen").fadeOut("fast");				  

            $(".gridbox_model02").filter('.active').fadeOut("fast" ,function(){
					 
					 $(".gridbox_model02").filter('.active').removeClass('active');
				 });			
		});	


});
