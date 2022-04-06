//import
const express = require ('express');
const app = express();




const employeeRouter = require("./src/routes/employeerouter")

app.use("/api/v1/employees",employeeRouter)

//navigation
app.get("",(req,res)=>{
  res.send('hello world');
})


//port
const port = process.env.PORT ||  3000;

app.listen(port,()=>{
    console.log(`app listening in ${port}`)

})

