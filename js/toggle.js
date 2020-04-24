/* This JS file has two purposes:
1) To show how classes can be added / removed using JQuery
2) Given the presence of a class - specifically ShowHide - to show how you can use Javscript and CSS to show/hiode elements

Pure CSS solutions are available, but are quite complex. In addition this really is behaviour rather than appearance, so conceptually this is better achieved using JS than CSS.



// Class management using JQuery

function addClassFn()	{
		$('#Menu1').addClass('ShowHide'); // LONGHAND document.getElementById('MyElement').className+="show";
	}

*/

	function addClassFn(id,class1)	{ // class is a reserved word and IE can't cope!
		 $(id).addClass(class1); // LONGHAND 	document.getElementById('MyElement').className+="show";
	}

function removeClassFn(id, class1)	{
		$(id).removeClass(class1);
	}


	function toggleClassFn(id, class1)	{
		$(id).toggleClass(class1);
	}

// See there's a document.getElementsByClassName or document.getElementsByClass (there's a document.getElementsByID)
// Also can we do document("col1").getElementsByClass ??


// start by getting all the questions and answers
// these will be put into arrays

/* AKH 17/01/2011
In order of what's on the page we have:
*** Headers (h3) - under which are
*** Sections (dl) containing any number of 
*** Questions (dt) to which there 
*** Answers (dd) - one for each question
Given this outline it should be easy to do generalise the show/hide process
*/

var headers = document.getElementsByTagName('h3');
var sections = document.getElementsByTagName('dl');
var questions = document.getElementsByTagName('dt');
var answers = document.getElementsByTagName('dd');

/* Note that the above works for multiple Q & As
But in addition you can drop the dl, dt and dd stuff and the (one) element under the h3 will be shown / hidden
*/

// function for the link that turns them all off
function toggleAllOff(){
	for (var i = 0; i < answers.length; i++) {  // turns off all the dd's
		answers[i].className = 'hide';
	}

	for (var i = 0; i < sections.length; i++) { // turns off all the dl's
		sections[i].className = 'hide';
	}
}

// function for the link that turns them all on
// AKH adjust this

function toggleAllOnJust1(ShowNumber){
	toggleAllOn();
		for (var i = 0; i < sections.length; i++) {  // turn on all the dl's
		sections[i].className = 'hide';
		}
	sections[ShowNumber].className = 'show';
}


// function for the link that turns them all on
function toggleAllOn(){
	for (var i = 0; i < answers.length; i++) {  // turn on all the dd's
		answers[i].className = 'show';
	}
	
	for (var i = 0; i < sections.length; i++) {  // turn on all the dl's
		sections[i].className = 'show';
	}	
}

function toggleNext(element) {
	var next = element.nextSibling;
	while(next.nodeType != 1) next=next.nextSibling; // if it gets to a non-element node, go to the next one
	next.className=((next.className=="hide") ? "show" : "hide");
}


//makes the definition lists click-able
function displayToggle(){
	
	toggleAllOff(); // calls the toggle all off function to turn all the answers off when the page is loaded	
	 
	 for (i=0; i<questions.length; i++) { // loops through the questions 
		 questions[i].onclick=function() { // shows the answers onclick
		 	toggleNext(this);
		}
	 }
	 
	 for (i=0; i<headers.length; i++) { // loops through the headers a
		 headers[i].onclick=function() { // shows the dl sections on click
		 	toggleNext(this);
		}
	 }
}

// initiates the click-able dt's when the page loads
window.onload=function() {
	displayToggle(); // enables toggle of individual answers
	toggleAllOn();   // Initial state = "on"
	}

