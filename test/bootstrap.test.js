var Sails = require('sails'),
  sails;

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  Sails.lift({
    log: {
      level: 'error'
    },
    // configuration for testing purposes
    models: {
      connection: 'localDiskDb',
      migrate: 'drop'
    }
  }, function(err, server) {
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    // include factories
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  console.log();
  Sails.lower(done);
});
