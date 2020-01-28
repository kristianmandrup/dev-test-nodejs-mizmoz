import asyncRedis from "async-redis";
export const redisClient = asyncRedis.createClient();

redisClient.on("error", (err: any) => {
  console.error(`Error ${err}`);
});

