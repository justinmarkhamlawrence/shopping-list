/*$(document).ready(function() {
//form adds to "need it list"
	$("#stuff").on("click", function(event) {
		console.log("event", event)
			event.preventDefault()
		console.log("clicked")
	});
});	
//button transfers item from "need it" to "got it"
//button to delete items
/*$('li').on('mouseenter', function() {
	$('.kill', this).show();
})
$('li').on('mouseleave', function() {
	$('.kill').hide();
})*/
/*console.log("I see you!") */
$(document).ready(function() {
	$('#stuff').on('click', function (e) {
		e.preventDefault();

		var input = $('input').val();

		if (input) {
			$('#add').append('<li>' + input + ' ' + '<a href="">x</a></li>');
		}
		$('input').val('');
	});
	$(document).on('click', 'a', function (e) {
		e.preventDefault();
		$(this).parent().remove();
	});
})