import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})

const upload = multer({
    storage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|JPEG|PNG)$/)) {
            return cb(Error('and only images allowed'))
        }
        cb(null, true)
    },
})

export default upload;