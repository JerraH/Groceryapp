/*on press enter after input or click check mark,
create new <li class="listitem">
				<img class="checkmark" src="images/checkmark.png">
				<img class="checkbox" src="images/checkbox.png"> 
				:input
				<img class="approve" src="images/checkmark.png" alt="Approve">
				<img class="nope" src="images/xout.png" alt="Delete">
				<img class="rearrange" src="images/updown.png" alt="move">
			</li>
*/
$(function() {
	var thing = $('.listinput').val();
	var list = JSON.parse(localStorage.getItem('list-items')) || [];
	for (var index = 0; index < list.length; index++) {
		$('#textbox').before('<li class="listitem">' + '<img class="checkmark" src="images/checkmark.png">' + '<img class="checkbox" src="images/checkbox.png">' + ' ' + '<div class="iteminputted">' + list[index] + '</div>' + '<div class="nope">' + '</div>' + '<div class="rearrange">' + '</div>' + '</li>');
	};
	
	$('.newlistitem').click(function() {
		$('.newlistitem').css({'display': 'none'});
		$('.listinput').css({'display': 'inline'});
		$('.submititem').css({'display': 'inline'});
	});
	
	
	$('.groceryinput').submit(function(event){
		event.preventDefault();
		var thing = $('.listinput').val();
		// Create a new list item
		if (thing=="") {
			return;
		}
		else {
			$('#textbox').before('<li class="listitem">' + '<img class="checkmark" src="images/checkmark.png">' + '<img class="checkbox" src="images/checkbox.png">' + ' ' + '<div class="iteminputted">' + thing + '</div>' + '<div class="nope">' + '</div>' + '<div class="rearrange">' + '</div>' + '</li>');
			list.push(thing);
			localStorage.setItem('list-items', JSON.stringify(list));
			console.log('Submitted the item: ' + thing);
		};
	});

	$('.checkbox').click(function() {
		$(this).closest('li').find('.checkmark').css({'display': 'inline'});
		$(this).closest('li').find('.iteminputted').css({'text-decoration': 'line-through'});
	});

	$('.checkmark').click(function() {
		$(this).hide();
		$(this).closest('li').find('.iteminputted').css({'text-decoration': 'none'});
	})


	
	$('.editicon').click(function() {
			$('.nope').css({'display': 'inline'});
			$('.rearrange').css({'display': 'inline'});
	});

	$('.nope').click(function(e) {
		$(e.target).closest('li').remove();
	})

	$('.rearrange').click(function(e) {
		var detachable = $(e.target).closest('li');
		detachable.closest('li').before(detachable);
		detachable.detach();
	})

		// if ($('.listinput').css({'display': 'none'})) {
		// $('.newlistitem').click(function() {
		// 	$('.listinput').css({'display': 'inline'}) 
		// })}
		// else {
		// 	$('.newlistitem').click(function() {
		// 		$('#textbox').prepend('<p>test</p>')
		// })};
  		/*$('.listinput').css('display': 'inline');
})}
		else {
			$('#textbox').prepend('<li class="listitem">:input</li> ');*/






});