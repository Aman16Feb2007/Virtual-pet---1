class Food{
    constructor(){
    }

    getFoodStock(){
    foodStock = database.ref('food').on("value", (data)=>{
        foodS = data.val();
    });
    }

    updateFoodStock(stock){
        database.ref('/').update({
            'foodS' : stock
        })
    }


}