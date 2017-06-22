$(document).ready(function() {
	var QUIZ = {
		name: 'StarCitizen',
		questions: [
			{
				text: "What CIG stands for",
				answers: ["Company Info Group","Cloud Independent Group","Cloud Imperium Games","None of the above"],
				correct: 2
			},
			{
				text: "Which year Star Citizen get into Kickstarter?",
				answers: ["2009","2012","2010","1989",],
				correct: 1
			},
			{
				text: "What's Brian Chamber position in CIG",
				answers: ["Development Director","Senior Designer","Q&A Director","None of the above"],
				correct: 0
			},
			{
				text: "Which company make Herald",
				answers: ["Anvil","RSI","Drake","Aegis"],
				correct: 3
		  }
		]
	}
	var currentQuestion = 0;


//<legend><h2 class="questionHeader">What does CIG stand for:</h2></legend>
//				<input type="radio"  id="radio1" name="answers">
//				<label for="radio1">Company Info Group</label>
//			<br>


	function showQuestion() {
		var html = '<legend><h2 class="questionHeader">'+QUIZ.questions[currentQuestion].text +'</h2></legend>';
		for (var i=0; i<QUIZ.questions[currentQuestion].answers.length; i++) {
			html += `<input type="radio" id="radio${i}" name="answers" value="${i}">
				<label for="radio${i}">${QUIZ.questions[currentQuestion].answers[i]}</label><br>`
		}
		html += `<input id="clicker" type="submit" value="Submit">`;
    $('#questionForm').html(html);
	}				
	showQuestion();
});





     


//QUIZ.questions[currentQuestion].answers[QUIZ.questions[currentQuestion].correct];



	

	//initialize variables


	//question display function


	//submit form listener


	//show results function
	









