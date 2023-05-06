function radioBill() {


    var radioCallBill = 0;
    var radioSmsBill = 0;
    var radioBillWarningLevel = 0;
    var radioBillCriticalLevel = 0;
    var radioBillCallCostTotal = 0;
    var radioBillSmsCostTotal = 0;

    function setRadioCallBill(radioCallBill1) {

        radioCallBill += radioCallBill1;

    }

    function getRadioCallBill() {

        return radioCallBill;
    }

    function setRadioSmsBill(radioSmsBill1) {
        

        radioSmsBill += radioSmsBill1;

    }

    function getRadioSmsBill() {

        return radioSmsBill;
    }


    function setWarningLevel(warningLevel) {

        radioBillWarningLevel = warningLevel;
    }

    function getWarningLevel() {

        return radioBillWarningLevel;
    }

    function setCriticalLevel(criticalLevel) {

        radioBillCriticalLevel = criticalLevel;
    }

    function getCriticalLevel() {

        return radioBillCriticalLevel
    }


    function makeCall() {

        if (!hasReachedCriticalLevel()) {

            radioBillCallCostTotal += radioCallBill
        }

    }

    function getRadioBillTotalCost() {

        return radioBillCallCostTotal + radioBillSmsCostTotal

    }

    function getRadioBillCallCostTotal() {

        return radioBillCallCostTotal


    }

    function getRadioBillSmsCostTotal() {

        return radioBillSmsCostTotal

    }

    function sendSms() {

        if (!hasReachedCriticalLevel()) {

            radioBillSmsCostTotal += radioSmsBill
        }


    }

    function hasReachedCriticalLevel() {

        return getRadioBillTotalCost() >= getCriticalLevel();

    }

    function hasReachedWarningLevel() {

        return getRadioBillTotalCost() >= getWarningLevel();

    }



    function totalClassName() {

        if (hasReachedCriticalLevel()) {

            return "critical"
        }

        if (hasReachedWarningLevel()) {

            return "warning"
        }
    }





    return {

        setRadioCallBill,
        getRadioCallBill,
        setRadioSmsBill,
        getRadioSmsBill,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        totalClassName,
        makeCall,
        sendSms,
        getRadioBillTotalCost,
        getRadioBillCallCostTotal,
        getRadioBillSmsCostTotal

    }
}
