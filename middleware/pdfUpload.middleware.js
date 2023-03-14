const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination : function(req,file,cb){
      cb(null,"./uploads/pdfs");
    },
    filename : function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});

const fileFilter = (req,file,cb) => {
    const validExts = [".pdf",".docs"];
    
    if(!validExts.includes(path.extname(file.originalname)) && filetypes.includes(file.mimetype)){
        return cb (new Error("Only .pdf .docs file format allowed"));
    }

    const fileSize = parseInt(req.headers["content-length"]);
    if(fileSize > (5 * 1048576)){
        return cb ( new Error("maximum file size allowed 5MB"));
    }
    cb(null,true);
}

let upload = multer({
    storage : storage,
    fileFilter : fileFilter
})


 module.exports = upload.single("pdf");