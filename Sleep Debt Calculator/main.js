const getSleepHours = day => {
    switch (day){
      case 'monday':
        return 8
      case 'tuesday':
        return 8
      case 'wednesday':
        return 6
      case 'thursday':
        return 5
      case 'friday':
        return 5
      case 'saturday':
        return 4
      case 'sunday':
        return 10
    }
  }
  //console.log(getSleepHours('sunday'))
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday')+ getSleepHours('sunday');
   
   const getIdealSleepHours = () => {
     var idealHours = 7
     return idealHours *7
   }
  //console.log(getActualSleepHours())
  //console.log(getIdealSleepHours())
  const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours()
    var idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours){
      console.log('user got the perfect amount of sleep')
    }
    else if (actualSleepHours > idealSleepHours){
      console.log('user got more sleep than needed and you slept ' +(actualSleepHours - idealSleepHours)+ ' hours extra')
    }
    else{
      console.log('user should get some rest, you need '+(idealSleepHours - actualSleepHours) + ' more hours of sleep')
    }
  }
  calculateSleepDebt()
  