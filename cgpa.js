var nrows = 0;

document.getElementById("gpa_cal").onclick = function() {

    var tableElement = document.getElementById("use_js");
    tableElement.innerHTML = "";
    document.getElementById("show_result").innerHTML = "";

    document.getElementById("choose_dropdown").innerHTML = "<p>Enter number of courses: <select id='courses_drop_down'> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5'>5</option> <option value='6'>6</option> <option value='7'>7</option> <option value='8'>8</option> </select> <input id='submit' type='submit'> </p>"

    document.getElementById("submit").onclick = function() {

        document.getElementById("show_result").innerHTML = "";
        var selectField = document.getElementById("courses_drop_down");
        var selected = selectField.options.selectedIndex;
        var selectedValue = selectField.options[selected];

        var a = parseInt(selectedValue.innerHTML);
        nrows = a;
        tableElement.innerHTML = "";
        for (var i=0; i<a; i++) {
            tableElement.innerHTML += "<td> <input type='text' placeholder='Course " + (i+1) + "'> </td><td> <input class='cred' required type='number'> </td><td> <input type='number' required class='grad'> </td>";
        }

        document.getElementById("submit_button").innerHTML = "<input type='submit';  value='Calculate'>";
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
}

document.getElementById("cgpa_cal").onclick = function() {

    var tableElement = document.getElementById("use_js");
    tableElement.innerHTML = "";
    document.getElementById("show_result").innerHTML = "";

    document.getElementById("choose_dropdown").innerHTML = "<p>Enter number of semesters: <select id='courses_drop_down'> <option value='2'>2</option> <option value='3'>3</option> <option value='4'>4</option> <option value='5'>5</option> <option value='6'>6</option> <option value='7'>7</option> <option value='8'>8</option> </select> <input id='submit' type='submit'> </p>";

    document.getElementById("submit").onclick = function() {

        document.getElementById("show_result").innerHTML = "";
        var selectField = document.getElementById("courses_drop_down");
        var selected = selectField.options.selectedIndex;
        var selectedValue = selectField.options[selected];

        var a = parseInt(selectedValue.innerHTML);
        nrows = a;
        tableElement.innerHTML = "";
        for (var i=0; i<a; i++) {
            tableElement.innerHTML += "<td> <input type='text' placeholder='Semester " + (i+1) + "'> </td><td> <input class='cred' required type='number'> </td><td> <input type='number' required class='grad'> </td>";
        }

        document.getElementById("submit_button").innerHTML = "<input type='submit';  value='Calculate'>";
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
        alert("Your CGPA comes out to be: " + res.toFixed(2));
    }
}
