
var express = require('express'); 
var request = require('request'); 
var app = express();

app.get('/app1', function(req, res){ 
    request('https://localhost:3000', function (error, response, body) { 
      if (!error && response.statusCode === 200) { 
        console.log(body); 
        res.send(body); 
      } 
     }); 
  });
  app.get('/app2', function(req, res){ 
    request('https://localhost:4000', function (error, response, body) { 
      if (!error && response.statusCode === 200) { 
        console.log(body); 
        res.send(body); 
      } 
     }); 
  });
  app.get('/app3', function(req, res){ 
    request('https://localhost:5000', function (error, response, body) { 
      if (!error && response.statusCode === 200) { 
        console.log(body); 
        res.send(body); 
      } 
     }); 
  });

  app.listen(7000); 
console.log('Server running on port %d', 7000);



// // Dependencies
// const express = require('express');
// const proxy = require('http-proxy-middleware');

// // Config
// const { routes } = require('./config.json');

// const app = express();

// for (route of routes) {
//     app.use(route.route,
//         proxy({
//             target: route.address,
//             pathRewrite: (path, req) => {
//                 return path.split('/').slice(2).join('/'); // Could use replace, but take care of the leading '/'
//             }
//         })
//     );
// }

// app.listen(7000, () => {
//     console.log('Proxy listening on port 80');
// });









// var express = require('express');
// var app = express();
// var fs       = require("fs");
// var morgan   = require("morgan");
// var httpProxy = require('http-proxy');
// var apiProxy = httpProxy.createProxyServer();

// var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
// app.use(morgan('combined',{stream: accessLogStream}));

// var serverOne = 'http://localhost:3000',
//     ServerTwo = 'http://localhost:4000',
//     ServerThree = 'http://localhost:5000';
 
// app.use("/app1/", function(req, res) {
//     console.log('redirecting to Server1');
//     apiProxy.web(req, res, {target: serverOne});
// });

// app.use("/app2/", function(req, res) {
//     console.log('redirecting to Server2');
//     apiProxy.web(req, res, {target: ServerTwo});
// });

// app.use("/app3/", function(req, res) {
//     console.log('redirecting to Server3');
//     apiProxy.web(req, res, {target: ServerThree});
// });

// app.listen(7000);





// // var express = require('express');
// // var proxy = require('http-proxy-middleware');

// // var app = express();

// // app.use(
// //   '/api',
// //   proxy({ target: 'http://www.example.org', changeOrigin: true })
// // );
// // app.listen(3000);
