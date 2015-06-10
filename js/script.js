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
		$('#textbox').before(
			'<li class="listitem">' + '<img class="checkmark" src="images/checkmark.png">' + 
				'<img class="checkbox" src="images/checkbox.png">' + ' ' + 
				'<div class="iteminputted">' + list[index] + '</div>' + 
				'<div class="nope">' + '</div>' + 
				'<div class="arrowdown">' + '</div>' + 
				'<div class="arrowup">' + '</div>' +
			'</li>');
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
			$('#textbox').before(
				'<li class="listitem">' + '<img class="checkmark" src="images/checkmark.png">' + 
				'<img class="checkbox" src="images/checkbox.png">' + ' ' + 
				'<div class="iteminputted">' + thing + '</div>' + 
				'<div class="nope">' + '</div>' + 
				'<div class="arrowdown">' + '</div>' + 
				'<div class="arrowup">' + '</div>' +
			'</li>');
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

/*turn on edit buttons */
	
	$('.editicon').click(function() {
			$('.nope').css({'display': 'inline'});
			$('.arrowup').css({'display': 'inline'});
			$('.arrowdown').css({'display': 'inline'});
			$('.listitem').attr( 'contentEditable', 'true' );
			console.log($('.listitem').html());
	});

/*turn off edit buttons */

	/*delete*/

	$('.nope').click(function(e) {
		$(e.target).closest('li').remove();
	});

	/*move item up */

	$('.arrowup').click(function(e) {
		var detachable = $(e.target).closest('li');
		if (detachable.prev('li').val() == undefined) {	
			return;
		}
		else {
			detachable.prev('li').before(detachable);
			detachable.detach();
		};
	});

	$('.arrowdown').click(function(e){
		var detachable = $(e.target).parent('li');
		var movedItem = '<li class="listitem">' + detachable.html() + '</li>';
		if (detachable.next('li').has('.groceryinput')) {
			return;
		}
		else {
			detachable.next('li').after(movedItem);
			detachable.detach();
			return;
		};

	});

	







});