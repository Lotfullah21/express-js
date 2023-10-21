const os = require("os");

// user information
const user = os.userInfo();
console.log(user);

// up time
const upTime = os.uptime();
console.log(`Your system had been up ${upTime} seconds`);
console.log(`Your system had been up ${upTime / 60} minutes`);
console.log(`Your system had been up ${upTime / 3600} hours`);

// os object

const osInfo = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(osInfo);

let os = require("os");
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());
