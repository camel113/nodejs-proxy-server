var http = require("http");
var url = require("url");
var request = require("request");

http.createServer(onRequest).listen(process.env.PORT);

function onRequest(req, res) {
  console.log("Test");
  var queryData = url.parse(req.url, true).query;
  console.log("queryData", queryData);
  if (queryData.url) {
    request({
      url: queryData.url,
    })
      .on("error", function (e) {
        res.end(e);
      })
      .pipe(res);
  } else {
    res.end("no url found");
  }
}
