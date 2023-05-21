const express = require("express");

const app = express();

app.use(function(req, res) {
    res.end("anasayfa");
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});



// nodemon`a neden ihtiyac duyariz?
// Degisikliklerin otomatik oalrak algilanmasi icin nodemon kurulumu yapilir.
// npm i nodemon@2.0.19 --save-dev  (devDependicies kisminda nodemon kurulmus olur)
// npm i nodemon@2.0.19 
// devDependencies deki paketler projenin ihtiyac duydugu paketller degildir.Proje gelistirilirken bize yardimci olacak araclardir
// bundan sonra nodemon diyerek calistiririz
// node => bir komuttur 
// nodemon => bir kutuphanedir (npx nodemon  =>  kutuphane oldugu icin npx dedik)
