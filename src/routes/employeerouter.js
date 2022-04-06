const express =require('express');
const router = express.Router();


 const employeeRouter = require("../controllers/employeecontroller");

 router.get("/", employeeRouter.getEmployeeList);

 module.exports = router;