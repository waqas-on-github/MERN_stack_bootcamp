let os = require('os')

console.log(os.arch());

  console.log(os.availableParallelism())
//   console.log(os.constants);

console.log(os.cpus());
console.log(os.devNull);
console.log(os.endianness());

const freemem = os.freemem() / 1000000000 

console.log(freemem +"GB")

console.log(os.homedir());
console.log(os.loadavg());
console.log(os.hostname());
console.log(os.machine());
console.log('----------------------------------------------------');
// console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.version());


