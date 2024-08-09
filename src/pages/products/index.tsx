import ProductsTemplate from "@/components/templates/ProductsTemplate";
import { Product } from "@/models/product";

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: "$10",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1",
    description: "Description of product 1",
  },
  {
    id: "2",
    name: "Product 2",
    price: "$20",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1",
    description: "Description of product 2",
  },
  {
    id: "4",
    name: "Product 4",
    price: "$20",
    description: "Description of product 4",
  },
  {
    id: "5",
    name: "Product 5",
    price: "$20",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1",
    description: "Description of product 5",
  },
  {
    id: "6",
    name: "Product 6",
    price: "$20",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1",
    description: "Description of product 6",
  },
  {
    id: "7",
    name: "Phuoc",
    price: "500k",
    image:
      "https://blueprint.cyberlogitec.com.vn/upload/PROFILE_PICTURES/phuocluong/croped_1708525688150-0,30,1250,1280-0.14-.png",
    description: "Ngon bo re",
    isBestSeller: true  },
  {
    id: "8",
    name: "Product 8",
    price: "$20",
    image:
      "https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1",
    description: "Description of product 8",
  },
  {
    id: "3",
    name: "Iphone",
    price: "$1000",
    image:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
    description: "Description of iphone",
  },
];

export default function ProductsPage() {
  return (
    <ProductsTemplate bestSellerProduct={sampleProducts[5]} products={sampleProducts}></ProductsTemplate>
  );
}
