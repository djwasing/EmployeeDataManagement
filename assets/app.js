
var config = {
    apiKey: "AIzaSyBWA1IxJ5wXblDxXegz8IgpQmITesl4fio",
    authDomain: "employee-data-management-3cdaf.firebaseapp.com",
    databaseURL: "https://employee-data-management-3cdaf.firebaseio.com",
    projectId: "employee-data-management-3cdaf",
    storageBucket: "employee-data-management-3cdaf.appspot.com",
    messagingSenderId: "266699550318"
};

firebase.initializeApp(config);

var database = firebase.database();

$(document).on("click", "#submit", function() {

    console.log('ok');

    var newName = $('#employee-name').val().trim();
    var newRole = $('#employee-role').val().trim();
    var newDate = $('#employee-startYear').val().trim();
    var newRate = parseInt($('#employee-rate').val().trim());

    function newEmployeeData(employeeName, role, startDate, monthlyRate) {
        database.ref().push({

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
    


database.ref().orderByChild("dateAdded").limitToLast(10).on("child_added", function (snapshot) {

    console.log(snapshot);
    var nameList = $('<li>');
    var roleList = $('<li>');
    var startDateList = $('<li>');
    var monthlyRateList = $('<li>');
    
    nameList.text(snapshot.val().name);
    $('#employee-name-card').append(nameList);
    
    roleList.text(snapshot.val().role);
    $('#employee-role-card').append(roleList);
    
    startDateList.text(snapshot.val().startDate);
    $('#start-date-card').append(startDateList);
    
    monthlyRateList.text(snapshot.val().monthlyRate);
    $('#monthly-rate-card').append(monthlyRateList);


})