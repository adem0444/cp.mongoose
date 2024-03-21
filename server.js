const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://adem:<password>@cluster0.vdd409e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>("database connected")).catch((err)=> {if (err) throw err})

const PORT = 5000
app.listen(PORT , ()=> console.log("my server is running on port :",PORT))