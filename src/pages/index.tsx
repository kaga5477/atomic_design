import ProductItem from "@/components/organisms/ProductItem";
import { Product } from "@/models/product";
import { User } from "@/models/user";
import ProfileCard from "@/components/organisms/ProfileCard";
import NotificationItem from "@/components/organisms/NotificationItem";
import AppHeader from "@/components/organisms/Header";
import AppFooter from "@/components/organisms/Footer";

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

export default function Home() {
  return (
    <>
      <AppHeader></AppHeader>
      <div
        className={
          "flex min-h-screen flex-col items-center justify-between p-24"
        }
      >
        <ProductItem product={product}></ProductItem>
        <ProfileCard user={user} />
        <NotificationItem notification={notification} />
      </div>
      <AppFooter></AppFooter>
    </>
  );
}
