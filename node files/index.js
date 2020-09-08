const mongoose = require('mongoose')
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
mongoose.connect('mongodb://localhost/assignment4')
	.then(()=>console.log('connected!!'))
	.catch(err=>console.error('not connected',err))
const statSchema = new mongoose.Schema({
  FIPS: String,
  Admin2: String,
  Province_State: String,
  Country_Region: String,
  Last_Update: String,
  Lat: String,
  Long_: String,
  Confirmed: String,
  Deaths: String,
  Recovered: String,
  Active: String,
  Combined_Key: String,
  Incidence_Rate: String,

});
const Stat = mongoose.model('Stat',statSchema)

app.get('/stats',async(req,res)=>{
  const data = await Stat.find()
  res.send(data)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));