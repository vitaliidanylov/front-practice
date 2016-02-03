var main = function () {
	"use strict";
	var toDos = [
	"Закончить писать эту книгу",
	"Вывести Грейси на прогулку в парк",
	"Ответить на электронные письма",
	"Подготовиться к лекции в понедельник",
	"Обновить несколько новых задач",
	"Купить продукты"
	];
	$(".tabs a span").toArray().forEach(function (element) {

		var addCommentToList = function(){
			var $newComment;
			if($("main .content input").val() !== ""){
				toDos.push($("main .content input").val());
			}
		};

		$(element).on("click", function () {
			var $element = $(element);
			var $content;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();
			if ($element.parent().is(":nth-child(1)")) {
				$content = $("<ul>");
				for (var i = toDos.length - 1; i >= 0; i--) {
					$content.append($("<li>").text(toDos[i]));
				};
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(2)")) {
				$content = $("<ul>"); 
				toDos.forEach(function(todo){
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(3)")) {
				var $input = $("<input>"),
					$button = $("<button>").text("+");
				$("main .content").append($input);
				$("main .content").append($button);

				$($button).on("click", function(){
					addCommentToList();	
				});
				//enter comment using enter-key
				$($input).on("keypress", function(event){
					if(event.keyCode === 13){
						addCommentToList();
					};
				});
			}
			return false;
		});
	});
	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);