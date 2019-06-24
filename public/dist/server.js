/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data_base/connect.js":
/*!**********************************!*\
  !*** ./src/data_base/connect.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! babel-polyfill */ "babel-polyfill");

var mysql = __webpack_require__(/*! mysql */ "mysql");
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123123a##',
  database: 'mock_logs'
});

var tableName = 'data_flow';
var funnelTableName = 'data_flow_funnel';

connection.connect();

var SQL_SELECT_ALL = 'SELECT * FROM ' + tableName;
var SQL_SELECT_PC_FUNNEL = 'SELECT * FROM ' + funnelTableName + ' WHERE platform = \'pc\'';

var selectAllQuery = function selectAllQuery(callback) {
  executeQuery(SQL_SELECT_ALL, callback);
};

var getPcFunnelQuery = function getPcFunnelQuery(callback) {
  executeQuery(SQL_SELECT_PC_FUNNEL, callback);
};

// base function
var executeQuery = function executeQuery(queryString, callback) {
  connection.query(SQL_SELECT_ALL, function (error, results, fields) {
    if (error) {
      throw new Error(error);
    } else {
      if (typeof callback === 'function') {
        callback(results);
      } else {
        throw new Error();
      }
    }
  });
};

exports.default = {
  selectAllQuery: selectAllQuery,
  getPcFunnelQuery: getPcFunnelQuery,
  executeQuery: executeQuery
};

/***/ }),

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(/*! webpack */ "webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware");

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware");

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _connect = __webpack_require__(/*! ../data_base/connect */ "./src/data_base/connect.js");

var _connect2 = _interopRequireDefault(_connect);

var _webpackDevConfig = __webpack_require__(/*! ../../webpack.dev.config.js */ "./webpack.dev.config.js");

var _webpackDevConfig2 = _interopRequireDefault(_webpackDevConfig);

var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

__webpack_require__(/*! babel-polyfill */ "babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(),
    DIST_DIR = __dirname,
    HTML_FILE = _path2.default.join(DIST_DIR, '../../public/index.html'),
    compiler = (0, _webpack2.default)(_webpackDevConfig2.default);
console.log(HTML_FILE);
var router = _express2.default.Router();

app.use((0, _webpackDevMiddleware2.default)(compiler, {
  publicPath: _webpackDevConfig2.default.output.publicPath
}));

app.use((0, _webpackHotMiddleware2.default)(compiler));

app.use(_express2.default.json({
  type: ['application/json', 'text/plain']
}));

app.get('/platform/*', function (req, res, next) {
  // console.log(HTML_FILE);

  res.set('content-type', 'text/html');

  _fs2.default.readFile(HTML_FILE, function (error, content) {
    if (error) {
      res.writeHead(404);
      res.write('content not found');
    } else {
      res.writeHead(200);
      res.write(content);
    }

    res.end();
  });
});

app.get('/api/select-all', function (req, res, next) {
  _connect2.default.selectAllQuery(function (results) {
    res.set('content-type', 'application/json');
    res.send(results);
    res.end();
  });
});

app.post('/api/query', function (req, res) {
  if (req.body.data.sql) {
    var sqlQuery = req.body.data.sql;
    _connect2.default.executeQuery(sqlQuery, function (results) {
      res.set('content-type', 'application/json');
      res.send(results);
      res.end();
    });
  } else {
    res.set('content-type', 'application/json');
    res.send({
      error: '/api/query post method should have sql string in body'
    });
  }
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log('App listening to ' + PORT + '....');
  console.log('Press Ctrl+C to quit.');
});

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "path");
var webpack = __webpack_require__(/*! webpack */ "webpack");
var HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ "html-webpack-plugin");

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?timeout=20000&reload=true', './src/client/index.js']
  },
  output: {
    path: path.join(__dirname, '/public/dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
    // {
    //   enforce: "pre",
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   loader: "eslint-loader",
    //   options: {
    //     emitWarning: true,
    //     failOnError: false,
    //     failOnWarning: false,
    //     fix: true
    //   }
    // },
    // {
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   // loader: "babel-loader",
    //   use: [
    //     {
    //       loader: "babel-loader",
    //       options: {
    //         presets: ["es2015", "react"]
    //       }
    //     }
    //   ]
    // },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }]
    }, {
      // Loads the javacript into html template provided.
      // Entry point is set below in HtmlWebPackPlugin in Plugins
      test: /\.html$/,
      use: [{
        loader: "html-loader"
        //options: { minimize: true }
      }]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }]
  },
  plugins: [new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './public/index.html',
    excludeChunks: ['server']
  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
};

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map