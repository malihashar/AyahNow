var express = require('express');
var router = express.Router();

const axios = require("axios");

router.get("/",  function(req,res){
  res.render('index')
})
router.get('/random-ayah', async function(req, res, next) {
  const randomAyah= Math.floor((Math.random()*6236)+1)
   const response = await axios.get(
      `https://api.alquran.cloud/v1/ayah/${randomAyah}/editions/quran-uthmani,en.sahih`
    );
    const data=response.data.data
    const arabic=data[0]
    const english=data[1]

    res.json({
      surah: arabic.surah.englishName,
      surahArabic: arabic.surah.name,
      ayahNumber: arabic.numberInSurah,
      arabicText: arabic.text,
      englishText: english.text,
    })

 
});

module.exports = router;
