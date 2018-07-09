/* ----------------------------------------------------------------------------------------
* Author        : Designcarebd
* Template Name : Buzup | One Page Multipurpose Html Template
* File          : Buzup main JS file
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */




    
/* INDEX
----------------------------------------------------------------------------------------

01. Preloader js

02. change Menu background on scroll js 

03. Navigation js

04. Smooth scroll to anchor

05. Slider auto paly script

06. Portfolio js

07. Magnific Popup js

08. Testimonial js

09. client js

10. Scroll-to-top

11. Counter  js 

12. Google Map js

13. Ajax Contact Form js

14. Mailchimp js

-------------------------------------------------------------------------------------- */



(function($) {
'use strict';
	
		var stamina = $(window);

    /*-------------------------------------------------------------------------*
     *                  01. Preloader js                                       *
     *-------------------------------------------------------------------------*/
		stamina.on( 'load', function(){

		  $('#preloader').delay(300).fadeOut('slow',function(){
			$(this).remove();
		  });    

		}); // $(window).on end
		
		
		
    /*-------------------------------------------------------------------------*
     *             02. change Menu background on scroll js                     *
     *-------------------------------------------------------------------------*/
		stamina.on('scroll', function () {
		  var menu_area = $('.menu-area');
		  if (stamina.scrollTop() > 0) {
			  menu_area.addClass('sticky-menu');
		  } else {
			  menu_area.removeClass('sticky-menu');
		  }
		}); // $(window).on('scroll' end
		
		
		
    /*-------------------------------------------------------------------------*
     *                   03. Navigation js                                     *
     *-------------------------------------------------------------------------*/
		$(document).on('click', '.navbar-collapse.in', function (e) {
		  if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			  $(this).collapse('hide');
		  }
		});

		$('body').scrollspy({
		  target: '.navbar-collapse',
		  offset: 195
		});
		
		
		
    /*-------------------------------------------------------------------------*
     *                   04. Smooth scroll to anchor                           *
     *-------------------------------------------------------------------------*/
		$('a.smooth_scroll').on("click", function (e) {
		  e.preventDefault();
		  var anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $(anchor.attr('href')).offset().top - 50
		  }, 1000);
		});
		
		
		

		
    /*-------------------------------------------------------------------------*
     *                  05. Portfolio js                                       *
     *-------------------------------------------------------------------------*/
      $('.portfolio').mixItUp();



    /*-------------------------------------------------------------------------*
     *                  06. Magnific Popup js                                  *
     *-------------------------------------------------------------------------*/
      $('.work-popup').magnificPopup({
          type: 'image',
          gallery: {
              enabled: true
          }
          
      });
      

      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
      });
		
		
	
	     /*-------------------------------------------------------------------------*
       *                   11. WOW js                                    *
       *-------------------------------------------------------------------------*/
	 
			new WOW().init();	
		
    
		
    /*-------------------------------------------------------------------------*
     *                  07. Testimonial js                                     *
     *-------------------------------------------------------------------------*/
      $(".testimonial-list").owlCarousel({
        singleItem      : true,
        lazyLoad        : false,
        autoPlay        : false,
        pagination      : false,
        navigation      : false,
        
      });
		
		
		
    /*-------------------------------------------------------------------------*
     *                    9. owl slider js for home and blog                                    *
     *-------------------------------------------------------------------------*/
		$(".owl-slider").owlCarousel({
          items               : 1,
          itemsDesktop        : [1199, 1],
          itemsDesktopSmall   : [980, 1],
          itemsTablet         : [768, 1],
          itemsMobile         : [479, 1],
          pagination          : false,
          navigation          : true,
          navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      });
		
		
