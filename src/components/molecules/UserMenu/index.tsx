import {
  Button,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@/components/atoms";

export default function UserMenu() {
  return (
    <div className="flex items-center">
      <Button type="text" icon={<UserOutlined />} className="mr-2">
        Profile
      </Button>
      <Button type="text" icon={<SettingOutlined />} className="mr-2">
        Settings
      </Button>
      <Button type="text" icon={<LogoutOutlined />}>
        Logout
      </Button>
    </div>
  );
}
