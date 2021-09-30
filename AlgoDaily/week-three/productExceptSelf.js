const testArr = [1, 2, 3, 4, 5, 6];

const productExceptSelf = (arr) => {
  const products = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    products.push(product);
    product = product * arr[i];
  }

  product = 1;

  for (let i = arr.length - 1; i >= -0; i--) {
    products[i] = products[i] * product;
    product = product * arr[i];
  }
  return products;
};
