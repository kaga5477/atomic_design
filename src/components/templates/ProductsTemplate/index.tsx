import { Product } from "@/models/product";
import { Typography } from "@/components/atoms";
import SearchBox from "@/components/molecules/SearchBox";
import { Pagination } from "@/components/organisms";
import AppHeader from "@/components/organisms/Header";
import AppFooter from "@/components/organisms/Footer";
import ProductsGrid from "@/components/organisms/ProductsGrid";

type Prop = {
  bestSellerProduct: Product;
  products: Product[];
};

export default function ProductsTemplate({
  products,
  bestSellerProduct,
}: Prop) {
  const handleProductClick = (product: Product) => {
    console.log("Product clicked:", product);
  };
  return (
    <>
      <AppHeader></AppHeader>
      <div className={"flex flex-col justify-between p-24"}>
        <div className="flex justify-between items-center mb-5">
          <Typography.Text className="text-4xl text-white font-semibold mb-5">
            Products
          </Typography.Text>
          <SearchBox
            className={"w-96"}
            enterButton="Search"
            placeholder="Enter product name"
          ></SearchBox>
        </div>
        <ProductsGrid
          bestSellerProduct={bestSellerProduct}
          products={products}
          onProductClick={handleProductClick}
        />
        <Pagination
          className="mt-5 bg-white p-2 rounded-lg"
          align="center"
          pageSize={10}
          total={100}
        ></Pagination>
      </div>
      <AppFooter></AppFooter>
    </>
  );
}
