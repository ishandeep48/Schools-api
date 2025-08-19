const express = require('express')
const router = express.Router();
const getDistance = require('../helper/getDistance')
const db = require('../Database/db')
router.get('/listSchools',async(req,res)=>{
    
    try{

        const{latitude,longitude} = req.query;
        // console.log(latitude,longitude)
        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'please enter both latitude and longitude' });
        }
        const lat =parseFloat(latitude);
        const lng = parseFloat(longitude);

        if (isNaN(lat) || isNaN(lng)) {
            return res.status(400).json({ error: 'Invalid coordinates' });
        }

        const [schools] = await db.query('SELECT * FROM schools');

        const sortedWay = schools.map((school)=>{
            const dist = getDistance(lat,lng,school.latitude,school.longitude);
            return {school,dist};
        }).sort((a,b)=>a.dist-b.dist).map((entry)=>entry.school);
        res.json(sortedWay);

    }catch(e){
        console.error(e);
        res.status(500).json({error:"Some error on our side"})
    }

});
module.exports = router;