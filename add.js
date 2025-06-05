if (process.argv.length !== 4) {
  console.log('Usage: node add.js <num1> <num2>');
  process.exit(1);
}
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
if (isNaN(a) || isNaN(b)) {
  console.error('Both arguments must be numbers.');
  process.exit(1);
}
console.log(a + b);

