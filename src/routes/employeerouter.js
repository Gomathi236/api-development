const express =require('express');
const router = express.Router();


 const employeeController = require("../controllers/employeecontroller");

 router.get("/", employeeController.getEmployeeList);
 router.get("/:id",employeeController.getEmployeeByID);
 router.post("/",employeeController.createNewEmployee);
 router.put("/:id",employeeController.updateEmployee);
 router.delete("/",employeeController.deleteEmployee);
 

 module.exports = router;