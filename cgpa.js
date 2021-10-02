var nrows = 0;

document.getElementById("submit").onclick = function() {

    document.getElementById("show_result").innerHTML = "";
    var selectField = document.getElementById("courses_drop_down");
    var selected = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selected];
    //console.log(selectedValue.innerHTML);

    var a = parseInt(selectedValue.innerHTML);
    nrows = a;
    var tableElement = document.getElementById("use_js");
    tableElement.innerHTML = "";

    for (var i=0; i<a; i++) {
        tableElement.innerHTML += "<td> <input type='text'> </td><td> <input class='cred' type='number'> </td><td> <input type='number' class='grad'> </td>"
    }

    document.getElementById("submit_button").innerHTML = "<input type='submit';  value='Calculate'>"
}

document.getElementById("submit_button").onclick = function() { 
    var gradePoints = 0;
    var creditsTotal = 0;
    
    var creditArray = document.getElementsByClassName("cred");
    var gradeArray = document.getElementsByClassName("grad");

    for (var i=0; i<nrows; i++) {
        creditsTotal += parseInt(creditArray[i].value);
        gradePoints += parseFloat(gradeArray[i].value)*parseInt(creditArray[i].value);
    }

    var res = gradePoints/creditsTotal;
    
    document.getElementById("show_result").innerHTML = "Your GPA comes out to be: " + res.toFixed(2);
    alert("Your GPA comes out to be: " + res.toFixed(2));
}
