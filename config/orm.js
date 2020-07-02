const connection = require("../config/connection.js");


const orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },

    insertOne: function (tableName, column, value, cb) {
        const queryString = `INSERT INTO ?? (??, devoured) VALUES (?, 0);`
        connection.query(queryString, [tableName, column, value], function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },


    updateOne: function (table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table} SET devoured = ${condition} WHERE id = ${objColVals}`;
       
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };

            cb(result);
        });
    }

};


module.exports = orm;
