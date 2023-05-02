function settingsBill() {
    var settingsCallCost = 0;
    var settingsSmsCost = 0;
    var settingsWarningLevel = 0;
    var settingsCriticalLevel = 0;
    var settingsNoValueCost = "";
    var settingsTotalCost = settingsCallCost + settingsSmsCost;

    function setCallCost(callCost) {
        
        settingsCallCost = callCost;
       
        
    }

    function getCallCost() {

        return settingsCallCost;
    }

    function setSmsCost(smsCost) {

         settingsSmsCost = smsCost;
       
    }

    function getSmsCost() {

        return settingsSmsCost;
    }

    function setWarningLevel(warningLevel) {
        
        settingsWarningLevel = warningLevel;
    }

    function getWarningLevel() {

        return settingsWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {

        settingsCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {

        return settingsCriticalLevel
    }


    function getsettingsNoValueCost() {

        if (settingsNoValueCost !== "sms" || "call") {
            return 0.00
        }


    }

    function getSettingsTotalCost() {

        let cost = {
            call: 2.75,
            sms: 0.75,
        }


        if (cost === 'call' || 'sms') {

        }

        return settingsTotalCost
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        getsettingsNoValueCost,
        getSettingsTotalCost
    }
}
