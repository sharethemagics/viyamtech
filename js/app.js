jQuery(function($) {
    
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		var senderName = $('input[name=name]').val();
		var senderEmail = $('input[name=email]').val();
		var senderSubject = $('input[name=subject]').val();
		var senderMessage = $('textarea[name=message]').val();
		
		$.ajax({
			url: $(this).attr('action'),
			type:'POST',
			data: {name:senderName , email:senderEmail , message:senderMessage , subject:senderSubject },
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

});