import { Avatar } from "antd";

type Avatar = {
  name?: string;
  url: string;
};

// 用户头像组件
export function AvatarList(props: { data: Avatar[] }) {
  const { data } = props;
  return (
    <Avatar.Group
      size="small"
      max={{
        count: 4, // 此处可以优化将上限个数改为传入
      }}
    >
      {data?.map((item: { url: string }) => (
        <Avatar size="small" src={item.url} />
      ))}
    </Avatar.Group>
  );
}
