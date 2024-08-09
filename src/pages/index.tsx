import ProductItem from "@/components/molecules/ProductItem";
import { Product } from "@/models/product";
import { User } from "@/models/user";
import ProfileCard from "@/components/molecules/ProfileCard";
import NotificationItem from "@/components/molecules/NotificationItem";
import AppHeader from "@/components/organisms/Header";
import AppFooter from "@/components/organisms/Footer";
import ProductsGrid from "@/components/organisms/ProductsGrid";

const product: Product = {
  id: "1",
  name: "Product Name",
  image:
    "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1",
  price: "$99.99",
  description: "This is a brief description of the product.",
};

const user: User = {
  id: "1",
  name: "John Doe",
  avatar:
    "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1",
  bio: "Software Engineer at XYZ Company",
  email: "john.doe@example.com",
};

const notification = {
  title: "New Message",
  avatar:
    "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1",
  message: "Wanna kidnap Phuoc and take him home?",
  time: "5 minutes ago",
};

const sampleProducts: Product[] = [
  { id: '1', name: "Product 1", price: "$10", image: "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1", description: "Description of product 1" },
  { id: '2', name: "Product 2", price: "$20", image: "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1", description: "Description of product 2" },
  { id: '4', name: "Product 4", price: "$20", image: "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1", description: "Description of product 4" },
  { id: '5', name: "Product 5", price: "$20", image: "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1", description: "Description of product 5" },
  { id: '6', name: "Product 6", price: "$20", image: "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1", description: "Description of product 6" },
  { id: '7', name: "Phuoc", price: "50k", image: "https://blueprint.cyberlogitec.com.vn/upload/PROFILE_PICTURES/phuocluong/croped_1708525688150-0,30,1250,1280-0.14-.png", description: "Ngon bo re" },
  { id: '8', name: "Product 8", price: "$20", image: "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1", description: "Description of product 8" },
  { id: '3', name: "Iphone", price: "$1000", image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818", description: "Description of iphone" },

];

export default function Home() {
  const handleProductClick = (product: Product) => {
    console.log("Product clicked:", product);
  };
  return (
    <>
      <AppHeader></AppHeader>
      <div
        className={
          "flex min-h-screen flex-col items-center justify-between p-24"
        }
      >
        {/* <ProductItem product={product}></ProductItem> */}
        {/* <ProductsGrid products={sampleProducts} onProductClick={handleProductClick} /> */}
        <ProfileCard user={user} />
        <NotificationItem notification={notification} />
      </div>
      <AppFooter></AppFooter>
    </>
  );
}
