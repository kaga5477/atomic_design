import { Layout } from "@/components/atoms";
import FooterLogo from "@/components/molecules/FooterLogo";
import FooterMenu from "@/components/molecules/FooterMenu";
import SocialMedias from "@/components/molecules/SocialMedias";

const { Footer } = Layout;

export default function AppFooter() {
  return (
    <Footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <FooterLogo></FooterLogo>
          <FooterMenu></FooterMenu>
          <SocialMedias></SocialMedias>
        </div>
      </div>
    </Footer>
  );
}
