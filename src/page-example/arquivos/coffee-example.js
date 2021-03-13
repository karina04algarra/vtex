(function() {
  var foo;

  foo = (function(_this) {
    return function() {
      return 1;
    };
  })(this);

}).call(this);
