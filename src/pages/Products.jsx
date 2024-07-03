import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$199",
    image: "/images/headphones.jpg",
  },
];

const Products = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-lg font-semibold">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button as={Link} to={`/product/${product.id}`} variant="primary" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;