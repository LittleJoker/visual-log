import 'babel-polyfill';

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123123a##',
  database: 'mock_logs'
});

const tableName = 'data_flow';
const funnelTableName = 'data_flow_funnel';

connection.connect();

const SQL_SELECT_ALL = `SELECT * FROM ${tableName}`;
const SQL_SELECT_PC_FUNNEL = `SELECT * FROM ${funnelTableName} WHERE platform = 'pc'`;

const selectAllQuery = function (callback) {
  executeQuery(SQL_SELECT_ALL, callback);
};



const getPcFunnelQuery = function (callback) {
  executeQuery(SQL_SELECT_PC_FUNNEL, callback);
};

// base function
const executeQuery = function(queryString, callback) {
  connection.query(SQL_SELECT_ALL, function (error, results, fields) {
    if (error) {
      throw new Error(error);
    } else {
      if (typeof callback === 'function') {
        callback(results);
      } else {
        throw new Error()
      }
    }
  });
};

export default {
  selectAllQuery,
  getPcFunnelQuery,
  executeQuery
}
