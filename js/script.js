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
		if ($('.listinput').css({'display': 'none'})) {
		$('.newlistitem').click(function() {
			$('.listinput').css({'display': 'inline'}) 
		})}
		else {
			$('.newlistitem').click(function() {
				$('#textbox').prepend('<p>test</p>')
		})};
  		/*$('.listinput').css('display': 'inline');
})}
		else {
			$('#textbox').prepend('<li class="listitem">:input</li> ');*/






});