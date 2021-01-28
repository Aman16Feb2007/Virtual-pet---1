class Food{
    constructor(){
    }

    foodStock = database.ref('food').on("value", readStock);

}