
describe('The radio bill function',function(){

    it("should set a call value", function () {
        let radio_bill = radioBill()
        

        radio_bill.setRadioCallBill(2.75)

        assert.equal(2.75, radio_bill.getRadioCallBill());


        let radio_bill1 = radioBill()

        radio_bill1.setRadioCallBill(1.75)

        assert.equal(1.75, radio_bill1.getRadioCallBill());
    })

    it("should set an sms value", function () {
        let radio_bill = radioBill()

        radio_bill.setRadioSmsBill(0.75)

        assert.equal(0.75, radio_bill.getRadioSmsBill())


        let radio_bill2 = radioBill()
        radio_bill2.setRadioSmsBill(0.85)

        assert.equal(0.85, radio_bill2.getRadioSmsBill())

    })


    it("should be able to set call and sms cost", function () {
        let radio_bill = radioBill()

        radio_bill.setCriticalLevel(10)
        radio_bill.setRadioCallBill(2.75)
        radio_bill.setRadioSmsBill(0.75)
        
        assert.equal(2.75, radio_bill.getRadioCallBill())
        assert.equal(0.75, radio_bill.getRadioSmsBill())


        let radio_bill1 = radioBill()
        
        radio_bill1.setRadioCallBill(1.75)
        radio_bill1.setRadioSmsBill(0.65)

        
        assert.equal(1.75, radio_bill1.getRadioCallBill())
        assert.equal(0.65, radio_bill1.getRadioSmsBill())
        
    })




})

describe("Use radio bill set Values", function () {

    it("should be able to use the call cost set 2.75 to make 3 calls", function () {

        let radio_bill = radioBill()
        
        radio_bill.setCriticalLevel(10)
        radio_bill.setRadioCallBill(2.75)
        radio_bill.setRadioSmsBill(0.85)
        
        radio_bill.makeCall();
        radio_bill.makeCall();
        radio_bill.makeCall();

        assert.equal(8.25,radio_bill.getRadioBillTotalCost())
        assert.equal(8.25,radio_bill.getRadioBillCallCostTotal())
        assert.equal(0.00,radio_bill.getRadioBillSmsCostTotal())

    })


    it("should be able to make 2 calls at 1.75", function () {

        let radio_bill = radioBill()

        radio_bill.setCriticalLevel(10)
        radio_bill.setRadioCallBill(1.75)
        radio_bill.setRadioSmsBill(0.85)
        
        radio_bill.makeCall();
        radio_bill.makeCall();
        

        assert.equal(3.50,radio_bill.getRadioBillTotalCost())
        assert.equal(3.50,radio_bill.getRadioBillCallCostTotal())
        assert.equal(0.00,radio_bill.getRadioBillSmsCostTotal())

    })

    it("should be able to send 2 sms at 0.75", function () {

        let radio_bill = radioBill()

        radio_bill.setCriticalLevel(10)
        radio_bill.setRadioCallBill(1.75)
        radio_bill.setRadioSmsBill(0.75)
        
        radio_bill.sendSms();
        radio_bill.sendSms();
        

        assert.equal(1.50,radio_bill.getRadioBillTotalCost())
        assert.equal(1.50,radio_bill.getRadioBillSmsCostTotal())
        assert.equal(0.00,radio_bill.getRadioBillCallCostTotal())

    })

    it("should be able to send 2 sms at 0.75 and make a call at 1.75", function () {

        let radio_bill = radioBill()

        radio_bill.setCriticalLevel(10)
        radio_bill.setRadioCallBill(1.75)
        radio_bill.setRadioSmsBill(0.75)
        
        radio_bill.sendSms();
        radio_bill.sendSms();
        radio_bill.makeCall()
        

        assert.equal(3.25,radio_bill.getRadioBillTotalCost())
        assert.equal(1.50,radio_bill.getRadioBillSmsCostTotal())
        assert.equal(1.75,radio_bill.getRadioBillCallCostTotal())

    });




})