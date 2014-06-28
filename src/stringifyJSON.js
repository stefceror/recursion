// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
	var strJSON ="";
	if(obj){
		if(obj.constructor ==Array){
			strJSON = strJSON + "[";
			for (var i = 0; i < obj.length; i++){
				strJSON = strJSON + stringifyJSON(obj[i]);
				if(i<obj.length-1){
					strJSON = strJSON + ",";
				}
			}
			strJSON = strJSON + "]";
			return strJSON;
		} else if (typeof obj ==='object'){
			return "object";
		
		}
	}
	if (typeof obj === 'string'){
		return "\"" + obj.replace(/"/g, "\\$&") + "\""
	} else {
		return String(obj);
	}

  
};
