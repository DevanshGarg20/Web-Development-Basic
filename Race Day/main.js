let raceNumber = Math.floor(Math.random() * 1000);
var registrationEarly = true
var runnerAge = 18
if (registrationEarly && runnerAge > 18){
  raceNumber += 1000
}
if (runnerAge > 18 && registrationEarly){
  console.log(`racer with racenumber: ${raceNumber} will race at 9:30am`)
}
else if (runnerAge > 18 && !registrationEarly){
  console.log(`racer with racenumber: ${raceNumber} will race at 11:00 am`)
}
else if(runnerAge < 18){
  console.log(`racer with racenumber: ${raceNumber} will race at 12:30 pm`)
}
else{
  console.log(`racer with racenumber: ${raceNumber} visit the registration desk`)
}

