
describe('The radio bill function',function(){
    it('should return the value of the checked item(call)',function(){
        let radio_bill = radioBill()
        radio_bill.setRadioCallBill("call")

        assert.equal(2.75,radio_bill.getRadioCallBill());
    })

    it('should return the value of the checked item(sms)',function(){
        let radio_bill = radioBill()
        radio_bill.setRadioSmsBill("sms")

        assert.equal(0.75,radio_bill.getRadioSmsBill());
    })


    it('should return the value of the checked items(total)',function(){
        let radio_bill = radioBill()
       
        assert.equal(0,radio_bill.getTotalRadioBill());
    })



})