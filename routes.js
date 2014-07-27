var User = require('./models/user');

module.exports = function (app) {

  // app.get('/register', function (req, res) {
  //   res.render('register', { });
  // });

  // app.post('/register', function (req, res) {
  //   User.register(
  //     new User({ username: req.body.username }),
  //       req.body.password, function (err, user) {
  //         if (err) {
  //           return res.render('register', { user: user });
  //         }

  //         passport.authenticate('local')(req, res, function () {
  //           res.redirect('/');
  //         });
  //       });
  // });

  // app.get('/login', function (req, res) {
  //   res.render('login', { user: req.user });
  // });

  // // app.post('/login', function(req, res, next) {
  // //   passport.authenticate('local', function(err, user, info) {
  // //     if (err) { return next(err); }
  // //     if (!user) { return res.redirect('/login'); }
  // //     req.logIn(user, function(err) {
  // //       if (err) { return next(err); }
  // //       return res.redirect('/users/' + user.username);
  // //     });
  // //   })(req, res, next);
  // // });
  // app.post('/login',
  //     passport.authenticate('local', { successRedirect: '/',
  //       failureRedirect: '/login',
  //       failureFlash: true })
  // );
  // app.get('/logout', function (req, res) {
  //   req.logout();
  //   res.redirect('/');
  // });

  // app.get('/ping', function (req, res) {
  //   res.send("pong!", 200);
  // });

};
