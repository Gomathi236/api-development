var db = require("../config/db");

var Employee = function(employee){
    this.first_name = employee.first_name,
    this.last_name = employee.last_name,
    this.email = employee.email,
    this.phone = employee.phone,
    this.organisation = employee.organisation,
    this.designation = employee.designation,
    this.salary = employee.salary
    // this.status = employee.status ? employee.status : 1,
    // this.created_at = new date ,
    // this.updated_at = new date
}


Employee.getAllEmployees = (result) =>{
    db.query ('select * from employees', (err,res)=>{
        if (err){
            console.log("err",err);
            result(null,err);
        }else{
            console.log('fetched ',res);
            result(null,res);
        }
    })
}
Employee.getEmployeeByID = (id,result) =>{
    db.query('select * from employees where id=?',id, (err,res)=>{
        if (err){
            console.log("err",err);
            result(null,err);
        }else{
            console.log('id fetched ',res);
            result(null,res);
        }

    })
}
Employee.createNewEmployee =(employeeReqData,result)=>{
   db.query ('INSERT INTO employees SET ?',employeeReqData,(err,res)=>{
       if(err){
           console.log('err',err);
           result(null,err);
       }else{
           console.log('Data created',res);
           result(null,res);
       }
   })
}

Employee.updateEmployee = (id,employeeReqData,result) =>{
    db.query("UPDATE employees SET first_name=?, last_name =?, email =?, phone =?, organisation =?, designation =?, salary =? WHERE id = ?",
    [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organisation,employeeReqData.designation,employeeReqData.salary,id],
    (err,res)=>{
        if(err){
            console.log('err',err);
            result(null,err);
        }else{
            console.log('Data updated ',res);
            result(null,res);
        }
    })
}
Employee.deleteEmployee =(id,result)=>{
    db.query ('DELETE FROM employees WHERE id=?',[id],(err,res)=>{
        if(err){
            console.log('err',err);
            result(null,err);
        }else{
            console.log('Data created',res);
            result(null,res);
        }
    })
 }


module.exports = Employee;