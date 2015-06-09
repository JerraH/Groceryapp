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
	var list = JSON.parse(localStorage.getItem('list-items')) || [];
	for (var index = 0; index < list.length; index++) {
		$('#textbox').before('<li class="listitem">'+list[index]+'</li>');
	}
	
	$('.newlistitem').click(function() {
		$('.newlistitem').css({'display': 'none'});
		$('.listinput').css({'display': 'inline'});
		$('.submititem').css({'display': 'inline'});
	});
	
	
	$('.groceryinput').submit(function(event){
		event.preventDefault();
		var thing = $('.listinput').val();
		
		// Create a new list item
		$('#textbox').before('<li class="listitem">' + thing + '</li> ');
		list.push(thing);
		localStorage.setItem('list-items', JSON.stringify(list));
		console.log('Submitted the item: ' + thing);
	});
	
	
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