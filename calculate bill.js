function calculateBill() {
    var thecallCost = 0;
    var theSmsCost = 0;

    function calculate(callCost) {

        let callCost1 = callCost.toLowerCase().split(',');
        for (var i = 0; i < callCost1.length; i++) {
            
            let callCost2 = callCost1[i].trim();

            if (callCost2 === "call") {
                thecallCost += 2.75
            }
            if (callCost2 === "sms") {
                theSmsCost += 0.75
            }
        }
    }



    function getTotalCost() {

        return thecallCost + theSmsCost;
    }

    function totalClassName() {

        if (getTotalCost() > 30) {

            return "critical"
        }

        if (getTotalCost() > 20) {

            return "warning"
        }
    }



    return {
        calculate,
        totalClassName,
        getTotalCost
    }
}

