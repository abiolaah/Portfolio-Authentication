/*Oluwapelumi Ajuwon-301254275, Feb 4th, 2023*/
let  express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/',indexController.displayHomePage );

router.get('/home', indexController.displayHomePage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);

/*Authentication Route*/

/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post('/login', indexController.processLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
