import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500 p-5">Products Page</h1>
      <Button>Test</Button>
      <Input placeholder="Enter text" />
    </div>
  );
};

export default ProductsPage;
