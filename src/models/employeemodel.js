var db = require("../config/db");

var Employee = (employee) =>{
    this.firstname = employee.firstname,
    this.lastname = employee.lastname
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
Employee.createNewEmployee =(result)=>{
    console.log('created new employee')
}


module.exports = Employee;