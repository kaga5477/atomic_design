import { Avatar, Typography } from "@/components/atoms";

const { Text } = Typography;

export default function HeaderLogo() {
  return (
    <div className="flex items-center">
      <Avatar
        className="mr-4"
        src="https://www.lego.com/cdn/cs/set/assets/blta1c5c1a209cb4eaf/76919_alt1.jpg?fit=crop&quality=80&width=600&height=600&dpr=1"
      />
      <Text className="text-lg font-semibold">FCM Shop</Text>
    </div>
  );
}
