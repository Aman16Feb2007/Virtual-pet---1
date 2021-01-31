class Food{
    constructor(){
    }

    getCount(){
        database.ref('foodSS').on("value",function(data){
            foodStock = data.val();
        })
    }

    updateCount(cc){
        database.ref('/').update({
            foodSS:cc
        })
    }

}