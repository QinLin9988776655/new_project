import { useEffect, useState } from "react";
import { Select } from "antd";
import { searchList, type Data } from "./services";
import { CardList } from "./components/CardList";
import { HistoryList } from "./components/historyList";
import styles from "./index.less";

export default function HomePage() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [data, setData] = useState<Data>({
    list: [],
    total: 0,
  });
  useEffect(() => {
    const getList = async () => {
      // 传递searchValue的值进行页面查询
      const result: Data = await searchList(searchValue);
      setData(result);
    };
    getList();
  }, [searchValue]);
  return (
    <div className={styles.homePage}>
      <div className={styles.title}>
        <>{`我的座谈会(${data?.total})`}</>
        <>
          <Select
            showSearch={true}
            onSearch={(val) => {
              setSearchValue(val);
            }}
            placeholder="请输入关键词"
          />
        </>
      </div>
      进行中
      <CardList
        data={data?.list.filter((i: { type: string }) => i.type === "1") || []}
      />
      暂停中
      <CardList
        data={data?.list?.filter((i: { type: string }) => i.type === "2") || []}
      />
      未开始
      <CardList
        data={data?.list?.filter((i: { type: string }) => i.type === "3") || []}
      />
      历史数据
      <HistoryList
        data={data?.list.filter((i: { type: string }) => !i.type) || []}
      />
    </div>
  );
}
