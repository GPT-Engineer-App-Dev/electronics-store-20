import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const sampleCartItems = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    image: "/images/smartphone.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "/images/laptop.jpg",
    quantity: 1,
  },
];

const Cart = () => {
  const totalPrice = sampleCartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-6">
        {sampleCartItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <p className="text-lg font-semibold">{item.price}</p>
              <p className="mt-2">Quantity: {item.quantity}</p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" className="w-full">
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <Button variant="primary" className="mt-4">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;