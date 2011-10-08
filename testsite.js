


window.addEventlistener("DOMContentLoaded", function(){
 
 	//getEleementByID function
	 function $(x){
		var theElement = document.getElementById(x);
		return theElement;
} 	
	function makeCats(){
		var formTag = document.getElementsByTagName('form'),//formtag is an array of form 
		
	}
 	
 	//Variable defaults
 	var serviceOps = ['--Detail Options--','Basic','Standard','Supreme'];
 	
 	//Set Link & Submit Click Events
	var displayLink = $('display');
	displayLink.addEventListener('click',getData);
	var clearLink = $('clear');
	clearLink.addEventListener('click',clearLocal);
	var save = $('');
	save.addEventListener('click',saveData);

});