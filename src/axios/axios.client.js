import axios from "axios";
import { createClient } from "@redis/client";
import { promisify } from "util";

const DEFAULT_EXPIRATION = 3600;

// Initialize the Redis client
const redisClient = createClient({
  host: "localhost",
  port: 6379
});
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

console.log("redisClient", redisClient);

redisClient.on("connect", () => {
  console.log("Redis client connected");
});

redisClient.on("error", (error) => {
  console.error("Redis client error:", error);
});

redisClient.connect().catch((error) => {
  console.error("Error connecting to Redis:", error);
});

console.log("redisClient2", redisClient);

const getFromCache = async (key) => {
  try {
    console.log("getFromCache: Attempting to get data from cache");
    const result = await redisClient.get(key);
    console.log("getFromCache: Got data from cache:", result);
    return result;
  } catch (error) {
    console.error("getFromCache: Error:", error);
    throw error;
  }
};



const setToCache = async (key, value, expiration) => {
  try {
    console.log("setToCache: Attempting to set data to cache");
    const result = await redisClient.set(key, value, 'EX', expiration);
    console.log("setToCache: Data set to cache:", result);
    return result;
  } catch (error) {
    console.error("setToCache: Error:", error);
    throw error;
  }
};


const get = async (url) => {
  console.log("url", url);

  try {
    console.log("Checking Redis cache");
    const cachedData = await getFromCache(url);

    if (cachedData) {
      console.log("Serving from cache");
      return JSON.parse(cachedData);
    }
  } catch (error) {
    console.error("Error fetching data from Redis cache:", error);
  }

  console.log("Fetching from API");
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });

  try {
    console.log("Caching response data");
    await setToCache(url, JSON.stringify(response.data), DEFAULT_EXPIRATION);
  } catch (error) {
    console.error("Error caching data in Redis:", error);
  }

  return response.data;
};


export default { get };
export { redisClient };
