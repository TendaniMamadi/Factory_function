
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

describe("radio bill warning and critical level", function () {

    it("should return a class name of 'warning' if warning level is reached", function () {

        let radio_bill = radioBill()

        radio_bill.setRadioCallBill(1.75)
        radio_bill.setRadioSmsBill(0.75)
        radio_bill.setWarningLevel(5)
        radio_bill.setCriticalLevel(10)
        
        
        radio_bill.makeCall()
        radio_bill.makeCall()
        radio_bill.makeCall()

        assert.equal("warning",radio_bill.totalClassName())
    })


    it("should return a class name of 'critical' if critical level is reached", function () {

        let radio_bill = radioBill()

        radio_bill.setRadioCallBill(2.75)
        radio_bill.setRadioSmsBill(0.75)
        radio_bill.setCriticalLevel(10)

        
        
        radio_bill.makeCall()
        radio_bill.makeCall()
        radio_bill.makeCall()
        radio_bill.sendSms()
        radio_bill.sendSms()
        radio_bill.sendSms()

        assert.equal("critical",radio_bill.totalClassName())
    })

    it("should stop the total call cost from increasing when critical level is reached", function () {

        let radio_bill = radioBill()

        radio_bill.setRadioCallBill(2.75)
        radio_bill.setRadioSmsBill(0.75)
        radio_bill.setCriticalLevel(11)

        
        
        radio_bill.makeCall()
        radio_bill.makeCall()
        radio_bill.makeCall()
        radio_bill.makeCall()
        
        

        assert.equal("critical",radio_bill.totalClassName())
        assert.equal(11,radio_bill.getRadioBillCallCostTotal())
    })


    it("should be able to update the critical level  if the new value has been upped", function () {

        let radio_bill = radioBill();

        radio_bill.setRadioCallBill(2.75);
        radio_bill.setRadioSmsBill(0.75);
        radio_bill.setWarningLevel(8);
        radio_bill.setCriticalLevel(11);

        
        
        radio_bill.makeCall();
        radio_bill.makeCall();
        radio_bill.makeCall();
        radio_bill.makeCall();
        
        

        assert.equal("critical",radio_bill.totalClassName());
        assert.equal(11,radio_bill.getRadioBillCallCostTotal());

        radio_bill.setCriticalLevel(20);
        assert.equal("warning",radio_bill.totalClassName());

        radio_bill.makeCall();
        radio_bill.makeCall();
        assert.equal(16.50,radio_bill.getRadioBillCallCostTotal());



    })

})