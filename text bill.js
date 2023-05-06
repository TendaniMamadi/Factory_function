function textBill() {
    var thecallCost = 0;
    var theSmsCost = 0;
  

    function calculate1(callCost) {

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

   
    function getTotalCost1() {

        return thecallCost + theSmsCost
    }

    function totalClassName() {

        if (getTotalCost1() > 30) {

            return "critical"
        }

        if (getTotalCost1() > 20) {

            return "warning"
        }
    }



    return {
        calculate1,
        getTotalCost1,
        totalClassName
    }
}

