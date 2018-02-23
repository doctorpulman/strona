$(".myBox").click(function() {
	window.location = $(this).find("a").attr("href");
	return false;
});

$(function() {
    	$('img').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
});