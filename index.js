const Kahoot = require("kahoot.js-updated");

const max = 4;
const gameid = 2492006;
const maxplay = 200;
const num = 0;
let dsa = 0;

const lyrics = `never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`

const lyricsArray = lyrics.split("\n")



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function verifyProperty(array, property) {
  let finalNo
  array.forEach(function(value, i) {
    if (value[property] === true) {finalNo = i}
  });
  return(finalNo)
}

for (let step = 0; step < 1000; step++) {
  if (dsa === 18) {
    dsa = 0
  }
  const client = new Kahoot();
  client.setMaxListeners(1000000);
  client.join(gameid, lyricsArray[dsa] + " " + step);
  dsa = dsa + 1
  

  //step + " Bot" + Math.random()

client.on("QuestionStart", question => {
  question.answer(Math.floor(Math.random() * (max + 1)));
});
  client.on("QuizStart", () => {
  console.log("The quiz has started!");
});



client.on("QuizEnd", game => {
  console.log("The quiz has ended.");
  client.join(gameid, step + " Bot" + Math.random())
});

//client.on("QuestionStart", question => {
  //question.answer(verifyProperty(question.choices, "correct"))
//});


}

