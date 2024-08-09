import { Product } from "@/models/product";
import AppHeader from "@/components/organisms/Header";
import AppFooter from "@/components/organisms/Footer";
import ProductsGrid from "@/components/organisms/ProductsGrid";
import { Typography } from "@/components/atoms";
import SearchBox from "@/components/molecules/SearchBox";

type Prop = {
  notis: any[];
};

export default function NotificationsTemplate({ notis }: Prop) {
  return (
    <>
      <AppHeader></AppHeader>
      <div className={"flex flex-col justify-between p-24"}></div>
      <AppFooter></AppFooter>
    </>
  );
}
