import { config } from 'dotenv';

jest.setTimeout(30000);
config({ path: './src/config/test.env' });
