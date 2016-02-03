var main = function () {
	"use strict";
	// создаем и скрываем содержимое в div
	var $content = $("<div>Hello, World!</div>").hide();
	var $moreContent = $("<div>Goodbye World!</div>").hide();
// делаем его потомком элемента body
$("body").append($content);
// добавляем скользящее отображение за 2 секунды
$content.slideDown(2000, function(){
	$("body").append($moreContent);
	$moreContent.fadeIn(4000);
});

var addCommentFromInputBox = function(){
	var $new_comment;
	if($(".comment-input input").val() !== ""){
		$new_comment = $("<p>").text($(".comment-input input").val());
		$new_comment.hide();
		$(".comments").append($new_comment.fadeIn());
		$(".comment-input input").val("");
	}
};
$(".comment-input button").on("click", function (event) {
	if ($(".comment-input input").val() !== "") {
		addCommentFromInputBox();
	}
});

$(".comment-input input").on("keypress", function(event){
	var $new_comment;
	if(event.keyCode === 13){
		addCommentFromInputBox();	
	}
});
};
$(document).ready(main);