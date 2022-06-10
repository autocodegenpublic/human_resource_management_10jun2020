


var express = require('express');
var apirouter = express.Router();
var human_resource_managerController = require('../ApiController/human_resource_manager');

apirouter.post('/post_human_resource_manager_data', human_resource_managerController.post_human_resource_manager);

apirouter.get('/get_one_human_resource_manager_data',human_resource_managerController.get_one_human_resource_manager);

apirouter.get('/get_all_human_resource_manager_data',human_resource_managerController.get_all_human_resource_manager);

apirouter.patch('/update_one_human_resource_manager_data',human_resource_managerController.update_one_human_resource_manager);

apirouter.delete('/delete_one_human_resource_manager_data',human_resource_managerController.delete_one_human_resource_manager);

  
apirouter.get('/get_one_employee_expertise_by_unique_employee_id',human_resource_managerController.get_one_employee_expertise_by_unique_employee_id);
      
  
apirouter.patch('/update_one_other_employee_information_by_unique_employee_id',human_resource_managerController.update_one_other_employee_information_by_unique_employee_id);


apirouter.get('/get_count_of_employee_geneder',human_resource_managerController.get_count_of_employee_geneder);



module.exports = apirouter;