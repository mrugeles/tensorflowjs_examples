var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('image_classification', { title: 'Express' });
});

router.post('/', (req, res) => {
  var fileName = ''
  if (req.files) {
      const file = req.files.file
      fileName = file.name
      file.mv(`./public/images/${fileName}`, err => {
          if (err) {
              console.log(err)
          } else {
              console.log('uploaded successfully')
          }
      })
  } else {
    console.log('There are no files')
  }
  res.render('image_classification', { title: 'Test', image_name: `/images/${fileName}` });
})
module.exports = router;
