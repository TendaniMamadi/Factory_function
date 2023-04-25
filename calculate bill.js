function calculateBill() {
    var thecallCost = 0;
    var theSmsCost = 0;
    var theTotalCost = thecallCost + theSmsCost;

    function setCallCost(callCost) {

        let callCost1 = callCost.toLowerCase().split(',');
        for (var i = 0; i < callCost1.length; i++) {
            let callCost2 = callCost1[i].trim();
            if (callCost2 === "call") {
                thecallCost += 2.75
            }
        }
    }

    function getCallCost() {

        return thecallCost;
    }

    function setSmsCost(smsCost) {
        let smsCost1 = smsCost.toLowerCase().split(',');
        for (var i = 0; i < smsCost1.length; i++) {
            let smsCost2 = smsCost1[i].trim();
            if (smsCost2 === "sms") {
                theSmsCost += 0.75
            }
        }
        
    }

    function getSmsCost() {

        return theSmsCost;
    }

   
    function getTotalCost() {

        if (theTotalCost !== "sms" || "call") {
            return 0.00
        }


    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTotalCost
    }
}

