const express = require("express");

const app = express();

const path = require("path");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
// use() diyerek middlewaree kullaniyoruz
// express uzerinden static() methodu ile aliyoruz
// hangi klasoru erisime acalim => node_modules klasorunu disariya(erisime) acmis olduk
// libs derken aslinda node_modules klasorune takma isim vermis oluyoruz.Yani libs, node_modules`u temsil ediyor
// __dirname diyerek (related path) hata aliyorsak onune gecmis oluruz
// path.join(__dirname, "node_modules") => projenin ana dizini ile node_module`u birlestir
app.use("/static", express.static(path.join(__dirname, "public")));
// public klasorunu erisime actik ama kullanici static`i gormus olacak
// index.html de ( <img src="/static/images/1.jpeg" alt="">) static olarak gozukmektedir

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



// static dosyalarla nasil calisiyoruz(css-js-resim dosyasi)
// npm i bootstrap@5.2.0
// npm start ile calistiriyoruz
// 
