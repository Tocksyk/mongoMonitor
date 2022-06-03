const changesController = require("./esOperations");
const productModel = require("../models/testConnection");

async function watchingChanges(){
  productModel.watch().on("change", data=>{
    console.log(
      `
      *****************************Changes Made*************************************
      ${JSON.stringify(data)}
      *******************************************************************************
      `
    );
    changesController(data);
  })
}

module.exports = watchingChanges


