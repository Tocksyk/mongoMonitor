const esClient = require("../models/elasticsearchClient")

let esCrudsServices = {
    deleteIndex: async (index) => {
        esClient.indices.delete().then(data => {
            console.log(`Index Deleted ${index}`);
        }).catch(console.log)
    },
    insertData: async (data, index, typeStr) => {

        esClient.index({
            index: index,
            type: typeStr,
            body: data,
            method: 'post'
        }).then(console.log).catch(console.log);

    },
    readData: async (queryObj, index, typeObj) => {
        esClient.msearch({
            index: index,
            type: typeObj,
            body: [
                {},
                { query: queryObj }
            ]
        }).then(data => console.log(JSON.stringify(data, null, 2)))
            .catch(console.log);
    },
    indexExist: async (index) => {
        esClient.indices.exists({
            index: index
        }).then(data => {
            console.log(data);
        }).catch(console.log);
    },
    createIndex: async (index) => {
        esClient.indices.create({ index: index })
            .then(console.log)
            .catch(console.log);
    },
    readAllData: async () => {
        esClient.msearch({
            body: [
                {},
                { query: { "match_all": {} } }
            ]
        }).then(data => console.log(JSON.stringify(data, null, 2))).catch(console.log);
    },
    deleteData: async (id, index, typeObj) => {
        esClient.deleteByQuery({
            index: index,
            type: typeObj,
            body: {
                query: {
                    match: { "id": id }
                }
            }
        }).then(console.log).catch(console.log);
    }
}



module.exports = esCrudsServices