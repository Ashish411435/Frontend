var result = false;

function getValue(myvalue) {
    if (myvalue == "AC") {
        document.getElementById('mydisplay').value = '';
    } else {
        if (myvalue == "=") {

            let total = document.getElementById('mydisplay').value;
            let totalFinal = eval(total);
            result = true;
            document.getElementById('mydisplay').value = totalFinal;
        } else {
            if (!result) {
                if(myvalue == "+" || myvalue == "-" || myvalue == "*" || myvalue == "/"){
                    document.getElementById('mydisplay').value += myvalue;
                }
                else{
                    document.getElementById('mydisplay').value += myvalue;
                }
            } else {
                if(myvalue == "+" || myvalue == "-" || myvalue == "*" || myvalue == "/"){
                    document.getElementById('mydisplay').value += myvalue;
                    result = false;
                }else{
                    document.getElementById('mydisplay').value = "";
                    document.getElementById('mydisplay').value += myvalue;
                    result = false;
                }
            }
        }
    }
}

function myfunc(y){
    var my = document.getElementById('mydisplay').value;
    var bb = my.slice(-1);
}
