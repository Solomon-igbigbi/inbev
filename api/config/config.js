require("dotenv").config()

module.exports={
  "development": {
    "username": "jatooulk",
    "password": "mJ-msfWq_wRd3-kNmW5R4ia91yyxwLfQ",
    "database": "jatooulk",
    "host": "postgres://jatooulk:mJ-msfWq_wRd3-kNmW5R4ia91yyxwLfQ@queenie.db.elephantsql.com:5432/jatooulk",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
