import { Menu } from "@/components/molecules";

export default function HeaderMenu() {
  return (
    <Menu mode="horizontal" className="flex-1 ml-8">
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="services">Services</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>
    </Menu>
  );
}
