function settingsBill() {
    var settingsCallCost = 0;
    var settingsSmsCost = 0;
    var settingsWarningLevel = 0;
    var settingsCriticalLevel = 0;
    var settingsNoValueCost = "";

    var callCostTotal = 0;
    var smsCostTotal = 0;


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


    function makeCall(){

        if(!hasReachedCriticalLevel()){
  
            callCostTotal += settingsCallCost
        }

    }

    function getTotalCost(){

        return callCostTotal + smsCostTotal

    }

    function getTotalCallCost(){

        return callCostTotal


    }

    function getTotalSmsCost(){

        return smsCostTotal

    }

    function sendSms(){

        if(!hasReachedCriticalLevel()){

            smsCostTotal += settingsSmsCost
        }


    }

    function hasReachedCriticalLevel(){

        return getTotalCost() >= getCriticalLevel();
  
    }

    function hasReachedWarningLevel(){

        return getTotalCost() >= getWarningLevel();
  
    }

   

    function totalClassName(){
        
        if(hasReachedCriticalLevel()){
            
            return "critical"
        }
        
        if(hasReachedWarningLevel()){

            return "warning"
        }
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
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        
        
    }
}
