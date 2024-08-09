import {
  Button,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@/components/atoms";

export default function UserMenu() {
  return (
    <div className="flex items-center">
      <Button type="text" icon={<UserOutlined />} className="mr-2">
        Profile
      </Button>
      <Button type="text" icon={<ShoppingCartOutlined />} className="mr-2">
        My Cart
      </Button>
      <Button type="text" icon={<LogoutOutlined />}>
        Logout
      </Button>
    </div>
  );
}
