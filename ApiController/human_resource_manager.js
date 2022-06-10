const human_resource_manager_model = require("./../model/human_resource_manager_model")

exports.post_human_resource_manager = async(req,res) => {
    try
    {
        var object = {
                unique_employee_id : req.body.unique_employee_id,
                employee_name : req.body.employee_name,
                employee_geneder : req.body.employee_geneder,
                employee_expertise : req.body.employee_expertise,
                other_employee_information : req.body.other_employee_information,
                }
        await human_resource_manager_model.create(object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});

    }
 }

 exports.get_one_human_resource_manager = async (req,res) => {
    try
    {
        var filter = {
                unique_employee_id : req.query.unique_employee_id,
                }
        var returnObject = {
                }
        var result = await human_resource_manager_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
     return res.status(400).send({success : false});

    }
 }

 exports.get_all_human_resource_manager = async (req,res) => {
    try
    {
        var returnObject = {
                }  
        var result = await human_resource_manager_model.find({},returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.update_one_human_resource_manager = async (req,res) => {
    try
    {
        var filter = {unique_employee_id : req.query.unique_employee_id}
      
        var object = {
                employee_name : req.body.employee_name,
                employee_geneder : req.body.employee_geneder,
                employee_expertise : req.body.employee_expertise,
                other_employee_information : req.body.other_employee_information,
              
        }
        await human_resource_manager_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.delete_one_human_resource_manager = async (req,res) => {
    try
    {
        var filter = {unique_employee_id : req.query.unique_employee_id}
        await human_resource_manager_model.findOneAndDelete(filter);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

   exports.get_one_employee_expertise_by_unique_employee_id = async(req,res)=>{   
    try
    {
        var filter = {  
            unique_employee_id : req.query.unique_employee_id,
            }

        var returnObject = {
         employee_expertise : 1 }
        
        var result = await human_resource_manager_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }
   
     exports.update_one_other_employee_information_by_unique_employee_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_employee_id : req.query.unique_employee_id,
            }

        var object = {
         other_employee_information : req.body.other_employee_information }
        
        var result = await human_resource_manager_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.get_count_of_employee_geneder = async(req,res)=>{ 
    try
    {
        var filter = {employee_geneder :req.query.employee_geneder }
        
        var result = await human_resource_manager_model.countDocuments(filter);
        
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  
