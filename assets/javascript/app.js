// Make start button disapear 

$("#start").on("click", function() {
	game.start();
})

// Since dynamically creating this button, we need to use document
$(document).on("click", "#end", function() {
	game.done();
})

$(document).on("click", "#reset", function() {
	game.reset();
})
// Questions Array that include objects
var questions = [{
	question: "Who was the only President to serve more than two terms?",
	answers: ["Ulysses S. Grant", "Theodore Roosevelt", "George Washington", "Franklin D. Roosevelt"],
	correctAnswer: "Franklin D. Roosevelt",
	image: "assets/images/fdr.jpg" ,
}, {
	question: "Who was the only President to serve 2 non-consecutive terms?",
	answers: ["Ronald Reagan", "Theodore Roosevelt", "Grover Cleveland", "Woodrow Wilson"],
	correctAnswer: "Grover Cleveland",
	image: "assets/images/gover2x.jpg" ,
}, {
	question: "Who was the oldest elected President",
	answers: ["Donald Trump", "Ronald Reagan", "James Buchanan", "Dwight D. Eisenhower"],
	correctAnswer: "Donald Trump",
	image: "assets/images/dtrump.jpg",
}, {
	question: "Who was the first President to live in the White House?",
	answers: ["Thomas Jefferson", "George Washington", "John Adams", "Andrew Jackson"],
	correctAnswer: "John Adams",
	image: "assets/images/johnadams.jpg",
}, {
	question: "Who was the first President born outside the contiguous United States",
	answers: ["Benjamin Harrison", "Franklin Pierce", "Barack Obama", "William Howard Taft"],
	correctAnswer: "Barack Obama",
	image: "assets/images/barackfam.jpg",
}, {
	question: "Before the 12th Amendment was passed in 1804, how was the Vice President determined?",
	answers: ["Appointed by the President", "President and Vice President were voted on separately", "The Presidential candidate receiving the second-largest number of electoral votes", "There was no official Vice President before 1804"],
	correctAnswer: "The Presidential candidate receiving the second-largest number of electoral votes",
	image: "assets/images/1804election.jpg",
}, {
	question: "Which U.S President signed the treaty to purchase Alaska from Russia?",
	answers: ["Ulysses S. Grant", "Andrew Johnson", "James Buchanan", "Andrew Jackson"],
	correctAnswer: "Andrew Johnson",
	image: "assets/images/andrewjohnson.jpg",
}, {
	question: "Who was the first President to appear on TV?",
	answers: ["Dwight D. Eisenhower", "Franklin D. Roosevelt", "Harry S. Truman", "John F. Kennedy"],
	correctAnswer: "Franklin D. Roosevelt",
	image: "assets/images/fdr.jpg",
}]

var game = {
	questions: questions,
	counter: 120, //Every second player is player, counter will go down by 1
	correct: 0, //Keep track of how many correct answers the player gets
	incorrect: 0, //Keep track of how many incorrect answers he players get
	unanswered: 0,
	countdown: function() {
		game.counter--; // Decrement counter variable down by 1
		$('#counter').html(game.counter);
		if (game.counter <= 0){ // When counter hits, goes to another function times up
			console.log("Time's Up!");
			game.done();
		}
	},
	start: function(){
		timer = setInterval(game.countdown, 1000);
		$("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds </h2>');
		$("#start").remove();
			for(var i=0; i < questions.length; i++){
		$("#subwrapper").append('<h2>' + questions[i].question + '</h2>');
			for(j=0; j<questions[i].answers.length;j++){
				$("#subwrapper").append("<input type='radio' name='question-"+i+"' value= '" + questions[i].answers[j]+"'>"+questions[i].answers[j]) // Store the value within button itself
			}
		}
		$("#subwrapper").append('<br><button id="end">DONE</button>');
	},
	done: function() { // Checks whether question was correct/incorrect
		$.each($("input[name='question-0']:checked"), function(){ //Looks for each element thats within parantheses here, looks for name question-1 and is checked
			if($(this).val()==questions[0].correctAnswer){
				game.correct++; 
			} else {
				game.incorrect++;
			}
		}); 
		$.each($("input[name='question-1']:checked"), function(){ //Looks for each element thats within parantheses here, looks for name question-1 and is checked
			if($(this).val()==questions[1].correctAnswer){
				game.correct++; 
			} else {
				game.incorrect++;
			}
		}); 
		$.each($("input[name='question-2']:checked"), function(){ //Looks for each element thats within parantheses here, looks for name question-1 and is checked
			if($(this).val()==questions[2].correctAnswer){
				game.correct++; 
			} else {
				game.incorrect++;
			}
		}); 
		$.each($("input[name='question-3']:checked"), function(){ //Looks for each element thats within parantheses here, looks for name question-1 and is checked
			if($(this).val()==questions[3].correctAnswer){
				game.correct++; 
			} else {
				game.incorrect++;
			}
		}); 
		$.each($("input[name='question-4']:checked"), function(){ //Looks for each element thats within parantheses here, looks for name question-1 and is checked
			if($(this).val()==questions[4].correctAnswer){
				game.correct++; 
			} else {
				game.incorrect++;
			}
		}); 
		$.each($("input[name='question-5']:checked"), function(){ //Looks for each element thats within parantheses here, looks for name question-1 and is checked
			if($(this).val()==questions[5].correctAnswer){
				game.correct++; 
			} else {
				game.incorrect++;
			}
		}); 
		$.each($("input[name='question-6']:checked"), function(){ //Looks for each element thats within parantheses here, looks for name question-1 and is checked
			if($(this).val()==questions[6].correctAnswer){
				game.correct++; 
			} else {
				game.incorrect++;
			}
		}); 
		$.each($("input[name='question-7']:checked"), function(){ //Looks for each element thats within parantheses here, looks for name question-1 and is checked
			if($(this).val()==questions[7].correctAnswer){
				game.correct++; 
			} else {
				game.incorrect++;
			}
		}); 

		this.results();
	},

	results: function() {
		clearInterval(timer); // Resets the timer
		$('#subwrapper h2').remove(); //Removes time remaining section
		$('#subwrapper').html('<h2> Complete! </h2>');
		$('#subwrapper').append('<h3> Your score is: ' + game.correct + '</h3>');
		$('#subwrapper').append('<h3> Incorrect: ' + game.incorrect + '</h3>');
		$('#subwrapper').append('<h3> Unanswered: ' + (questions.length-(this.incorrect+this.correct)) + '</h3>'); // How many questions were there, if it wasnt correct or incorrect
		$('#subwrapper').append('<button id="reset">RESET</button');
	},

	reset: function() {
		clearInterval(timer);
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		game.start();
	}
}
	// timeUp: function(){
	// 	clearInterval(timer);
	// }

//}