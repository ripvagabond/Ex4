$(document).ready(function(){
	$('#header .menu li').click(function(){
		$(this).html();
		alert('dogThien');
	})
	$('#leftpanel').click(function(){
		$(this).text();
		alert('catThien');
	})
	$('#content').slideUp(2000, function(){
		alert('Content is slide down.')
	})
	var li = $('#header .menu li').html();
	alert('111');
});