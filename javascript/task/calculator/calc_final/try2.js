var result = false;
function getValue(myvalue) {
    if (myvalue == "AC") {
        document.getElementById('mydisplay').value = '';
    } else if (myvalue == "=") {
        let total = document.getElementById('mydisplay').value;
        let totalFinal = eval(total);
        result = true;
        document.getElementById('mydisplay').value = totalFinal;
    } else {
        if (!result) {
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

/* Begin Mathematical Operators Action */
function opper(sign) {
    var myscreenval = mydisplay.value;
    var myscrLength = myscreenval.toString();
    var lastBtn = myscrLength.slice(-1);
    
    if (lastBtn == '+' || lastBtn == '-' || lastBtn == '*' || lastBtn == '/' || lastBtn == '%' || lastBtn == '.' || lastBtn == '(' || lastBtn == ')' )  {

        mydisplay.value = mydisplay.value.substr(0, mydisplay.value.length-1);
        mydisplay.value += sign;
    }
    else{
        mydisplay.value += sign;
    }            
}


/* End Mathematical Operators Action */