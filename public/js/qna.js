function setup() {
}

function answerQuestion(){
    select('#answer').value('')
    var question = select('#question').value()
    var text = select('#text').value()
    qna.load().then(model => {
        model.findAnswers(question, text).then(answers => {
          if(answers.length > 0){
            console.log('Answers: ', answers);
            select('#answer').value(answers[0].text)
          }
        });
      });
}