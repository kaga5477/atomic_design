import { Layout } from "@/components/atoms";
import HeaderLogo from "@/components/molecules/HeaderLogo";
import HeaderMenu from "@/components/molecules/HeaderMenu";
import UserMenu from "@/components/molecules/UserMenu";

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className="flex items-center justify-between bg-white shadow-md sticky top-0 z-50">
      <HeaderLogo></HeaderLogo>
      <HeaderMenu></HeaderMenu>
      <UserMenu></UserMenu>
    </Header>
  );
}
