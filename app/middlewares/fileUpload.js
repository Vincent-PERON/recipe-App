const multer = require("multer");

// Multer: Set Storage Engine
 const storage = multer.diskStorage({
 destination: function (req, file, cb) {
 cb(null, "public/uploads/images");
},

// Multer: Set file name on upload folder
 filename: function (req, file, cb) {
 const imgName = file.originalname;
//  cb(null, imgName + "__" + Date.now()+ ".jpg");
 cb(null, imgName);
 },
});

 const upload = multer({
 storage: storage,
  });

module.exports = upload;