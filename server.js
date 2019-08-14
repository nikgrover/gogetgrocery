var http = require('http');
var express = require('express');
var app = express();
var mysql = require('mysql')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
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
        res.json(rows);
    });

    //res.end();
})

app.post('/postCustomer', (req, res) => {
    console.log('Trying to create a new user');
    console.log(req.body.age);
    console.log(req.body.name);

    const queryString = "INSERT INTO CUSTOMER (name, age) values(?,?)";
    getConnection().query(queryString, [req.body.name, req.body.age], (err, result, fields) => {
        if (err) {
            console.log('failed to insert new user');
            res.sendStatus(500);
            return;

        }
        console.log("Inserted a new user with name:", result.insertedId);
        res.end();
    })
    res.end();
});

//http://localhost:3000/checkLogin?uname=sanjaysai999&psw=123456789
app.post('/checkLogin', function(req, res) {

    //get musician.matt
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
        res.json(rows);
        // console.log(rows[0]);
        // res.redirect('/about.html');
        res.end();
        // res.redirect("/about.html");
    })

    // connection.end();

    // app.post('/submit', (req, res) => {

    // });
    //res.end();
});

app.post('/InsertingIntoListofItems', function(req, res) {

    const queryString = "INSERT INTO listofitems (`item_name`,`quantity`,`IsSelected`) VALUES (?,?,?);";
    if (req, body.isSelected == 'true') {
        var isSelected = 1;
    } else {
        var isSelected = 0;
    }
    getConnection().query(queryString, [req.body.item_name, req.body.quantity, isSelected], (err, result, fields) => {
        if (err) {
            console.log('failed to insert new user');
            res.sendStatus(500);
            return;

        }
        console.log("Inserted a new user with name:", result.insertedId);
        res.end();
    })
    res.end();
});