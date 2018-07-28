// package use to transform json to csv string
const stringify = require('csv-stringify');
const posts = require('../posts.json');

module.exports = {
  downloadCsv
};

function downloadCsv(req, res) {
  // adding appropriate headers, so browsers can start downloading
  // file as soon as this request starts to get served
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'download-' + Date.now() + '.csv\"');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Pragma', 'no-cache');

  // ta-da! this is cool, right?
  // stringify return a readable stream, that can be directly piped
  // to a writeable stream which is "res" (the response object from express.js)
  // since res is an abstraction over node http's response object which supports "streams"
  stringify(posts, { header: true })
    .pipe(res);
};

