import { Typography } from "@/components/atoms";

const { Text } = Typography;

export default function FooterLogo() {
  return (
    <div className="mb-6 md:mb-0 flex flex-col">
      <Text className="text-lg text-white font-semibold">FCM Shop</Text>
      <Text className="text-white">© 2024 OM-FCM. All rights reserved.</Text>
    </div>
  );
}
