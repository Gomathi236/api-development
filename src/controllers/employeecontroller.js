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
exports.getEmployeeByID= (req,res) =>{
   Employee.getEmployeeByID(req.params.id, (err,employees)=>{
    if(err)
    res.send('err');
    console.log('Employees',employees)
    res.send(employees);


   })    
}

exports.createNewEmployee = (req,res) =>{
    console.log("Create new employee")
}