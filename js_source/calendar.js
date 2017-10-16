$(function(){

    var dateFormat = "yy/mm/dd",
	
        from = $( "#goDate" ).datepicker({
			
            showOn: "both",
            buttonImage: "../flight/images/fun_pic02.png",
            buttonImageOnly: true,
			dateFormat : dateFormat,
            changeMonth: true,
            numberOfMonths: 3
        
		}).on( "change", function(){
			
            to.datepicker( "option", "minDate", getDate( this ) );
        }),
		
        to = $( "#backDate" ).datepicker({
			
            showOn: "both",
            buttonImage: "../flight/images/fun_pic02.png",
            buttonImageOnly: true,
			dateFormat : dateFormat,
            changeMonth: true,
            numberOfMonths: 3
        }).on( "change", function(){
			
            from.datepicker( "option", "maxDate", getDate( this ) );
        });
 
    function getDate( element ){
		
       var date;
       try {
              date = $.datepicker.parseDate( dateFormat, element.value );
       }catch( error ) {
              date = null;
       }
       return date;
    }
	
});