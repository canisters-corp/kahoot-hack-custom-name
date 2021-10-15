client.on("Disconnect", () => {
  client.join(gameid, Math.random() + " Bot");
});

  readline.question('Answer: ', choice => {
    question.answer(0);
    if(question.choices[choice].correct){
      console.log("Correct!");
    }
    else{
      console.log("Incorrect :(");
    }
    readline.close();
  });



  client.on("QuestionStart", question => {
  console.log("question detected");
  console.log(question.question);
  console.log(question.choices);
  console.log();
  question.choices.forEach(element => console.log(element.answer + " es la reponce"));

  question.choices.forEach(responces => responces.answer(verifyProperty(responces.choices, "correct")));


  //question.answer(verifyProperty(question.choices, "correct"))
  //question.answer(Math.floor(Math.random() * (max + 1)));
});


  client.on("QuestionStart", question => {
  question.answer(verifyProperty(question.choices, "correct"))
});