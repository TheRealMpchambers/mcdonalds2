var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "rez"
});

function addReservation() {
    var uniqueID = $("#").val().trim();
    var nameInput = $("#").val().trim();
    var emailInput = $("#").val().trim();
    var phoneInput = $("#").val().trim();
    connection.query("INSERT INTO reservations SET ?",
    {
      unique_id: uniqueID,
      name: nameInput,
      email: emailInput,
      phone: phoneInput
    },
    function(err, res) {
        if (err) throw err;
        if ( ) {
            alert("Your table is ready")
        } else if ( ) {
           alert("You have been added to the waiting list")
        };
      console.log(res);
    }
  );
};

function generateTables() {
    connection.query("SELECT * FROM reservations", function(err,results) {
        if (err) throw err;

});
};