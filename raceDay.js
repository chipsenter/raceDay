let raceNumber = Math.floor(Math.random()*1000);

let runReg = true;
let runAge = 25;
if (runAge > 18 && runReg == true && raceNumber < 1000) {
  console.log("You will start at 9.30am  Bib number" + raceNumber);
} else if (runReg == true || raceNumer < 1000) {
  console.log("You will race at 11:00am ");
} else if (runAge < 18 && raceNumber > 1000) {
  console.log("You will race at 12:00am");
} else {
  console.log("If unsure when you are running check registration desk")
}