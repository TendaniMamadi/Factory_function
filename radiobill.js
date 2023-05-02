function radioBill(){


    var radioCallBill = 0;
    var radioSmsBill = 0;
    var totalRadioBill = radioCallBill + radioSmsBill;

    function setRadioCallBill(radioCallBill1) {

        if (radioCallBill1 === 'call') {

            radioCallBill += 2.75;
        }
    }

    function getRadioCallBill() {

        return radioCallBill;
    }

    function setRadioSmsBill(radioSmsBill1) {

        if (radioSmsBill1 === 'sms') {
            radioSmsBill += 0.75;
        };
    }

    function getRadioSmsBill() {

        return radioSmsBill;
    }

    function getTotalRadioBill() {

        let cost = {
            call: 2.75,
            sms: 0.75,
        }
        

        if (cost === 'call' || 'sms') {

        }

        return totalRadioBill
    }



    return {

        setRadioCallBill,
        getRadioCallBill,
        setRadioSmsBill,
        getRadioSmsBill,
        getTotalRadioBill,
        
    }
}
