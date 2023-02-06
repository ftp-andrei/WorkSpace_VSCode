import { createClient } from "redis";

const client = createClient({
  url: "redis://default:123pass@localhost:5000",
});

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

await client.set("key", "value");
const value = await client.get("key");
console.log(value);
await client.disconnect();
