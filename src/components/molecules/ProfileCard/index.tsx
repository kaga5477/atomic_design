import React from "react";
import { Card, Image, EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined, Avatar, Typography } from "@/components/atoms";
import { User } from "@/models/user";

const { Meta } = Card;
const { Text } = Typography;

type Prop = {
  user: User
};

export default function ProfileCard({ user }: Prop) {
  return (
    <Card
      className="w-96"
      cover={
        <Image
          alt="cover-photo"
          src="https://iwritingsolutions.com/wp-content/uploads/2022/05/starry-sky-night-dark-wallpaper-preview-1.jpg"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar size="large" src={user.avatar || 'https://via.placeholder.com/150'} icon={!user.avatar && <UserOutlined />} />}
        title={user.name}
        description={user.email}
      />
      <div className="mt-5">
        <Text type="secondary">{user.bio}</Text>
      </div>
    </Card>
  );
}
