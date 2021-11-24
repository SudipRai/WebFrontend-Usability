 $(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});

$(function() {

 var $vid1=$('#vid1')
$vid1.on('mouseenter', function(){
	$vid1.get(0).play();
});
$vid1.on('mouseout', function(){
	$vid1.get(0).pause();
});
});


$(function() {

 var $vid2=$('#vid2')
$vid2.on('mouseenter', function(){
	$vid2.get(0).play();
});
$vid2.on('mouseout', function(){
	$vid2.get(0).pause();
});
});

$(function() {

 var $vid3=$('#vid3')
$vid3.on('mouseenter', function(){
	$vid3.get(0).play();
});
$vid3.on('mouseout', function(){
	$vid3.get(0).pause();
});
});

$(function() {

 var $vid4=$('#vid4')
$vid1.on('mouseenter', function(){
	$vid4.get(0).play();
});
$vid4.on('mouseout', function(){
	$vid4.get(0).pause();
});
});

$(function() {

 var $vid5=$('#vid5')
$vid5.on('mouseenter', function(){
	$vid5.get(0).play();
});
$vid5.on('mouseout', function(){
	$vid5.get(0).pause();
});
});

$(function() {

 var $vid6=$('#vid6')
$vid6.on('mouseenter', function(){
	$vid6.get(0).play();
});
$vid6.on('mouseout', function(){
	$vid6.get(0).pause();
});
});

$(function() {

 var $vid7=$('#vid7')
$vid7.on('mouseenter', function(){
	$vid7.get(0).play();
});
$vid7.on('mouseout', function(){
	$vid7.get(0).pause();
});
});

$(function() {

 var $vid8=$('#vid8')
$vid8.on('mouseenter', function(){
	$vid8.get(0).play();
});
$vid8.on('mouseout', function(){
	$vid8.get(0).pause();
});
});

$(function() {

 var $vid9=$('#vid9')
$vid9.on('mouseenter', function(){
	$vid9.get(0).play();
});
$vid9.on('mouseout', function(){
	$vid9.get(0).pause();
});
});

$(function() {

 var $vid10=$('#vid10')
$vid10.on('mouseenter', function(){
	$vid10.get(0).play();
});
$vid10.on('mouseout', function(){
	$vid10.get(0).pause();
});
});

$(function() {

 var $vid11=$('#vid11')
$vid11.on('mouseenter', function(){
	$vid11.get(0).play();
});
$vid11.on('mouseout', function(){
	$vid11.get(0).pause();
});
});

$(function() {

 var $vid12=$('#vid12')
$vid12.on('mouseenter', function(){
	$vid12.get(0).play();
});
$vid12.on('mouseout', function(){
	$vid12.get(0).pause();
});
});
