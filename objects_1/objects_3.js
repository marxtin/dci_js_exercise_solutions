/// a method that will let me know if the drink is available in the city
 
/// drink.isAvailable("Berlin") -> "the drink is available in Berlin"

   

const drink2 = {
    id: 1593275846,
    name: "Durstlöscher Sauerkirsche Zitrone",
    stock: 666,
    price: 0.50,
    availability: ["Berlin", "Hamburg", "Leipzig", "Stuttgart", "Schleswig"],
    isAvailable: function (city) {

      
        if (this.availability.includes(city)){
                return `The drink is available in ${city}`
            }
        else {
         return `The drink is not  available in ${city}`
    }
    }}    


console.log(drink2.isAvailable("Hannover"));
