function textBill() {
    var thecallCost = 0;
    var theSmsCost = 0;
    var theZeroCost = 0; 
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

   
    function getTheZeroCost() {

        if (theZeroCost !== "sms" || "call") {
            return 0.00
        }


    }

    function getTotalCost() {

        let cost = {
            call: 2.75,
            sms: 0.75,
        }
        

        if (cost === 'call' || 'sms') {

        }

        return theTotalCost
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTheZeroCost,
        getTotalCost
    }
}

