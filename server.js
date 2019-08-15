var http = require('http');
var express = require('express');
var app = express();
var mysql = require('mysql')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static('./public'));


app.get('/', function(req, res) {
    res.send('Hello express');
});
app.listen(3000);
console.log(`Server running at localhost: 3000`);

var connection = getConnection();

function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cegep2k19',
        database: 'mydb'
    })
}

app.get('/users', (req, res) => {
    // var user1 = { name: "sanjay", age: '25' };
    // var user2 = { name: "jeevan", age: '22' };
    // var user3 = { name: "jeevanp", age: '22' };

    // res.json([user1, user2]);
    const getUserQuery = "SELECT * FROM CUSTOMER";

    getConnection().query(getUserQuery, (err, rows, fields) => {
            res.json(rows);
        })
        // res.send("nodemon auto updates the server again now");
});

app.get('/users/:name', (req, res) => {
    console.log('Fetching user data for ' + req.params.name);
    const querystring = 'SELECT * FROM CUSTOMER WHERE name=?';
    getConnection().query(querystring, [req.params.name], (err, rows, fields) => {
        if (err) {
            console.log("Failed query for the transaction");
            res.sendStatus(500);
            return;
        }
        res.json(rows[0]);
    });

    //res.end();
})

app.post('/postCustomer', (req, res) => {
    console.log('Trying to create a new user');
    console.log(req.body.uname);
    console.log(req.body.psw);
    var usernameparm = req.body.uname;
    const queryString = "INSERT INTO CUSTOMER (name, age) values(?,?)";
    getConnection().query(queryString, [req.body.uname, req.body.psw], (err, result, fields) => {
            if (err) {
                console.log('Failed to insert new user');
                //res.sendStatus(500);
                return res.json({
                    errors: ['Failed to insert new user. Hey. Its nobodys fault']
                });
            }
        })
        //res.json(result.rows[0]);

    const querystring = 'SELECT * FROM CUSTOMER WHERE name=?';
    getConnection().query(querystring, usernameparm, (err, rows, fields) => {
        if (err) {
            console.log("Failed query for the transaction");
            res.sendStatus(500);
            return;
        }
        console.log("Failed query for the transaction", rows);
        res.status(201).json(rows[0]);
        res.end();
    });


});

//http://localhost:3000/checkLogin?uname=sanjaysai999&psw=123456789
app.post('/checkLogin', function(req, res) {

    console.log(req.body.uname);
    var userName = req.body.uname;
    console.log(req.body.psw);

    // res.send('{"id":"1","name":"Matt","band":"BBQ Brawlers"}');

    const queryString = 'SELECT * from users where username=?';
    getConnection().query(queryString, [userName], function(err, rows, fields) {
        if (err) {
            res.sendStatus(500);
            return
        }
        // sending all the selected rows as json to the front end as post response
        res.status(200).json(rows);
        // console.log(rows[0]);
        // res.redirect('/about.html');
        res.end();
        // res.redirect("/about.html");
    })
});


//Post Call for the new Items for a new customer
app.post('/insertingIntoListofItems', function(req, res) {


    // if (req.body.isSelected == 'true') {
    //     var isSelected = 1;
    // } else {
    //     var isSelected = 0;
    // }
    // var customerID = 1;
    var data = [
        req.body.item_name,
        req.body.quantity,
        req.body.IsSelected,
        req.body.CustomerID
    ];
    var custID = req.body.CustomerID;

    console.log(custID);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
    const insertqueryStr = "INSERT INTO listofitems (item_name, quantity, IsSelected, CustomerID) VALUES (?,?,?,?)";
    getConnection().query(insertqueryStr, data, (err, result, fields) => {
        if (err) {
            console.log('Failed to insert new user', err);

            res.status(500).json({
                errors: ['Failed to insert new user. Hey. Its nobodys fault']
            });
        }
        console.log(result);
    });

    const querystring = 'SELECT * FROM listofitems WHERE CustomerID=? ';
    getConnection().query(querystring, custID, (err, rows, fields) => {
        if (err) {
            console.log("Failed query for the transaction", err);
            res.sendStatus(500);
            return;
        }
        console.log("Failed query for the transaction", rows);
        res.status(201).json(rows);
        res.end();
    });
    // //res.end();
});

//to Get all items for the customer.
app.get('/getMyItems/:custID', (req, res) => {
    var customerID = req.params.custID;
    const querystring = 'SELECT * FROM listofitems WHERE CustomerID=? ';
    getConnection().query(querystring, customerID, (err, rows, fields) => {
        if (err) {
            console.log("Failed query for the transaction", err);
            res.sendStatus(500);
            return;
        }
        console.log("Failed query for the transaction", rows);
        res.status(201).json(rows);
        res.end();
    });
});