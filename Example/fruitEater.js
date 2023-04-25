function FruitEater() {

    var FruitEaters = 0;

    function eaten() {

        return FruitEaters;

    }

    function eaters(fruit) {
        
        FruitEaters++;
        
    }

    return {

        eaten: eaten,

        eaters: eaters
    }
};