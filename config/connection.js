var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

	connection = mysql.createConnection({
  	host: "y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  	user: "wge21m93cp2w01xd",
  	password: "kmj07j2y7fq5azda",
  	database: "burgers_db"
});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
