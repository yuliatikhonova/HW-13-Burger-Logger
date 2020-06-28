const connection = require("../config/connection.js");

const orm = {
    selectAll: function (tableInput, cb) {//check to make sure it works
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        const queryString = "";
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            };

            cb(result);
        });
    },


    updateOne: function (table, objColVals, condition, cb) {
        const queryString = "";
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };

            cb(result);
        });
    }

};


module.exports = orm;
