const express = require("express");
const router = express.Router();
const db= require('../Database/db')

router.post("/addSchool", async (req, res) => {
    try
  {const { name, address, latitude, longitude } = req.body;
  // console.log(req.body)
  // console.log(name, address, latitude, longitude);
  // check if all are filled
  if (!name || !address || latitude === undefined || longitude === undefined) {
    return res.status(400).json({ error: "Empty data fields" });
  }
  if (typeof latitude !== "number" || latitude < -90 || latitude > 90) {
    return res.status(400).json({ error: "Invalid latitude" });
  }
  if (typeof longitude !== "number" || longitude < -180 || longitude > 180) {
    return res.status(400).json({ error: "Invalid longitude" });
  }
  //just for safety
  if(name.includes('--') || address.includes('--')){
    return res.status(400).json({error:"do no enter -- in any data field"})
  }

  const [result] = await db.query('INSERT INTO schools (name,address,latitude,longitude) VALUES (?,?,?,?)', [name,address,latitude,longitude]);
  res.json({message:'School added successfully' , schoolID: result.insertId});
}catch(e){
    console.error(e);
    return res.status(500).json({error:"Some error on our side"});
}

});
module.exports = router;