/*-------------------------------------------------------------------------*
     *                       9. client js                                     *
     *-------------------------------------------------------------------------*/
		$(".owl-client").owlCarousel({
		  items               : 4,
		  autoPlay            : true,
		  itemsDesktop        : [1199, 4],
		  itemsDesktopSmall   : [980, 3],
		  itemsTablet         : [768, 3],
		  itemsMobile         : [479, 2],
		  pagination          : false,
		  navigation          : false,
		  autoHeight          : true,
		});
		
		$(".news-carousel").owlCarousel({
          items               : 3,
          autoPlay            : false,
          itemsDesktop        : [1199, 3],
          itemsDesktopSmall   : [980, 2],
          itemsTablet         : [768, 2],
          itemsMobile         : [479, 1],
          pagination          : false,
          navigation          : true,
          navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      });

      
    /*-------------------------------------------------------------------------*
     *                       10. Scroll-to-top                           *
     *-------------------------------------------------------------------------*/	
		stamina.on( 'scroll', function () {
			var top_top = $('#scroll-to-top');
			if (stamina.scrollTop() > 500) {
				top_top.fadeIn();
			} else {
				top_top.fadeOut();
			}
		});
        /*END SCROLL TO TOP*/
		
		
		
    /*-------------------------------------------------------------------------*
     *                       11. Counter  js                         *
     *-------------------------------------------------------------------------*/	
		$('.fun-facts-area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).off('inview');
			}
		});
		
		
		
    /*-------------------------------------------------------------------------*
     *                       12. Google Map js                                 *
     *-------------------------------------------------------------------------*/

		var myCenter=new google.maps.LatLng(23.779908,90.3669903);
		function initialize()
		{
			var mapProp = {
				center:myCenter,
				scrollwheel: false,
				zoom:15,
				mapTypeId:google.maps.MapTypeId.ROADMAP
			};
			var map=new google.maps.Map(document.getElementById("contactgoogleMap"),mapProp);
			var marker=new google.maps.Marker({
				position:myCenter,
				animation:google.maps.Animation.BOUNCE,
				icon:'assets/img/map-marker.png',
				map: map,
			});
			var styles = [
				{
					stylers: [
						{ hue: "#c5c5c5" },
						{ saturation: -100 }
					]
				},
			];
			map.setOptions({styles: styles});
			marker.setMap(map);
		}
		google.maps.event.addDomListener(window, 'load', initialize);
		
		
		
    /*-------------------------------------------------------------------------*
     *                  13. Ajax Contact Form js                               *
     *-------------------------------------------------------------------------*/
		// Get the form.
		var form = $('#ajax-contact');

		// Get the messages div.
		var formMessages = $('#form-messages');

		// Set up an event listener for the contact form.
		$(form).on('submit', function(e) {
		  // Stop the browser from submitting the form.
		  e.preventDefault();

		  // Serialize the form data.
		  var formData = $(form).serialize();

		  // Submit the form using AJAX.
		  $.ajax({
			  type: 'POST',
			  url: $(form).attr('action'),
			  data: formData
		  })
		  .done(function(response) {
			  // Make sure that the formMessages div has the 'success' class.
			  $(formMessages).removeClass('error');
			  $(formMessages).addClass('success');

			  // Set the message text.
			  $(formMessages).text(response);

			  // Clear the form.
			  $('#name').val('');
			  $('#email').val('');
			  $('#subject').val('');
			  $('#message').val('');

		  })
		  .fail(function(data) {
			  // Make sure that the formMessages div has the 'error' class.
			  $(formMessages).removeClass('success');
			  $(formMessages).addClass('error');

			  // Set the message text.
			  if (data.responseText !== '') {
				  $(formMessages).text(data.responseText);
			  } else {
				  $(formMessages).text('Oops! An error occured and your message could not be sent.');
			  }
		  });

		});
		
		
		
        /*-------------------------------------------------------------------------*
         *                   14. MailChimp js                                    *
         *-------------------------------------------------------------------------*/
			$('#mc-form').ajaxChimp({
				language: 'en',
				callback: mailChimpResponse,

				// ADD YOUR MAILCHIMP URL BELOW HERE!
				url: 'http://coderspoint.us14.list-manage.com/subscribe/post?u=e5d45c203261b0686dad32537&amp;id=d061f39c51'
				
			});

			function mailChimpResponse(resp) {
				if (resp.result === 'success') {
				  $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
				  $('.mailchimp-error').fadeOut(400);

				} else if(resp.result === 'error') {
				  $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
				}  
			}

			
			// Home Page Slider Settings
          $('#carousel-example-generic').carousel({
            interval: 5000,
            cycle: true
          });



})(jQuery);