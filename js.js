const numberOfFilms = +prompt('How many films do you watch?', '');

const movieQuestion = {
  count: numberOfFilms,
};


for(let i = 0; i < 2; i++){
  const watch = prompt("What was the last movie you saw", "");
  const rate = prompt("Rate on a 10-point scale", "");

  if(watch != "" && rate != "" && watch != null && rate != null && watch.length < 50 && rate.length < 50) {
    movieQuestion[watch] = rate;
    console.log("done")
  } else {
    console.log("error!")
    i--;
  }
};

console.log(movieQuestion.count);

if (movieQuestion.count < 10){
  console.log("Просмотрено довольно мало фильмов");
} else if (movieQuestion.count >= 10 && movieQuestion.count < 30) {
  console.log("Вы классический зритель");
} else {
  console.log("Вы киноман");
};
