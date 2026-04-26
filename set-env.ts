const { writeFileSync, existsSync } = require('fs');
const { resolve } = require('path');
const dotenv = require('dotenv');

// Get the environment name from the first argument (dev or prod)
const envName = process.argv[2] || 'dev';
const envFilePath = resolve(__dirname, `.env.${envName}`);

if (existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
} else {
  console.error(`[set-env] Error: .env file not found at ${envFilePath}`);
  process.exit(1);
}

const environmentFile = `export const environment = {
  production: ${process.env['PRODUCTION'] === 'true'},
  apiUrl: '${process.env['API_URL'] || 'http://localhost:8000/api/'}',
};
`;

const targetPath = envName === 'prod' 
  ? './src/environments/environment.prod.ts' 
  : './src/environments/environment.ts';

writeFileSync(targetPath, environmentFile);
console.log(`[set-env] Successfully generated ${targetPath} using ${envName} environment.`);
