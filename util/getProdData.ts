const getProdData = async () => {
  const prodData = await (
    await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
      { method: "get" }
    )
  ).json();
  return prodData;
};

export default getProdData;
