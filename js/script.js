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
	$('.listinput').attr('maxlength','27');
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
		var thingExists = jQuery.inArray(thing, list);


		if (thing=="" ) {
			return;
		}
		if (thingExists > -1) {
				$('.listinput').val('');
				alert("You already have this item on your list!");
				console.log(thing);
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
			$('.listinput').val('');
			if (isVisible==true) {
				$('.nope').css({'display': 'inline'});
				$('.arrowup').css({'display': 'inline'});
				$('.arrowdown').css({'display': 'inline'});
				$('.iteminputted').attr( 'contentEditable', 'true' );
			};
		};
	});

	$('.list').on('click', '.checkbox', function() {
		$(this).closest('li').find('.checkmark').css({'display': 'inline'});
		$(this).closest('li').find('.iteminputted').css({'text-decoration': 'line-through'});
	});

	$('.list').on('click', '.checkmark', function() {
		$(this).hide();
		$(this).closest('li').find('.iteminputted').css({'text-decoration': 'none'});
	})

/*turn on edit buttons */
	var isVisible = false;
	$('.editicon').click(function() {
		
		if (isVisible == false) {
			$('.nope').css({'display': 'inline'});
			$('.arrowup').css({'display': 'inline'});
			$('.arrowdown').css({'display': 'inline'});
			$('.iteminputted').attr( 'contentEditable', 'true' );
			isVisible = true;
		}

		else {
			$('.nope').hide();
			$('.arrowup').hide();
			$('.arrowdown').hide();
			$('.iteminputted').attr( 'contentEditable', 'false' );
			isVisible = false;
		};
	});



	/*delete*/

	

	$('.list').on('click', '.nope', function(e) {
		var detachable = $(e.target).closest('li');
		var myValue = detachable.find('.iteminputted').text();
		var itemPosition = jQuery.inArray(myValue, list);
		list.splice(itemPosition, 1);
		localStorage['list-items'] = JSON.stringify(list);

		detachable.remove();
	});

	/*move item up */

	
 	$('.list').on('click', '.arrowup', function(e) {
 		var detachable = $(this).closest('li');
		var previous = detachable.prev('li');
		var myValue = detachable.find('.iteminputted').text();
		var itemPosition = jQuery.inArray(myValue, list);
		if(previous.length > 0){
 			detachable.detach();
 			previous.before(detachable);
 			list.splice(itemPosition, 1);
 			list.splice(itemPosition - 1, 0, myValue);
 			localStorage['list-items'] = JSON.stringify(list);
		};
 	});

	$('.list').on('click', '.arrowdown', function(){
		var detachable = $(this).closest('li');
		var nextItem = detachable.next('li');
		var myValue = detachable.find('.iteminputted').text();
		var itemPosition = jQuery.inArray(myValue, list);

		if (nextItem.children('.groceryinput').length > 0) {
			return;
		}
		else {
			detachable.detach();
			nextItem.after(detachable);
			list.splice(itemPosition, 1);
 			list.splice(itemPosition + 1, 0, myValue);
 			localStorage['list-items'] = JSON.stringify(list);
			return;
		};

	});

	







});