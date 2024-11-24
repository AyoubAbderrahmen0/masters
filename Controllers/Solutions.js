const Solutions = require("../Models/Solutions");


exports.addSolution=async(req,res)=>{
    try{
            const sol = new Solutions(req.body);
            await sol.save();
            res.status(200).send({msg:"product added successfully",sol});
    }catch(error){
        res.status(500).send({msg:"error on adding product",error})
    }
  }