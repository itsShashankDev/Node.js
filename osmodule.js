const os = require('os'); // as os was predifined module so no need to import it
console.log(os.freemem()) // ampount of free memory left in pc
console.log(os.homedir()) // returns home directory
console.log(os.hostname()) // return pc hostname
console.log(os.release()) // release of os
console.log(os.userInfo())
console.log(os.uptime()) // num of seconds return
console.log(os.tmpdir()) //Returns the operating system's default directory for temporary files
console.log(os.cpus()) // info about cpu
console.log(os.networkInterfaces()) // info about network it is connected