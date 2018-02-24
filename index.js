process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', chunk => input += chunk);

process.stdin.on('end', () => {

  const lines = input.trim().split('\n');

  if (lines.length > 0) {
    const max = parseInt(lines[0], 10);

    for (let i = 0; i < max; i++) {
      const n = i + 1;

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
