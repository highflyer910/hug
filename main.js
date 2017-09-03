$(document).ready(function () {
	(function( dude, $, undefined ) {
	    
	    var peace = 10;
	    var love = 10;
	    var happiness = 10;
	 

	    dude.hug = function() {
	        love += randomInt(2,4);

	        $('.dude-body').addClass('hug');

	        setTimeout(function () {
	        	$('.dude-body').removeClass('hug');
	        }, 700);

	       	decreaseLife('hug');
	    };
	     
	    function decreaseLife(action) {
	    	if  (action == 'hug') {
	    		peace -= randomInt(1,2);	    	
		    	happiness -= randomInt(0,2);	    		
	    	}

	    	updateStats();
	    	styleDude();

	    	if (peace <= 0 || happiness <= 0) {
	    		$('#module').show();
	    	}	    	
	    };

	    function styleDude() {

	    	if (love >= 20) {
	    	    $('.mouth').addClass('frown');
	    	    $('.eye').addClass('confused');
	    	}
	    	

	    	if (love >= 25) {
	    		$('.dude-body').css({backgroundColor: '#770608'});
	    	} else if (love >=18) {
	    		$('.dude-body').css({backgroundColor: '#A7090B'});
	    	} else if (love >= 14) {
	    		$('.dude-body').css({backgroundColor: '#F32326'});	    		
	    	} else if (love < 14) {
	    		$('.dude-body').css({backgroundColor: '#F53B3E'});	    			    		
	    	} else {
	    		$('.dude-body').css({backgroundColor: '#F65355'});	    			    			    		
	    	}
	    }

	    function updateStats() {
	    	if (peace <= 0 || love <= 0 || happiness <= 0) {
	    		$('#peace').text('Peace: XXX');
	    		$('#love').text('Love: XXX');
	    		$('#happiness').text('Happiness: XXX');
	    	} else {
		    	$('#peace').text('Peace: ' + peace);
		    	$('#love').text('Love: ' + love);
		    	$('#happiness').text('Happiness: ' + happiness);	    		
	    	}
	    }

	}( window.container = window.container || {}, jQuery ));

	$('.btn_hug').on('click', container.hug);

});


function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
