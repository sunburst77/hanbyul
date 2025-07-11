$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  
  // $(".fullscreen").css("height", window_height)
  // $(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({
    topSpacing: 0
  });


  if (document.getElementById("default-select")) {
    $('select').niceSelect();
  };

  /*----------------------------------------------------*/
  /*  Magnific Pop up js (Home Video)
  /*----------------------------------------------------*/
  $('#play-home-video').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.img-pop-up').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });



  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });
  $('.active-testimonial').owlCarousel({
    items: 3,
    margin: 30,
    // autoplay: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1200: {
        items: 3,
      }

    }
  });

  $('.active-brand-carusel').owlCarousel({
    items: 5,
    loop: true,
    margin: 30,
    autoplayHoverPause: true,
    smartSpeed:650,         
    autoplay:true, 
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2,
        },
        768: {
            items: 4,
        },
        768: {
            items: 5,
        }
    }
  });



//------- Filter  js --------//
  $(window).on("load", function () {
    $(".filters ul li").on("click", function () {
      $(".filters ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $grid.isotope({
        filter: data
      });
    });

    if (document.getElementById("project")) {
      var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer"
        }
      });
    }
  });




// Select all links with hashes
$('.navbar-nav a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click', function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



  // -------   Mail Send ajax

  $(document).ready(function () {
    var form = $('#booking'); // contact form
    var submit = $('.submit-btn'); // submit button
    var alert = $('.alert-msg'); // alert div for show alert message

    // form submit event
    form.on('submit', function (e) {
      e.preventDefault(); // prevent default form submit

      $.ajax({
        url: 'booking.php', // form action url
        type: 'POST', // form submit method get/post
        dataType: 'html', // request type html/json/xml
        data: form.serialize(), // serialize form data
        beforeSend: function () {
          alert.fadeOut();
          submit.html('Sending....'); // change submit button text
        },
        success: function (data) {
          alert.html(data).fadeIn(); // fade in response data
          form.trigger('reset'); // reset form
          submit.attr("style", "display: none !important");; // reset submit button text
        },
        error: function (e) {
          console.log(e)
        }
      });
    });
  });

  if ($("#mapBox").length) {
    var $lat = $("#mapBox").data("lat");
    var $lon = $("#mapBox").data("lon");
    var $zoom = $("#mapBox").data("zoom");
    var $marker = $("#mapBox").data("marker");
    var $info = $("#mapBox").data("info");
    var $markerLat = $("#mapBox").data("mlat");
    var $markerLon = $("#mapBox").data("mlon");
    var map = new GMaps({
      el: "#mapBox",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dcdfe6"
            }
          ]
        },
        {
          featureType: "transit",
          stylers: [
            {
              color: "#808080"
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#dcdfe6"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffffff"
            },
            {
              weight: 1.8
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d7d7d7"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ebebeb"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#a7a7a7"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#efefef"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#696969"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#737373"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d6d6d6"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {},
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        }
      ]
    });
  }

  $("select").niceSelect();


  $(document).ready(function () {
    $('#mc_embed_signup').find('form').ajaxChimp();
  });

  $(window).scroll(function(){
    var height = $(document).scrollTop();
    if(height > 0){
      $('.header-section').addClass('on');
    }else if(height == 0){
      $('.header-section').removeClass('on');
    
    } 
    if(height > 300){
			$('#btn_site_top').addClass('on');
		}else{
			$('#btn_site_top').removeClass('on');
		}
  }); 

  $(document).ready(function () {
    $('#btn_site_top').click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, 800);
  
      return false;
    });
  });

  /* *********************** PC, 모바일 공통 ************************ */
	/* ------------------------
	*** 서브 상단 location (1차, 2차) 하위메뉴 ON & 열기 *** 
	------------------------ */ 
  $(document).ready(function () {
    
    /*var $openMenu = $(".cm-top-menu"); */
    $(".cm-top-menu").find(".menu-location").each(function  () { 
      // 클릭할때 펼치기
      $(this).find(".cur-location").click(function  () {
        $(this).toggleClass("open");
        $(this).siblings(".location-menu-con").slideToggle();

        return false;
      });
      // 2depth ON
      
      if ( $(this).is(".location1") ) {
        $(this).find(".location-menu-con").find("li").eq(dep1-1).addClass("on");
      }else {
        $(this).find(".location-menu-con").find("li").eq(dep2-1).addClass("on");
      }
    });
    
    $(".menu-location").mouseleave(function  () {
      if ( $(this).find(".location-menu-con").css("display") == "block" ) {
        $(this).find(".cur-location").removeClass("open");
        $(this).find(".location-menu-con").slideUp(300);
      }
    });
    
  });
});
$(document).ready(function () {
  var $openMenu = $(".sub-menu-lawpart.parts > li");
  $openMenu.find( "span" ).click(function() {
    $openMenu.removeClass("on");
    $(this).parent().addClass("on");
  //  alert($(this).parent().index());
    var $index = $(this).parent().index()+1;
    $(".business").children("div").css('display','none');
    $(".part-"+$index).css('display','block');
  });
});
$(document).ready(function () {
  var $openTitle = $(".business-board-1 .table-row");
  var $openContent = $(".business-board-1 .table-row.content");
  $openFile = $(".business-board-1 .table-row.file");

  $openTitle.find( ".title" ).click(function() {
 //   $openContent.slideUp(600);
    $openContent.removeClass("on");
    $openFile.removeClass("on");
    var $index = $(this).parent().index()+2;
    $indexFile = $index+1;
    $bgPrevIndex = $index-1;
    $bgPrev = $(this).parent().css('background-color');
    $(".business-board-1 .table-row:nth-child("+$index+")").css('background-color',$bgPrev);
    $(".business-board-1 .table-row:nth-child("+$indexFile+")").css('background-color',$bgPrev);
 //   $(".business-board-1 .table-row:nth-child("+$index+")").slideDown(600);
    $(".business-board-1 .table-row:nth-child("+$index+")").addClass("on");
    $(".business-board-1 .table-row:nth-child("+$indexFile+")").addClass("on");
   
  //  alert($(this).parent().index());
        
  });
});