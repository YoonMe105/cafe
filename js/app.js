$(document).ready(function(){
	
	// Start Header

		// Start nav

			// for bugger
			$(".navbuttons").click(function(){
				$(".navbuttons").toggleClass('crossxs');
			});

			// for nav
			$(window).scroll(function(){

				let getscrolltop = $(this).scrollTop();
				// console.log(getscrolltop);

				if(getscrolltop >= 200){
					$(".navbar").addClass('navmenus');
				}else{
					$(".navbar").removeClass('navmenus');
				}
			});

		// End nav

	// End Header

	// Start Aboutus
	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 1900){
			$(".aboutusimgs").addClass('fromlefts');
			$(".aboutusps").addClass('fromrights');
		}else{
			$(".aboutusimgs").removeClass('fromlefts');
			$(".aboutusps").removeClass('fromrights');
		}
				
	});

	

	// End Aboutus

});