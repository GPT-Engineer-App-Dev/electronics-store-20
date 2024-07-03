import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    image: "/images/smartphone.jpg",
    description: "A high-end smartphone with a sleek design and powerful features.",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "/images/laptop.jpg",
    description: "A powerful laptop with a high-resolution display and fast performance.",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$199",
    image: "/images/headphones.jpg",
    description: "Noise-cancelling headphones with superior sound quality.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
        </CardHeader>
        <CardContent>
          <CardTitle>{product.name}</CardTitle>
          <p className="text-lg font-semibold">{product.price}</p>
          <p className="mt-4">{product.description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" className="w-full">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;