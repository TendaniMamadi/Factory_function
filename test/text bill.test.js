describe("The text bill function",function(){
    it("should be able to make 1 call and return 2.75", function () {
        let text_bill = textBill()
        text_bill.calculate1("call")

        assert.equal(2.75, text_bill.getTotalCost1());

    })


    it("should be able to send 1 sms and return .75", function () {
        let text_bill2 = textBill()
        text_bill2.calculate1("sms")

        assert.equal(0.75, text_bill2.getTotalCost1())

    })


    it("should be able to make 3 calls and return 8.25", function () {
        let text_bill3 = textBill()
        text_bill3.calculate1("call,call,call")

        assert.equal(8.25, text_bill3.getTotalCost1());

    })


    it("should be able to send 4 sms and return 3.00", function () {
        let text_bill4 = textBill()
        text_bill4.calculate1("sms, sms, sms, sms")

        assert.equal(3.00, text_bill4.getTotalCost1())

    })


})

describe("text bill warning and critical level", function () {

    it("should return a class name of 'warning' if warning level is reached", function () {

        let text_bill = textBill()

        text_bill.calculate1("call, sms, call, SMS, CALL, sms, call, call, call, call, call, call, call")


        assert.equal(29.75, text_bill.getTotalCost1())
        assert.equal("warning", text_bill.totalClassName())

    })


    it("should return a class name of 'critical' if critical level is reached", function () {

        let text_bill1 = textBill()

        text_bill1.calculate1("call, sms, call, SMS, CALL, sms, call, call, call, call, call, call, call, call")


        assert.equal(32.50, text_bill1.getTotalCost1())
        assert.equal("critical", text_bill1.totalClassName())
    })

});