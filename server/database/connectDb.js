const mysql = require("mysql");
const Schema = require('./DataBaseSchema');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

//Database connection stublish
con.connect((err) => {
  if (err) console.log(err);

  console.log("Database connection successfull");
});

//Now Database create
con.query(`CREATE  DATABASE IF NOT EXISTS Frienzon`, (err) => {
  if (err) console.log(err);

  con.query(`USE Frienzon`, (err) => {
      if (err) console.log(err);
      Schema.UserInfo(con);
  });
});
