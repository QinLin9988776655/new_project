import React, { useEffect, useState } from "react";
import { Collapse, Row, Col, List, Skeleton } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { renderTagTree } from "./func";
import { AvatarList } from "./AvatarList";
import styles from "./styles.less";

export function HistoryList(props: { data: any }) {
  const { data } = props;
  const [historyList, setHitoryList] = useState<any>([]);

  useEffect(() => {
    setHitoryList(data || []);
  }, [data]);

  const getItems = (list: []) => {
    const collapseItem: {
      key: number;
      label: JSX.Element;
      children: JSX.Element;
    }[] = [];
    list?.map(
      (
        item: {
          id: any;
          children: any;
          tag: { name: string; type: string }[];
          title:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          link: { linkUrl: string | undefined; linkName: any };
          createUser: { name?: string; url: string }[];
          collaborator: { name?: string; url: string }[];
          startTime:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          endTime:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          address:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          loading: boolean | undefined;
          avatar:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
        },
        index: any
      ) =>
        collapseItem.push({
          key: index,
          label: (
            <div className={styles.card}>
              <Row style={{ paddingBottom: "8px" }}>
                <Col span={6}>
                  <div className={styles.box1}>
                    <div>{renderTagTree(item?.tag)}</div>
                    <div className={styles.theme}>
                      <div>{item?.title}</div>
                    </div>
                    <div className={styles.relevantPersonnel}>
                      <div className={styles.personnelItem}>
                        <span className={styles.title}>创建者</span>{" "}
                        <AvatarList data={item?.createUser} />
                      </div>
                      <div className={styles.personnelItem}>
                        <span className={styles.title}>协作者</span>{" "}
                        <AvatarList data={item?.collaborator} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={7}>
                  <div className={styles.box2}>
                    <div>{item.startTime}</div>
                    <div>to</div>
                    <div>{item.endTime}</div>
                  </div>
                </Col>
                <Col span={5}>
                  <div className={styles.box3}>
                    <div>{item.address}</div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className={styles.box4}></div>
                </Col>
              </Row>
            </div>
          ),
          children: (
            <List itemLayout="horizontal">
              {item?.children?.map(
                (
                  ele: {
                    url: string | undefined;
                    name: string;
                    startTime: any;
                    endTime: any;
                    address:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | null
                      | undefined;
                  },
                  idx: number
                ) => (
                  <List.Item
                    key={idx}
                    actions={[
                      <a key="list-loadmore-edit">...</a>,
                      <a key="list-loadmore-more">
                        <DeleteTwoTone
                          onClick={() => {
                            const arr = [...historyList];
                            arr?.map((e) => {
                              if (e?.id === item.id) {
                                e.children.splice(idx, 1);
                              }
                            });
                            setHitoryList(arr);
                            // 调用接口进行删除调用父组件获取数据
                            // 前端层面上可以通过splice index下标进行删除或者通过id去匹配对应数据
                          }}
                        />
                      </a>,
                    ]}
                  >
                    <Skeleton
                      avatar
                      title={false}
                      loading={item.loading}
                      active
                    >
                      <List.Item.Meta
                        title={
                          <a
                            href={ele?.url}
                            style={{ color: "#1677ff", fontWeight: "400" }}
                          >
                            {ele?.name}
                          </a>
                        }
                      />
                      <Col span={8}>
                        {ele?.startTime && (
                          <div>
                            {`时间 :${ele?.startTime}- ${ele?.endTime}`}
                          </div>
                        )}
                      </Col>
                      <Col span={8}>
                        {ele?.address && <div>{ele?.address} </div>}
                      </Col>
                    </Skeleton>
                  </List.Item>
                )
              )}
            </List>
          ),
        })
    );
    return collapseItem;
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      className={styles?.collapseContainer}
      items={getItems(historyList)}
    />
  );
}
