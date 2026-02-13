var express = require('express');
var router = express.Router();

const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
/* GET home page. */
app.use(express.static("public"));

router.get('/', aysnc function(req, res, next) {
  const rndmayah= Math.floor((Math.random()*6,236)+1)
   const response = await axios.get(
      `https://api.alquran.cloud/v1/ayah/${randomAyah}/editions/quran-uthmani,en.sahih`
    );
    const data=response.data.data
    const arabic=data[0]
    const eng=data[1]

    res.json({
      surah: arabic.surah.englishName,
      surahArabic: arabic.surah.name,
      ayahNumber: arabic.numberInSurah,
      arabicText: arabic.text,
      englishText: english.text,
    })

  res.render('index');
});

module.exports = router;
