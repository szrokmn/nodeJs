const express = require("express");

const app = express();

app.use("/blogs/:blogid/users/:username", function(req, res) {
    console.log(req.params.blogid);     // blogid istedik
    console.log(req.params.username);   // username istedik
    res.send("blog detay sayfası");
});

app.use("/blogs", function(req, res) {
    res.send("blog listesi");
});

app.use("/", function(req, res) {
    res.send("anasayfa");
});


app.listen(3000, function() {
    console.log("listening on port 3000");
});



// en ozel olan route en yukarda olmali
// "/blogs/:blogid/users/:username" degiskenler : ile baslar
