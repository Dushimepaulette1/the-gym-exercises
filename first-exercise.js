/*This is a function to Write a function that takes an array of strings and returns the longest string in the array.
If the array is empty, return null.
The array may contain strings of varying lengths.
If there are multiple strings with the same longest length, return the first one. */
function longestString(str){
let longString = str[0];
	if (str.length === 0){
		return null
	}
	for (let i = 0; i < str.length; i++){
		if (str[i].length > longString){
			return str[i]
		}
	}
	console.log(longestString(["paulette", "tesi", "Gloria"]);

