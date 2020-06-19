const bcrypt = require('bcrypt');

(async () => {
   
    const passwordIsvalid = await bcrypt.compare(process.argv[2], '$2b$10$Sc0LaZ/oiApYzRYi888UUub8uYFEosa3HLaZCRZ/Tai5ClQ3JMYVS');

    console.log(passwordIsvalid)
})()
