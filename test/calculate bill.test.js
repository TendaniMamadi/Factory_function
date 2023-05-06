describe("The calculate bill function", function () {

    it("should be able to make 1 call and return 2.75", function () {
        let calculate_bill = calculateBill()
        calculate_bill.calculate("call")

        assert.equal(2.75, calculate_bill.getTotalCost());

    })


    it("should be able to send 1 sms and return .75", function () {
        let calculate_bill2 = calculateBill()
        calculate_bill2.calculate("sms")

        assert.equal(0.75, calculate_bill2.getTotalCost())

    })


    it("should be able to make 3 calls and return 8.25", function () {
        let calculate_bill3 = calculateBill()
        calculate_bill3.calculate("call,call,call")

        assert.equal(8.25, calculate_bill3.getTotalCost());

    })


    it("should be able to send 4 sms and return 3.00", function () {
        let calculate_bill4 = calculateBill()
        calculate_bill4.calculate("sms, sms, sms, sms")

        assert.equal(3.00, calculate_bill4.getTotalCost())

    })


})

describe("calculate bill warning and critical level", function () {

    it("should return a class name of 'warning' if warning level is reached", function () {

        let calculate_bill = calculateBill()

        calculate_bill.calculate("call, sms, call, SMS, CALL, sms, call, call, call, call, call, call, call")


        assert.equal(29.75, calculate_bill.getTotalCost())
        assert.equal("warning", calculate_bill.totalClassName())

    })


    it("should return a class name of 'critical' if critical level is reached", function () {

        let calculate_bill1 = calculateBill()

        calculate_bill1.calculate("call, sms, call, SMS, CALL, sms, call, call, call, call, call, call, call, call")


        assert.equal(32.50, calculate_bill1.getTotalCost())
        assert.equal("critical", calculate_bill1.totalClassName())
    })

});