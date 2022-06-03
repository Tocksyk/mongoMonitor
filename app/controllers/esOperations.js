const productModel = require("../models/testConnection");
const esCrudsServices = require("../services/esCruds");

async function changesController(data){

  let dbData = await productModel.find({"_id": data.documentKey['_id']},{"_id":0, "__v":0}).lean();
  
  if(dbData[0]){

    if(dbData[0].status == `ACTIVATED`){

      await esCrudsServices.insertData(dbData[0],'full_product','full_db');

    }else{
      
      await esCrudsServices.deleteData(data.documentKey['_id'],'full_product','full_db');

    }

  }

}

module.exports = changesController