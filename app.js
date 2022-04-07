//import
const express = require ('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


const employeeRouter = require("./src/routes/employeerouter")

app.use("/api/v1/employees",employeeRouter)
app.use("/api/v1/employees/1",employeeRouter)

//navigation
app.get("",(req,res)=>{
  res.send('hello world');
})


//port
const port = process.env.PORT ||  3000;

app.listen(port,()=>{
    console.log(`app listening in ${port}`)

})

