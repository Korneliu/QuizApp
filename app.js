$(document).ready(function() {


	var QUIZ = {
		name: 'StarCitizen',
		questions: [
			{
				text: "What CIG stands for?",
				answers: ["Company Info Group","Cloud Independent Group","Cloud Imperium Games","None of the above"],
				correct: 2
			},
			{
				text: "Which year Star Citizen get into Kickstarter?",
				answers: ["2009","2012","2010","1989",],
				correct: 1
			},
			{
				text: "What's Brian Chamber position in CIG?",
				answers: ["Development Director","Senior Designer","Q&A Director","None of the above"],
				correct: 0
			},
			{
				text: "Which company makes Herald",
				answers: ["Anvil","RSI","Drake","Aegis"],
				correct: 2
		  },
		  {
		  	text: "What's the name of the single player campaing? ",
		  	answers: ["Squadron 42","Squadron 43","Star Wars 3","Vanishing Star"],
		  	correct: 0
		  },
		  {
		  	text: "Which company makes Constellation?",
		  	answers: ["Anvil","Aegis","Drake","RSI"],
		  	correct: 3
		  },
		  {
		  	text: "Who's Mark Abent?",
		  	answers: ["Senior Designer","Accountant","Web Developer","Bugsmasher"],
		  	correct: 3
		  },
		  {
		  	text: "Who's Star Citizen main designer?",
		  	answers: ["Chris Roberts","John Wick","Jennifer Larson","Linda Wright"],
		  	correct: 0
		  },
		  {
		  	text: "Star Citizen is build on ...",
		  	answers: ["Unity","CryEngine","Star Engine","Amazon Lumberyard"],
		  	correct: 3
		  },
		  {
		  	text: "What's the name of the noodle machine in Star Citizen",
		  	answers: ["Kimmie","Big Tom","Big Benny's","Miao Lee"],
		  	correct: 2
		  }
		]
	};
	var currentQuestion = 0;
	var scoreCount = 0;
  
	function showQuestion() {
		var html = '<legend><h2 class="questionHeader">'+QUIZ.questions[currentQuestion].text +'</h2></legend>';
		for (var i=0; i<QUIZ.questions[currentQuestion].answers.length; i++) {
			html += `<input type="radio" name="answers" value="${i}">
				<label for="radio${i}">${QUIZ.questions[currentQuestion].answers[i]}</label><br>`
		}
		html += `<input id="clicker" type="submit" value="Submit">`;
    $('#questionForm').html(html);
	};			
	

	$('#questionForm').submit(function(e) {
		e.preventDefault();
		var answer = $('input[name = "answers"]:checked').val();
		$('.answeredQuestion').css('display','block');
		if (answer == QUIZ.questions[currentQuestion].correct) {
			scoreCount++;
			$('.score').text(scoreCount +' correct answers');
			$('.answeredQuestion').text('Correct').fadeOut(4000);
		} else {
			$('.answeredQuestion').text('Correct answer was: '+ QUIZ.questions[currentQuestion].answers[QUIZ.questions[currentQuestion].correct]).fadeOut(4000);
		};
		currentQuestion++;
		if (currentQuestion < QUIZ.questions.length) {
			showQuestion();
		} else {
			$('#questionForm').html('<h1>Quiz finished</h1>');
		}
	});

	$('#container').hide();
	$('#start').click(function(e) {
		$('#quiz').hide();
		$('#container').show();
		showQuestion();
	});
});
	
	




     











