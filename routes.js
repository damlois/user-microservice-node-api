var Router = require('restify-router').Router;
const jwt = require('jsonwebtoken');
const config = require('./config');
var router = new  Router();
 
const usersController = require('./controllers');

isAuthenticated = (req, res, next) => {
    var token = req.query.token
    if (token) {
      jwt.verify(token, config.secret, function(err, decoded) {       
            if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.' });       
            } 
            else {
            req.decoded = decoded;         
            next();
        }
      });
    } 
    else {
      return res.send({ 
          success: false, 
          message: 'No token provided.' 
      });
    }
}

router.get('/', usersController.base_endpoint);
router.post('/signup', usersController.user_signup_post);
router.get('/signin', usersController.user_signin_get);
router.get('/authenticate', usersController.authenticate_get);
router.get('/users', isAuthenticated, usersController.get_all_users);
router.get('/user_id/:id', isAuthenticated, usersController.get_by_id);
router.get('/user_email/:email', isAuthenticated, usersController.get_by_email);
router.patch('/update/:id', isAuthenticated, usersController.update_user);
router.del('/delete/:id', isAuthenticated, usersController.delete_by_id);
router.patch('/update_status/:email', isAuthenticated, usersController.update_status);

module.exports = router;