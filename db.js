require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = process.env.DB_SOURCE || "food.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
    throw err;
  } else {
    console.log(`Connected to the SQLite database: ${DBSOURCE}`);
  }
});

module.exports = db;
