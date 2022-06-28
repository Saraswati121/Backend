const express= require("express")
const bodyParser = require('body-parser')
const { validate, ValidationError, Joi } = require('express-validation')
const app= express()

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json())

const MovieValidation = {
    body: Joi.object({
        id:Joi.number().required(),
        Name:Joi. string().required(),
        Rating:Joi. number().required(),
        Description:Joi. string().required(),
        Genre:Joi. string().required(),
        Cast:Joi. array().required()
    }),
  }

  app.get("/",(req,res)=>{
    res.send("this is homepage")
  })

  app.post('/valid', validate(MovieValidation, {}, {}), (req, res) => {
    res.send(req.body)
  })
app.listen(8080,()=>{
    console.log("started")
})