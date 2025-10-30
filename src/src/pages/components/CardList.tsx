import { Card, Divider, Tag, Button, Row, Col, Dropdown, Empty } from "antd";
import { AvatarList } from "./AvatarList";
import { type List } from "../services/index";
import { renderCardBorder, renderTagTree } from "./func";
import styles from "./styles.less";

export function CardList(props: { data: List[] }) {
  const { data } = props;

  const typeList = new Map([
    ["1", "开始直播"],
    ["2", "继续直播"],
    ["3", "进入直播"],
  ]);

  const renderList = (item: any) => {
    return (
      <Card
        className={`${styles.cardContainer} ${renderCardBorder(item?.type)}`}
      >
        <div className={styles.card}>
          <Row>
            <Col span={6}>
              <div className={styles.box1}>
                <div>{renderTagTree(item?.tag)}</div>
                <div className={styles.theme}>
                  <div>{item?.title}</div>
                  <a
                    href={item?.link?.linkUrl}
                  >{`>> ${item?.link?.linkName}`}</a>
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
            <Col span={6}>
              <div className={styles.box2}>
                <div>{item.startTime}</div>
                <Divider type="vertical" style={{ color: "#ccc" }} />
                <div>{item.endTime}</div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.box3}>
                <div>{item.address}</div>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles.box4}>
                <Button
                  className={
                    item.type === "1" ? styles.btnStyle1 : styles.btnStyle2
                  }
                  onClick={() => {
                    // 此处可以做按钮回调处理比如更改按钮的状态
                  }}
                >
                  {typeList.get(item.type)}
                  {/* 此处不确认对应组件实现效果应该是三点展开下拉抽屉 */}
                </Button>
                <Dropdown />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    );
  };

  return (
    <div>
      {data?.length ? (
        <div>{data?.map((ele: any) => renderList(ele))}</div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
