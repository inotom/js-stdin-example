process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = '';

process.stdin.on('data', function(chunk) {
  input += chunk;
});

process.stdin.on('end', function() {

  var lines = input.trim().split('\n');

  if (lines.length > 0) {
    var max = lines[0];
    for (var i = 0; i < max; i++) {
      var n = i + 1;
      if ((n % 3 === 0) && (n % 5 === 0)) {
        console.log('Fizz Buzz');
      } else if (n % 3 === 0) {
        console.log('Fizz');
      } else if (n % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(n);
      }
    }
  }
});
