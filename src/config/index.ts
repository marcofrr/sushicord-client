type Config = {
  baseUrl: string;
  baseUrlWS: string;
};

const dev: string = "http://localhost:5000/graphql";
const prod: string = "<not yet>";
const devWS: string = "ws://localhost:5000/graphql";
const prodWS: string = "<not yet>";
const config: Config = {
  baseUrl: process.env.NODE_ENV === "development" ? dev : prod,
  baseUrlWS: process.env.NODE_ENV === "development" ? devWS : prodWS,
};
export default config;
