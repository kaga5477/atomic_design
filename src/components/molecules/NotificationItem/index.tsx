import React from "react";
import { Card, BellOutlined, Typography, Avatar } from "@/components/atoms";
import SearchBox from "@/components/molecules/SearchBox";

const { Text } = Typography;

type Prop = {
  notification: any;
};

const NotificationItem = ({ notification }: Prop) => {
  return (
    <Card className="flex items-center" hoverable>
      <Avatar
        size="large"
        icon={<BellOutlined />}
        src={notification.avatar}
        className="mr-4"
      />
      <div className="flex-1 mt-2">
        <Text className="block font-bold">{notification.title}</Text>
        <Text type="secondary">{notification.message}</Text>
        <Text type="secondary" className="block m-1 text-xs">
          {notification.time}
        </Text>
        <SearchBox enterButton="Send" placeholder="Enter message"></SearchBox>
      </div>
    </Card>
  );
};

export default NotificationItem;
