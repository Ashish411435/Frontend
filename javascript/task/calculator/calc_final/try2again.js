var result = false;
function getValue(myvalue) {
    if (myvalue == "AC") {
        document.getElementById('mydisplay').value = '';
    } 
    else if (myvalue == "=") {
        let total = document.getElementById('mydisplay').value;
        let totalFinal = eval(total);
        result = true;
        document.getElementById('mydisplay').value = totalFinal;
    } 
    else {
        if (result == false) {
            document.getElementById('mydisplay').value += myvalue;
        } else {
            if (myvalue == "+" || myvalue == "-" || myvalue == "*" || myvalue == "/") {
                document.getElementById('mydisplay').value += myvalue;
                result = false;
            } else {
                document.getElementById('mydisplay').value = "";
                document.getElementById('mydisplay').value += myvalue;
                result = false;
            }
        }
    }
}

/* Begin Mathematical Operators     Action */
function opper(sign) {
    var myscreenval = mydisplay.value;
    var myscrInString = myscreenval.toString();
    var lastBtn = myscrInString.slice(-1);
    // if(sign == "."){
    //     decimal.setAttribute("disabled", "disabled");
    // }
    // else{
    //     if(sign == '+' || sign == '*' || sign == '-' || sign == '/')
    //     decimal.setAttribute("disabled", "disabled");
    // }

    if (lastBtn == '+' || lastBtn == '-' || lastBtn == '*' || lastBtn == '/' || lastBtn == '%' || lastBtn == '(')  {
        mydisplay.value = mydisplay.value.substr(0, mydisplay.value.length-1); // || mydisplay.value = mydisplay.value.slice(0, -1);
        mydisplay.value += sign;
    }
    else{
        mydisplay.value += sign;
    }
    
    
}


/* End Mathematical Operators Action */