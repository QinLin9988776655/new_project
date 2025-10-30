import { Tag } from "antd";
import styles from "./styles.less";

export const renderTagTree = (list: { name: string; type: string }[]) => {
  const getTagClassName = (level: string) => {
    switch (level) {
      case "1":
        return styles.level1;
      case "2":
        return styles.level2;
      default:
        return styles.level1;
    }
  };

  return (
    <div className={styles.labelContainer}>
      {list?.map((item: any) => (
        <Tag className={getTagClassName(item?.type)}>{item?.name}</Tag>
      ))}
    </div>
  );
};

export const renderCardBorder = (type: string) => {
  switch (type) {
    case "1":
      return styles.cardContainer1;
    case "2":
      return styles.cardContainer2;
    case "3":
      return styles.cardContainer3;
    default:
      return styles.cardContainer1;
  }
};
