import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@/components/atoms/Icons";  

export default function SocialMedias() {
  return (
    <div className="flex space-x-4">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookOutlined className="text-xl text-white hover:text-gray-400" />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterOutlined className="text-xl text-white hover:text-gray-400" />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramOutlined className="text-xl text-white hover:text-gray-400" />
    </a>
  </div>
  );
}
