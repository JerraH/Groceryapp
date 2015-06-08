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
	$('.listinput').click(function() {
		this.closest(".approve").show()
	})















})