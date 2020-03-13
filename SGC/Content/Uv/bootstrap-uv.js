$(document).ready(function(){

  $(".uv.fullscreen").each(function(){

    var bg = $(this).attr("data-bg");
    if(bg){
      $(this).css('background-image', 'url(' + bg + ')');
    }

  });

	$(".intro-image-container .intro-image").each(function(){

		var bg = $(this).attr("data-bg");
		if(bg){
			$(this).css('background-image', 'url(' + bg + ')');
		}

	});

  $(".btn-menu").click(function(){
    var button = $(this);
    var navbar = $("#" + $(this).attr("data-navbar"));

    navbar.toggle(200, function(){
      
      navbar.toggleClass("expanded-menu");
      navbar.removeAttr("style");

      $("html").click(function(e){
        if(!navbar.is(e.target) && navbar.has(e.target).length === 0){
          navbar.hide(200, function(){
            navbar.toggleClass("expanded-menu");
            navbar.removeAttr("style");
            $("html").unbind("click");
          });
        }
      });

    });

  });

  if (typeof Chart != "undefined") { 
    Chart.defaults.global.responsive = true;
  }

  if(typeof $.fn.peity != "undefined"){
    
    $.fn.peity.defaults.pie = {
      delimiter: null,
      fill: ["#277270", "#3db1b0", "#7ad1d0"],
      height: null,
      radius: 8,
      width: null
    };

    $.fn.peity.defaults.donut = {
        delimiter: null,
        fill: ["#277270", "#3db1b0", "#7ad1d0"],
        height: null,
        innerRadius: null,
        radius: 8,
        width: null
    };

    $.fn.peity.defaults.line = {
        delimiter: ",",
        fill: "#3db1b0",
        height: 16,
        max: null,
        min: 0,
        stroke: "#3db1b0",
        strokeWidth: 1,
        width: 32
    };

    $.fn.peity.defaults.bar = {
        delimiter: ",",
        fill: ["#3db1b0"],
        height: 16,
        max: null,
        min: 0,
        padding: 0.1,
        width: 32
    };

    $("span.pie").peity("pie");
    $("span.donut").peity("donut");
    $("span.line").peity("line");
    $("span.bar").peity("bar");

  }

});

