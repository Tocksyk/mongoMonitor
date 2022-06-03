const elasticsearch = require('elasticsearch');

let esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200',
  httpAuth:`username:password`,
  apiVersion: '6.8',
});

module.exports = esClient