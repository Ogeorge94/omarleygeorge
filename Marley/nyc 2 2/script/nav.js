$(window).scrollfunction(){
	if($(document).scrollTop() > 50) {
	$('nav').addClass('shrink');

}
	else{
		$('nav').removeClass('shrink')

	}
});