import React from "react";
import { Row, Col, Typography } from "@/components/atoms";
import { Product } from "@/models/product";
import ProductItem from "@/components/molecules/ProductItem";

type Props = {
  bestSellerProduct: Product;
  products: Product[];
  onProductClick?: (product: Product) => void;
};

export default function ProductsGrid({
  products,
  bestSellerProduct,
  onProductClick,
}: Props) {
  return (
    <div>
      <ProductItem
        isBestSeller={true}
        imageWidth={300}
        product={bestSellerProduct}
      ></ProductItem>
      <br></br>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductItem
              product={product}
              isBestSeller={product.isBestSeller}
              onClick={() => onProductClick && onProductClick(product)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
