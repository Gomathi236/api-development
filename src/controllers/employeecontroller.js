const Employee = require("../models/employeemodel");




exports.getEmployeeList = (req,res) =>{
    Employee.getAllEmployees((err,employees)=>{
        console.log("employee list");
        if(err)
        res.send('err');
        console.log('Employees',employees)
        res.send(employees);

    })
    
}