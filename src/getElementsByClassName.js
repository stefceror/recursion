// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
	var results = [];
	var getElements = function(className, node) {
		var innerResults=[];	
	
		var pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");
		if (pattern.test(node.classList)) {
			innerResults.push(node);
		}
		if(node instanceof Element) {
			for(var i = 0; i < node.childNodes.length; i++) {
				innerResults = innerResults.concat(getElements(className, node.childNodes[i]));
			}
		}
		return innerResults;
	}
	results = getElements(className, document.body);

    return results;
};
