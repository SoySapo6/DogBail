"use strict";

const reset = '\x1b[0m';
const yellow = '\x1b[93m';
const red = '\x1b[31m';
const bold = '\x1b[1m';
const white = '\x1b[97m';
const cyan = '\x1b[96m';
const readline = require('readline');

console.clear();

const frames = [
`        ${yellow}      ,w.
        ,YWMMw  ,M  ,
      _.---.._   __..---._.'MMMMMw
  _.-""        '''           YP"WMMMMMb${reset}
`,

`        ${yellow}      ,w.
        ,YWMMw  ,M  ,
      _.---.._   __..---._.'MMMMMw
  _.-""        '''           YP"WMMMMMb
        ${red}ROAAARR!!${reset}
`,

`        ${yellow}      ,w.
        ,YWMMw  ,M  ,
      _.---.._   __..---._.'MMMMMw
  _.-""        '''           YP"WMMMMMb
          ${red}ROAAARR!!${reset}
`,

`        ${yellow}      ,w.
        ,YWMMw  ,M  ,
      _.---.._   __..---._.'MMMMMw
  _.-""        '''           YP"WMMMMMb
    ${red}ROAAARR!!${reset}
`
];

async function animateLion(repeat = 5, delay = 400) {
    for (let r = 0; r < repeat; r++) {
        for (let frame of frames) {
            console.clear();
            console.log(frame);
            await new Promise(res => setTimeout(res, delay));
        }
    }
    console.clear();
    console.log(`${bold}${yellow}🐾 El León de Ado ha rugido!${reset}\n`);
}

async function main() {
    console.log(`${cyan}${bold}🔰 INICIANDO ADONIX BAILEYS 🔥${reset}`);
    await animateLion(6, 300);
    console.log(`${white}Listo para arrancar el bot...${reset}`);
}

main();