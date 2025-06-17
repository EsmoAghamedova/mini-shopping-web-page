type Product = {
  name: string;
  description: string;
  price: number;
};

function ProductItem({ product }: { product: Product }) {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>${product.price.toFixed(2)}</span>
    </div>
  );
}

export default ProductItem;