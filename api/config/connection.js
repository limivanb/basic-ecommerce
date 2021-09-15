var mysql = require('mysql');
 
var connection = mysql.createConnection({
   host: "localhost",
   port: "3306",
   user: "root",
   password: "",
   database: 'ecommerce'
});

connection.connect(function(err) {
   if (err) throw err;
   console.log("Database connected successfully!");
});

module.exports = {
    connection
}