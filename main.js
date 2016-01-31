
// $(function() {
// 	// post-panel is being selected
// 	$('#img1').slideUp(1000).slideDown(1000);

// });

ohSnap('Yeeaahh! You are now registered.', {'duration':'2000'});  // 2 seconds

// $(document).ready(function(){
// 	setTimeout(function(){
// 		  $("#popup-box1").fadeOut("slow", function () {
// 		  $("#popup-box1").remove();
// 		});
// 	}, 2000);
// });

$(function() {

	$('.panel-button').on('click', function() {
		var panelId = $(this).attr('data-panelid');
		$('#' + panelId).fadeToggle();
	});

	$('.pannel-button').notify('hello there');

	$('#img1').on('click', function() {
		$('#img1').fadeToggle();
	});

	$('#img2').on('click', function() {
		$('#img2').fadeToggle();
	});

	$('#img3').on('click', function() {
		$('#img3').fadeToggle();
	});

	$('#img4').on('click', function() {
		$('#img4').fadeToggle();
	});

});

// Popup

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}









