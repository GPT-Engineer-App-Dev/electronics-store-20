import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const sampleProducts = [
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

const Index = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to ElectroShop</h1>
      <Button as={Link} to="/products" variant="primary" size="lg">
        Shop Now
      </Button>
    </div>
  </section>
);

const FeaturedProducts = () => (
  <section className="container mx-auto py-8">
    <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
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
            <Button variant="secondary" className="w-full">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </section>
);

export default Index;