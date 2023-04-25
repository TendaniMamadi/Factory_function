describe('The FruitEater function ', function(){
    it('should count how many fruits have been eaten', function(){
        var FruitEaters = FruitEater();
        FruitEaters.eaters('apple');
        
        assert.equal(1, FruitEaters.eaten());
    });
    
    it('should return number of eaters', function(){
        var FruitEaters = FruitEater();
        FruitEaters.eaters('apple');
        FruitEaters.eaters('apple');
        FruitEaters.eaters('apple');
        assert.equal(3, FruitEaters.eaten());

        FruitEaters.eaters('banana');
        FruitEaters.eaters('mango');
        FruitEaters.eaters('apple');
        assert.equal(6, FruitEaters.eaten());
        
    });

    
})