const express = require("express");

const app = express();

const path = require("path");

app.use("/blogs/:blogid", function(req, res) {
    console.log(__dirname);
    console.log(__filename);
    res.sendFile(path.join(__dirname, "views/users","blog-details.html"));
});

app.use("/blogs", function(req, res) {
    res.sendFile(path.join(__dirname, "views/users","blogs.html"));
});

app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views/users","index.html"));
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});


// views klasoru icerisinde html dosyalarimiz olacak
// sendFile() dosya geri dondurur
// global degisken => __dirname => suan da bulundugumuz klasor ismini verir
// global degisken => __filename => suan da bulundugumuz dosya ismini verir
// path kutuphanesi var ve kullanabilmek icin  tanimlamak gerek (const path = require("path"))
// path ile yollari birlestiriyoruz
// proje yolu ile views yolunu birlestirecegiz