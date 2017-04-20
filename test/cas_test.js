var assert = require('assert');
var authCAS = require('../lib/auth-cas');

it('Host must be specified', function() {
  assert.throws( () => {
      new authCAS();
    }, /Host must be specified/
  );
  assert.throws( () => {
    new authCAS(undefined);
  }, /Host must be specified/);
});

it('CAS host must be specified', function() {
  assert.throws( () => {
    new authCAS('https://cashost.com')
  }, /CAS Host must be specified/)
});
