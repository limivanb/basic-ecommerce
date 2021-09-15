const express = require("express");
const { connection, options } = require("./config/connection");

let SuppliersRouter = express.Router();

// Get all suppliers
SuppliersRouter.get("/", (req, res) => {
    
    const sql = `SELECT * FROM suppliers`;

    connection.query(sql, (error, results, fields) => {

        if (error){
            console.log(error)
            throw error;
        }

        if (results.length > 0) {
            res.send({
                results: results,
                success: true
            });
        } else {
            res.send({
                success: false
            });
        }
    });
});

// Add new supplier
SuppliersRouter.post("/", (req, res) => {
    const supplier_name = req.body.supplier_name;
    const address = req.body.address;
    const email_address = req.body.email_address;
    const mobile_number = req.body.mobile_number;

    const sql = `INSERT INTO suppliers ` + 
                `(supplier_name, address, email_address, mobile_number) VALUES ` + 
                `('${supplier_name}','${address}','${email_address}','${mobile_number}')`;

                console.log(sql)
    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.log(JSON.stringify(error, undefined, 2));
        } else {
            res.send({
                supplier_id: results.insertId,
                message: "New supplier successfully added."
            });
        }
    });

});

// update the supplier details
SuppliersRouter.put("/:supplieid", (req, res) => {
    const supplier_id = req.params.supplieid
    const supplier_name = req.body.supplier_name;
    const address = req.body.address;
    const email_address = req.body.email_address;
    const mobile_number = req.body.mobile_number;

    const sql = `UPDATE suppliers SET ` + 
                `supplier_name ='${supplier_name}', ` + 
                `address ='${address}', ` + 
                `email_address ='${email_address}', ` + 
                `mobile_number ='${mobile_number}' ` + 
                `WHERE supplier_id = ${supplier_id} ` + 
                `LIMIT 1`;

                console.log(sql)
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.send({
                success: false,
                message: "Could not update supplier details."
            });
        } else {
            res.send({
                success: true,
                message: "Supplier details successfully updated."
            });
        }
    });

});

// delete the supplier
SuppliersRouter.delete("/:supplieid", (req, res) => {
    const supplier_id = req.params.supplieid

    const sql = `DELETE FROM suppliers ` + 
                `WHERE supplier_id = ${supplier_id} ` + 
                `LIMIT 1`;

                console.log(sql)
    connection.query(sql, (error, results, fields) => {
        if (error) {
            res.send({
                success: false,
                message: "Could not delete supplier."
            });
        } else {
            console.log(results)
            res.send({
                success: true,
                message: "Supplier successfully deleted."
            });
        }
    });

});

module.exports = { SuppliersRouter };