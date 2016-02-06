var toDoObjects = [
{
	"description" : "Make shoping",
	"tags" : ["shoping","chores"]
},
{
	"description" : "To do several new tasks",
	"tags" : ["writing","job"]
}
];

var orginizedByTags = function(toDoObjects){
	var tags = [];
	toDoObjects.forEach(function(object){
		object.tags.forEach(function(tag){
			if(tags.indexOf(tag) === -1){
				tags.push(tag);
			}
		});
	});

	var tagObjects = tags.map(function(tag){
		var toDosWithTag = [];
		toDoObjects.forEach(function(toDo){
			if(toDo.tags.indexOf(tag) !== -1){
				toDosWithTag.push(toDo.description);
			}
		});
		return {"name":tag, "toDos": toDosWithTag};
	});
	console.log(tagObjects);
};

var main = function(){
	orginizedByTags(toDoObjects);
};


$(document).ready(main);