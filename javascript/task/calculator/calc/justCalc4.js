var result = true;
function getValue(myValue) {
    if (myValue == "AC") {
        mydisplay.value = "";
    } else {
        if(myValue == "="){
            let displayValues = mydisplay.value;
            let total = eval(displayValues);
            result = true;
            mydisplay.value = total;
        }
        else {
            if(result==false)
            {
                document.getElementById('mydisplay').value += myValue;
            }
            else{
                if(myValue == "+"){
                    document.getElementById('mydisplay').value += myValue;
                    result = false;
                }else {
                    if(myValue == "+" || myValue == "-" || myValue == "*" || myValue == "/"){
                        document.getElementById('mydisplay').value += myValue;
                        result = false;
                    }else{
                        document.getElementById('mydisplay').value = "";
                        document.getElementById('mydisplay').value += myValue;
                        result = false;
                    }
                }
            }
        }
    }
}