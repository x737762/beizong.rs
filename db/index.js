import path from "path";

import sqlite3 from "sqlite3";

const sqlite = new sqlite3.Database(
  path.resolve(process.cwd(), "db/database.db"),
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Connected to the SQLite database.");
    }
  }
);

const db = {
  insert: (sql, params) => {
    return new Promise((resolve, reject) => {
      sqlite.run(sql, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
  select: (sql, params) => {
    return new Promise((resolve, reject) => {
      sqlite.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },
};

export default db;
