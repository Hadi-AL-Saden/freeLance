import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
export { db };



// import { PrismaClient } from '@prisma/client';
// import { defaultConfig } from 'next/dist/server/config-shared';
// const prismaClaientSingle = ()=>{
//     return new PrismaClient
// }

// const globalForPrisma = globalThis;

// const prsima = globalForPrisma ?? prismaClaientSingle()

// export default prsima;