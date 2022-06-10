
const mongoose = require('mongoose')

const human_resource_manager_schema = new mongoose.Schema({

      unique_employee_id :{
      type :  String ,
      required :  true ,
      unique :  true 
      },

       employee_name :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       employee_geneder :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       employee_expertise :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       other_employee_information :{
      type :  {} ,
      required :  false ,
      unique :  false 
      },

   })

const human_resource_manager_item = mongoose.model('human_resource_manager_item',human_resource_manager_schema);

module.exports = human_resource_manager_item;