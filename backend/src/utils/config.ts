require(".pnpm/dotenv@16.3.1/node_modules/dotenv").config();

const PORT = process.env.PORT;
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

const config = {
  PORT,
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  MONGODB_URI,
};

export default config;
