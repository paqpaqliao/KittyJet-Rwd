
$(document).ready(function(){
	
	

	//News Use ------------------------------------------------------------------------------------------------------

		var $NSblock = $('#NewsSlides'),
			$NSslides = $('ul.list', $NSblock),
			$NSli = $('li', $NSslides),
			
			_NSwidth = $NSblock.width(),
			_NSSpeed = 900, 
			_NStimer, _showSpeed = 3000, _stop = false,
			
			_str = '';

		
		for(var i=0, j=$NSli.length; i<j; i++ ){

			_str += '<li class="ItemControl_' + (i+1) + '"></li>';
		}

		var $NSControl = $('<div class="ItemControl"></div>').html(_str).appendTo($NSslides.parent());

	
		var $NSControlLi = $NSControl.find('li').click(function(){
			
			var $this = $(this);
			$this.addClass('current').siblings('.current').removeClass('current');

			clearTimeout(_NStimer);

			$NSslides.stop().animate({
				left: _NSwidth * $this.index() * -1
			}, _NSSpeed, function(){

				if(!_stop) _NStimer = setTimeout(NSmove, _showSpeed);
			});

			return false;
			
		}).eq(0).click().end();

	    function NSmove(){
		 
		    var _index = $('.current').index();
		    $NSControlLi.eq((_index + 1) % $NSControlLi.length).click();
	    }
		
	
	//Product Use ------------------------------------------------------------------------------------------------------


		var $block = $('#ProductSlides'),
			$slides = $('ul.list', $block),
			$li = $('li', $slides),

			_width = $block.width(),
			_animateSpeed = 600, 
			timer, _showSpeed = 1500, _stop = false,
			
			_str = '';


		for(var i=0, j=$li.length; i<j; i++ ){

			_str += '<li class="ItemControl_' + (i+1) + '"></li>';
		}

		var $ItemControl = $('<div class="ItemControl"></div>').html(_str).appendTo($slides.parent()).css( {'left':
		
		    function(){ 
			     return ( _width - ($li.length*25 + 30) ) / 2 - 4;
		    },

			'width':
			
			function(){ 
			     return ( $li.length*25 + 30 );
		    }
		});
		
		var $ItemControlLi = $ItemControl.find('li').click(function(){
			
			var $this = $(this);
			$this.addClass('current').siblings('.current').removeClass('current');

			clearTimeout(timer);

			$slides.stop().animate({
				left: _width * $this.index() * -1
			}, _animateSpeed, function(){

				if(!_stop) timer = setTimeout(PDmove, _showSpeed);
			});

			return false;
			
		}).eq(0).click().end();


	    function PDmove(){
		 
		    var _index = $('.current').index();
		    $ItemControlLi.eq((_index + 1) % $ItemControlLi.length).click();
	    }
		
		
	 // ---------------------------------------------------------------------------------------------
		
		
	
	 $(window).resize(function(){
		 
	      var _NowWidth = $(window).width(),
		  
	      _MoveWidth = 0;
		  
	      $(".NowShow").animate({ left: _MoveWidth , opacity:1 }, "fast" );
		  
		  //alert(_MoveWidth);
	 });
	 
		
	//Airplane Initial Setting
	
	 var  _NowWidth = $(window).width(),
	 	 
	      _MoveWidth = 0 ,
	 
	      FirstCut = "Aircraft_Show1",
	 
	      AddShow = '<div class="'+ FirstCut +'"><img src="images/img03/pic01_02.gif"><div class="ViewStoryBox"><a href="experience/story.html" class="ViewStory_Bt"></a></div></div>';
		 
		 
	 $(".AircraftBox").append( AddShow );	
	 	  
	 $("."+FirstCut).animate({ left: _MoveWidth , opacity:1 }, "slow", function(){
			  
		   $(".ViewStoryBox").fadeIn(1000);
				
		   $(this).addClass('NowShow');
		   
		   $(".Airbus_Select li").eq(0).addClass('Tag');
	 });
	 
		  	 
	 $(".Airbus_Select li").click(function(){
		 
		  var  $this = $(this),
		      
			   ThisIndex = $this.index(),
			   
			   _NowWidth = $(window).width(),
			   
			   _MoveWidth = 0 ,
			   
			   CutName = "Aircraft_Show"+ (ThisIndex+1),
		  
		       $PreviousShow = $(".AircraftBox .NowShow");
		  

		  $(".Airbus_Select li.Tag").removeClass('Tag');

		  $PreviousShow.animate({ left: _NowWidth*-1 ,opacity:0 }, 500, function(){
			  
			  $PreviousShow.remove();
		  });
		  

		 
		  var AddShow = '<div class="'+ CutName +'"><img src="images/img03/pic0'+ (ThisIndex+1) +'_02.gif"><div class="ViewStoryBox"><a href="experience/story.html" class="ViewStory_Bt"></a></div></div>';
		 
		  $(".AircraftBox").append( AddShow );	
		  
		  $tagCut = $( "."+CutName);
		  
		  $tagCut.animate({ left: _MoveWidth , opacity:1 }, "slow", function(){
			  
		        $(".ViewStoryBox").fadeIn(1000);
		  });
		  
		  $this.addClass('Tag');
		  
		  $tagCut.addClass('NowShow');
		  			 
	 });
		
		
});