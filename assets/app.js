

var employeeRef = ref().child("employees/");

function newEmployeeData(employeeName, role, startDate, monthlyRate) {
   database.employeeRef.push({

       name: employeeName,
       role: role,
       startDate: startDate,
       monthlyRate: monthlyRate,
       dateAdded: firebase.database.ServerValue.TIMESTAMP

   })
}

var database = firebase.database();

database.ref().on("child_added", function (snapshot) {

    console.log(snapshot);
 })