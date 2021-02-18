const express = require('express');
const fetch = require('node-fetch');
const WEATHER_URL = 'http://www.meteoromania.ro/wp-json/meteoapi/v2/starea-vremii';
const app = express();

app.get('/weather', async (req, res) => {
    try {
        const meteoResp = await fetch(WEATHER_URL);
        const responseContent = await meteoResp.json();
        if(req.query.city) {
            const cityRecord = responseContent.features.find(e => e.properties.nume === req.query.city.toUpperCase())
            if(cityRecord) {
                res.status(200).json(cityRecord)
            }
            else {
                res.status(404).json({message:'not found'})
            }
        }
        else {
        res.status(200).json(responseContent);  
        }
    } catch (err) {
        console.warn(err);
        res.status(500).json({message:"Server error"})
    }
})

app.listen(8082);