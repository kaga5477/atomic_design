import React from "react";
import { Button, Card, Image, ShoppingCartOutlined, Typography } from "@/components/atoms";
import { Product } from "@/models/product";

const { Meta } = Card;
const { Text, Title } = Typography;

type Prop = {
  product:Product
  onClick?: () => void;
};

export default function ProductItem({ product, onClick }: Prop) {
  return (
    <Card
      hoverable
      cover={
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            className="m-2"
            height={200}
            alt={product.name}
            src={product.image}
            fallback="https://via.placeholder.com/150"
          />
        </div>
      }
      actions={[
        <div className="flex justify-end w-full">
          <Button className="mr-5" type="primary" onClick={onClick} icon={<ShoppingCartOutlined />}>
            Add to Cart
          </Button>
        </div>,
      ]}
    >
      <Meta
        title={<Title level={4}>{product.name}</Title>}
        description={<Text strong>{product.price}</Text>}
      />
      <Text type="secondary">{product.description}</Text>
    </Card>
  );
}
