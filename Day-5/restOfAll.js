function spreadOfAll(...args) {
    console.log(args)
}

function restOffAll(a,b,...args){
    console.log(args)
    console.log(a,b)
}

spreadOfAll(10,20,30)

spreadOfAll(10,20,30,"fourty","fifty")

restOffAll(10,20,"thirty" , "fourty")