describe("The calculate bill function",function(){
    it("should take a call string and return its value",function(){
        let calculate_bill = calculateBill()
        calculate_bill.setCallCost("call")
       
        assert.equal(2.75, calculate_bill.getCallCost());
    })

    it("should take an sms string and return its value",function(){
       let calculate_bill2 = calculateBill()
       calculate_bill2.setSmsCost("sms")
       
        assert.equal(0.75, calculate_bill2.getSmsCost())

    })

   
    it("should return 0 if passed with empty string",function(){
        let calculate_bill4 = calculateBill()
        calculate_bill4.getTotalCost("")
        
         assert.equal(0.00, calculate_bill4.getTotalCost())
 
     })
})