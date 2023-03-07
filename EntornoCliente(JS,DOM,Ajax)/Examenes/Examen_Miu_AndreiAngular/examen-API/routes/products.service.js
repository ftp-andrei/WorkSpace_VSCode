import { createClient } from "redis";
import { v4 as uuidv4 } from "uuid";

const client = createClient({
  url: "redis://myTester:pass@localhost:5000",
});

await client.connect();

export async function getproducts() {
  const data = await client.get("products");
  return JSON.parse(data ?? "[]");
}

export async function getproductByID(id) {
  const products = await getproducts();
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return products[i];
    }
  }
  return null;
}

export async function insertproduct(product) {
  const products = await getproducts();
  if (products === null || products === undefined) {
    products = [];
  }
  product.id = uuidv4();
  products.push(product);
  await client.set("products", JSON.stringify(products));
  return product;
}

export async function deleteproduct(id) {
  const products = await getproducts();
  const newproducts = products.filter(function (value) {
    return value.id !== id;
  });

  if (products.length != newproducts.length) {
    await client.set("products", JSON.stringify(newproducts));
    return true;
  }
  return false;
}

export async function modifyproduct(product) {
  const products = await getproducts();
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === product.id) {
      products[i] = product;
      await client.set("products", JSON.stringify(products));
      return true;
    }
  }
  return false;
}
