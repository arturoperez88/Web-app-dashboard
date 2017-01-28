
var $newAlert = $("#new-alert");

$newAlert.click(function(){
	$(this).hide();
});

var $headerNav = $(".ul-container").children("li").children(".list-item");

$headerNav.click(function(){
	$headerNav.removeClass("select");
	$(this).addClass("select");
});


var $lineChartNav= $("#chart-nav").children("li");

$lineChartNav.click(function(){
	$lineChartNav.removeClass("select");
	$(this).addClass("select");
});



$lineChartNav.click(function(){
    $(".charts-canvas").children("canvas").addClass("hide");
    var navIndex = $(this).index();
    var $canvasArea = $(".charts-canvas").children("canvas")[navIndex];
    $canvasArea.removeAttribute("class");
});

var $close = $(".btn-close");

$close.click(function(){
	$(".notification").hide();
});



var $search = $(".user-search");
var $sendMessage = $(".message");
var $send = $(".send");
var $alert = $(".send-alert");

if ($sendMessage.val() === 0 && $search.val() === 0) {
	$alert.hide();
}

$send.click(function(){
	if ($sendMessage.val().length === 0 && $search.val().length === 0) {
		$alert.text("You havent typed anything in!").removeClass("send-alert-green");
	}
	else if($sendMessage.val().length  > 0 && $search.val().length === 0){
		$alert.text("Who do you want to send it to?").removeClass("send-alert-green");	
	}
	else if ($search.val().length > 0 && $sendMessage.val().length === 0) {
		$alert.text("You forgot to type in a message :(").removeClass("send-alert-green");
	}
	else if ($sendMessage.val().length > 0 && $search.val().length > 0){
		$alert.text("Your message has been sent :)").addClass("send-alert-green");
	}
	else{
		$alert.text("");
	}
});

