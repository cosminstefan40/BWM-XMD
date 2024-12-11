const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xCH7kpYlVXDXjBuyjStD11HgIEiELAJKDY5b9Pqd3V52HOmZ63VC5rr6y19n4HpMAMzVADeu+gpLiGHN2WvCkR6AGrimNEgQgiyCHoAWF00mvBc5cVX75KcL43RusNtAY+asbsHM8UVUqsQBqb9uIZXEVQVkGGwz8ABnJn0L8oqIB1w8tu5i4MqIz0bU5GdrpfThbd1yENQ7NJT8/gekOEmGKSDMsU5YjCbIYaB2L6Pfr+zNoxPN51Tnnmv+KB0No4pUW7+DyYkqVqYljyFO+H6vjwPfpa2Jl2aWkNULnzhZe38W50SVMrDl3nUsenwHDnu2VfGlpr6UGf4YSgaBIhwjFvvq27bwmzIluzbOvZgt7XkOMepc0muFj9XV2Xhg0PXuHPt8rr+nvEjzELbGlqQsceOmP30BQGPYS7weJtVVRBOtHCmRNkm/LNP/1K3KGfWTn8H90ns65fjBdpPnjxVtV+iHabldNKs+hABdexh4fM90gKpZNvfo/+5mjofCEd97va779g3RM6wySdogZ72VGzte2czLu4T1Xb/KIPeUX/xHJQSp3Mx/l0507oQoit4apuVXNojKM4OKfjFrls19narrXD9jioLokk7OUp30anAUlmZfzWXZYtw6kGozBOmBlJ2VS1kuf7jw6omUSgJ19FQFGCGaeQ44Lc9zRJBDCqXRRSxO/ygtOxO2EKqTJvMtAuHWvSol3BsFuoFtqh09o7wzZpdI3JrvkMRFDSIkSMoWiMGS9os0CMwQQx0Pv7pwgIOvOHcbdyqiyCGFPGPVKVWQGjT1c/D2EYFhXhbkPC/m2BKOhJX9uIc0wSdtOxIpCGKa5RP4WcgV4MM4auIohQjUN0wwMRq+ZPbP263TwZRjmUt1pnYic3ymlBHle0KGwrnVB+ijRJetLkOHrqylL8FCMlDFQYRkFsABHgj565vfmthU6eyQeCVYqiXb5827gb086t5XS1evTFQ3tEUQR6nFZIBAEMD1W5LQ6I/AE3l49CthyHSYszppSL1J3N5ODiHyrpF9yHp6D3/jWn+kV0w9saa31ntttABPk9gvj+c0nXpa4sG4rRU6S/2I/TTUdYlj8I4kAEBN4uA0gKgvNbmQ8PbgAR4hBnDPRAf9kyLm1vNFzOvDYtbNucJGY/McGXZ5/hf4RrR95qYi90pkF00YKmc6r3nnx8Hc9Hx2w4oKoydY1+PWaH4vlfQEAPpGP3CCXYXEJhI9svU2GPbIu5TmNjTz+vdBrJSlIqK8z9c4wzSymExrMqZmqJdom7c32EJUeBVcvnk87WgXpfgub6+VbtkZ1fi6kLX3DJca01QvhiWSpvZsl8kIyteuqq+GKeddtEL2my76RsqbNz8lZYUqjBdZjgVRzFw2zqtiWPKIusyU/K6xZFnXuxz7GQfYxjfG+Y94+kxRjdp9uHCf/l1Vfmpav4C8THuPxNrix/qgTt836lr2zCBLtbsbkmL2F2bs6w3Jgdw8BevaZnfToD1+tPEZQZ5HFBc9ADLA8gEEEGGTe/enaLc8Q4zEvQk3VVNRRZ1TvXfwCb5pOm6QcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ANONIM",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "0770811929",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

