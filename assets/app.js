



$("#submit").on("click", function() {

    var employeeRef = ref().child("employees/");
    var newName = $('#employee-name').val().trim();
    var newRole = $('#employee-role').val().trim();
    var newDate = $('#employee-startYear').val().trim();
    var newRate = parseInt($('#employee-rate').val().trim());

    function newEmployeeData(employeeName, role, startDate, monthlyRate) {
        database.employeeRef.push({

            name: employeeName,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP

        });
    };

    newEmployeeData(newName, newRole, newDate, newRate);

    $("#employee-name").val("");
    $("#employee-role").val("");
    $("#employee-startYear").val("");
    $("#employee-rate").val("");

});
    


database.ref().on("child_added", function (snapshot) {

    console.log(snapshot);

    

})