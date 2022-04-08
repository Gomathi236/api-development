const Employee = require("../models/employeemodel");



//get all employees list api
exports.getEmployeeList = (req,res) =>{
    Employee.getAllEmployees((err,employees)=>{
        console.log("employee list");
        if(err)
        res.send('err');
        console.log('Employees',employees)
        res.send(employees);

    })
    
}
//get employee by id api
exports.getEmployeeByID= (req,res) =>{
   Employee.getEmployeeByID(req.params.id, (err,employees)=>{
    if(err)
    res.send('err');
    console.log('Employees',employees)
    res.send(employees);


   })    
}
//create new employee api
exports.createNewEmployee = (req,res) =>{
    const employeeReqData = new Employee(req.body);
    console.log('req data',employeeReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success:false, message : 'fill all fields'})
      }else{
          console.log('valid data ');
         
          Employee.createNewEmployee(employeeReqData ,(err,employee)=>{
              if(err)
              res.send(err);
              res.json({status:true, message:' Employee created  ', data:employee.insertId});

          })
      }
}

//update employee api
exports.updateEmployee = (req,res)=>{
    const employeeReqData = new Employee(req.body);
    console.log('req data update',employeeReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success:false, message : 'fill all fields'})
      }else{
          console.log('valid data ');
         
          Employee.updateEmployee(req.params.id,employeeReqData ,(err,employee)=>{
              if(err)
              res.send(err);
              res.json({status:true, message:' Employee updated  ', data:employee.insertId});

          })
      }

}
//delete employee api
exports.deleteEmployee= (req,res) =>{
    Employee.deleteEmployee(req.params.id, (err,employees)=>{
     if(err)
     res.send('err');
     console.log('Employee Deleted',employees)
     res.send(employees);
     
    })    
 }