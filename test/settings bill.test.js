describe("The settings bill function", function () {

    it("should set a call value and return results", function () {
        let setting_bill = settingsBill()

        setting_bill.setCallCost(2.75)

        assert.equal(2.75, setting_bill.getCallCost());
    })

    it("should set an sms value and return results", function () {
        let setting_bill = settingsBill()
        setting_bill.setSmsCost(0.75)

        assert.equal(0.75, setting_bill.getSmsCost())

    })


    it("should return 0 if passed with empty string", function () {
        let setting_bill = settingsBill()

        setting_bill.getsettingsNoValueCost("")

        assert.equal("", setting_bill.getsettingsNoValueCost())

    })

    it("should return total of call and sms", function () {
        let setting_bill = settingsBill()

        setting_bill.getSettingsTotalCost()

        assert.equal(0.00, setting_bill.getSettingsTotalCost())

    })

    it("should set the warning level", function () {
        let setting_bill = settingsBill()

        setting_bill.setWarningLevel(20)

        assert.equal(20, setting_bill.getWarningLevel())

    })

    it("should set the critical level", function () {
        let setting_bill = settingsBill()

        setting_bill.setCriticalLevel(35)

        assert.equal(35, setting_bill.getCriticalLevel())

    })

    it("should set the warning and critical level", function () {
        let setting_bill = settingsBill()

        setting_bill.setWarningLevel(15)
        setting_bill.setCriticalLevel(45)

        assert.equal(15, setting_bill.getWarningLevel())
        assert.equal(45, setting_bill.getCriticalLevel())


    })
})