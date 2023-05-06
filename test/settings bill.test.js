describe("The settings bill function", function () {

    it("should set a call value", function () {
        let setting_bill = settingsBill()
        

        setting_bill.setCallCost(2.75)

        assert.equal(2.75, setting_bill.getCallCost());


        let setting_bill1 = settingsBill()

        setting_bill1.setCallCost(1.75)

        assert.equal(1.75, setting_bill1.getCallCost());
    })

    it("should set an sms value", function () {
        let setting_bill = settingsBill()
        setting_bill.setSmsCost(0.75)
        assert.equal(0.75, setting_bill.getSmsCost())


        let setting_bill2 = settingsBill()
        setting_bill2.setSmsCost(0.85)

        assert.equal(0.85, setting_bill2.getSmsCost())

    })


    it("should be able to set call and sms cost", function () {
        let setting_bill = settingsBill()

        setting_bill.setCriticalLevel(10)
        setting_bill.setCallCost(2.75)
        setting_bill.setSmsCost(0.75)
        
        assert.equal(2.75, setting_bill.getCallCost())
        assert.equal(0.75, setting_bill.getSmsCost())


        let setting_bill1 = settingsBill()
        
        setting_bill1.setCallCost(1.75)
        setting_bill1.setSmsCost(0.65)

        
        assert.equal(1.75, setting_bill1.getCallCost())
        assert.equal(0.65, setting_bill1.getSmsCost())
        
    })

    
    it("should set empty string", function () {
        let setting_bill = settingsBill()

        setting_bill.getsettingsNoValueCost("")

        assert.equal("", setting_bill.getsettingsNoValueCost())

    })


    it("should set the warning level", function () {
        let setting_bill = settingsBill()

        setting_bill.setWarningLevel(20)

        assert.equal(20, setting_bill.getWarningLevel())


        let setting_bill1 = settingsBill()

        setting_bill1.setWarningLevel(30)

        assert.equal(30, setting_bill1.getWarningLevel())

    })


    it("should set the critical level", function () {
        let setting_bill = settingsBill()

        setting_bill.setCriticalLevel(35)

        assert.equal(35, setting_bill.getCriticalLevel())


        let setting_bill1 = settingsBill()

        setting_bill1.setCriticalLevel(55)

        assert.equal(55, setting_bill1.getCriticalLevel())

    })

    it("should set the warning and critical level", function () {
        let setting_bill = settingsBill()

        setting_bill.setWarningLevel(15)
        setting_bill.setCriticalLevel(45)


        assert.equal(15, setting_bill.getWarningLevel())
        assert.equal(45, setting_bill.getCriticalLevel())


    })
})

describe("Use set Values", function () {

    it("should be able to use the call cost set 2.75 to make 3 calls", function () {

        let setting_bill = settingsBill()
        
        setting_bill.setCriticalLevel(10)
        setting_bill.setCallCost(2.75)
        setting_bill.setSmsCost(0.85)
        
        setting_bill.makeCall();
        setting_bill.makeCall();
        setting_bill.makeCall();

        assert.equal(8.25,setting_bill.getTotalCost())
        assert.equal(8.25,setting_bill.getTotalCallCost())
        assert.equal(0.00,setting_bill.getTotalSmsCost())

    })


    it("should be able to make 2 calls at 1.75", function () {

        let setting_bill = settingsBill()

        setting_bill.setCriticalLevel(10)
        setting_bill.setCallCost(1.75)
        setting_bill.setSmsCost(0.85)
        
        setting_bill.makeCall();
        setting_bill.makeCall();
        

        assert.equal(3.50,setting_bill.getTotalCost())
        assert.equal(3.50,setting_bill.getTotalCallCost())
        assert.equal(0.00,setting_bill.getTotalSmsCost())

    })

    it("should be able to send 2 sms at 0.75", function () {

        let setting_bill = settingsBill()

        setting_bill.setCriticalLevel(10)
        setting_bill.setCallCost(1.75)
        setting_bill.setSmsCost(0.75)
        
        setting_bill.sendSms();
        setting_bill.sendSms();
        

        assert.equal(1.50,setting_bill.getTotalCost())
        assert.equal(1.50,setting_bill.getTotalSmsCost())
        assert.equal(0.00,setting_bill.getTotalCallCost())

    })

    it("should be able to send 2 sms at 0.75 and make a call at 1.75", function () {

        let setting_bill = settingsBill()

        setting_bill.setCriticalLevel(10)
        setting_bill.setCallCost(1.75)
        setting_bill.setSmsCost(0.75)
        
        setting_bill.sendSms();
        setting_bill.sendSms();
        setting_bill.makeCall()
        

        assert.equal(3.25,setting_bill.getTotalCost())
        assert.equal(1.50,setting_bill.getTotalSmsCost())
        assert.equal(1.75,setting_bill.getTotalCallCost())

    });




})

describe("warning and critical level", function () {

    it("should return a class name of 'warning' if warning level is reached", function () {

        let setting_bill = settingsBill()

        setting_bill.setCallCost(1.75)
        setting_bill.setSmsCost(0.75)
        setting_bill.setWarningLevel(5)
        setting_bill.setCriticalLevel(10)
        
        
        setting_bill.makeCall()
        setting_bill.makeCall()
        setting_bill.makeCall()

        assert.equal("warning",setting_bill.totalClassName())
    })


    it("should return a class name of 'critical' if critical level is reached", function () {

        let setting_bill = settingsBill()

        setting_bill.setCallCost(2.75)
        setting_bill.setSmsCost(0.75)
        setting_bill.setCriticalLevel(10)

        
        
        setting_bill.makeCall()
        setting_bill.makeCall()
        setting_bill.makeCall()
        setting_bill.sendSms()
        setting_bill.sendSms()
        setting_bill.sendSms()

        assert.equal("critical",setting_bill.totalClassName())
    })

    it("should stop the total call cost from increasing when critical level is reached", function () {

        let setting_bill = settingsBill()

        setting_bill.setCallCost(2.75)
        setting_bill.setSmsCost(0.75)
        setting_bill.setCriticalLevel(11)

        
        
        setting_bill.makeCall()
        setting_bill.makeCall()
        setting_bill.makeCall()
        setting_bill.makeCall()
        
        

        assert.equal("critical",setting_bill.totalClassName())
        assert.equal(11,setting_bill.getTotalCallCost())
    })


    it("should be able to update the critical level  if the new value has been upped", function () {

        let setting_bill = settingsBill();

        setting_bill.setCallCost(2.75);
        setting_bill.setSmsCost(0.75);
        setting_bill.setWarningLevel(8);
        setting_bill.setCriticalLevel(11);

        
        
        setting_bill.makeCall();
        setting_bill.makeCall();
        setting_bill.makeCall();
        setting_bill.makeCall();
        
        

        assert.equal("critical",setting_bill.totalClassName());
        assert.equal(11,setting_bill.getTotalCallCost());

        setting_bill.setCriticalLevel(20);
        assert.equal("warning",setting_bill.totalClassName());

        setting_bill.makeCall();
        setting_bill.makeCall();
        assert.equal(16.50,setting_bill.getTotalCallCost());



    })

})