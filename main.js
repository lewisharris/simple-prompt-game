
//basic prompt quiz//

//insert questions and answers into relevant sections. Then add answer letter to 'answer: 'string''
var questions = [
		{ prompt:'Insert question here \n (a) Answer One \n (b)Answer two \n (c)Answer three',
		answer:''},
		{ prompt:'Insert question here \n (a) Answer One \n (b)Answer two \n (c)Answer three',
		answer:''},
		{ prompt:'Insert question here \n (a) Answer One \n (b)Answer two  \n (c)Answer three',
		answer:''},
		{ prompt:'Insert question here \n (a) Answer One \n (b)Answer two  \n (c)Answer three',
		answer:''},
		{ prompt:'Insert question here \n (a) Answer One \n (b)Answer two  \n (c)Answer three',
		answer:''}
					];
var score = 0;

for(var i=0;i<questions.length;i++){
		var response = window.prompt(questions[i].prompt);
	if(response == questions[i].answer){
		score ++
		alert('correct');
	}
	else{
		alert('wrong')
	}
	};

alert('You got ' + score + '/' + questions.length);
