describe("The text bill function",function(){
    it("should take a call string and return its value",function(){
        let text_bill = textBill()
        text_bill.setCallCost("call")
       
        assert.equal(2.75, text_bill.getCallCost());
    })

    it("should take an sms string and return its value",function(){
       let text_bill2 = textBill()
       text_bill2.setSmsCost("sms")
       
        assert.equal(0.75, text_bill2.getSmsCost())

    })

   
    it("should return 0 if passed with empty string",function(){
        let text_bill4 = textBill()

        text_bill4.getTotalCost("")
        
         assert.equal(0.00, text_bill4.getTotalCost())
 
     })

     it("should return total of call and sms",function(){
        let text_bill3 = textBill()
        
        text_bill3.getTotalCost()
        
         assert.equal(0.00, text_bill3.getTotalCost())
 
     })
})