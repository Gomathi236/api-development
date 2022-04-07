const express =require('express');
const router = express.Router();


 const employeeController = require("../controllers/employeecontroller");

 router.get("/", employeeController.getEmployeeList);
 router.get("/:id",employeeController.getEmployeeByID);
 router.post("/",employeeController.createNewEmployee);
 

 module.exports = router;