// this file isn't transpilled, so must use common JS and ES5

//Registerbabel to transpile before our tests run.
require ('babel-register')();

//Disable webpack fatures that Mocha doesn't understand.
require.extensions['.css'] = function() {};
