const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
      },
      get appetizers (){
        return this._courses.appetizers
      },
      set appetizers (value){
        this._courses.appetizers = value
      },
      get mains (){
        return this._courses.mains
      },
      set mains (value){
        this._courses.mains= value
      },
      get desserts (){
        return this._courses.desserts
      },
      set desserts (value){
        this._courses.desserts = value
      },
      get courses (){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName,dishName,dishPrice){
      const dish ={
        name: dishName,
        price: dishPrice
      }
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random()* dishes.length);
      return dishes[randomIndex]
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal is ${appetizer.name},${main.name},${dessert.name} and your total bill is ${totalPrice}`
    }
  }
  menu.addDishToCourse('appetizers','samosa',10)
  menu.addDishToCourse('appetizers','pakoda',20)
  menu.addDishToCourse('appetizers','khasta',15)
  
  menu.addDishToCourse('mains','puri',40)
  menu.addDishToCourse('mains','rajma',40)
  menu.addDishToCourse('mains','chole',40)
  
  menu.addDishToCourse('desserts','rasgulla',20)
  menu.addDishToCourse('desserts','barfi',25)
  menu.addDishToCourse('desserts','icecream',33)
  
  const meal = menu.generateRandomMeal()
  console.log(meal)