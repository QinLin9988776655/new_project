export interface Data {
  total: number;
  list: List[];
}

export interface List {
  title: string; // 直播标题
  tag: {
    name: string; // 标签名称
    type: number | string; // 标签类型 用于区分标签形式 or 标签采用树结构根据目录等级做区分
  }[];
  link: {
    linkName: string; // 跳转的link文本
    linkUrl: string; // 跳转的url
  };
  createUser: {
    name: string; // 创建者姓名
    url: string; // 创建者头像资源路径
  }[];

  collaborator: {
    name: string; // 协作者姓名
    url: string; // 协作者头像资源路径
  }[];
  startTime: string; // 直播开始日期
  endTime: string; // 直播结束日期
  address: string; // 直播地点
  type: string; // 用于区分直播时态 进行中，历史数据, 尚未开始或者根据当前时间做区分 拿currentDate做对比前端进行分类
  historyList: {
    title: string; // 标题名称
    url: string; // 点击标题跳转的路径
    time: {
      startTime: string; // 开始时间
      endTime: string; // 结束时间
    };
    address: string; // 历史数据直播地点
    createUser: string; // 创建人
  }[];
}

export const searchList = (val: string) => {
  return new Promise((result, reject) => {
    const obj = {
      total: 10,
      list: [
        {
          title: "NGR流失访谈",
          link: {
            linkName: "Product",
            linkUrl:
              "https://www.figma.com/design/7meUIxQ3bibUrZVidiVfdA/%E6%9D%83%E9%99%90%E6%94%B9%E9%80%A0?node-id=0-1&p=f",
          },
          createUser: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          collaborator: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          startTime: "2024-11 18:00:00",
          endTime: "2024-11 19:00:00",
          address: "端手游体验室(深圳-D1-0445)",
          type: "1",
          tag: [
             {
              name: "天美",
              type: "1",
            },
            {
              name: "王者荣耀",
              type: "2",
            },
          ],
        },
        {
          title: "流失访谈",
          link: {
            linkName: "Day 5 AM",
            linkUrl:
              "https://www.figma.com/design/7meUIxQ3bibUrZVidiVfdA/%E6%9D%83%E9%99%90%E6%94%B9%E9%80%A0?node-id=0-1&p=f",
          },
          createUser: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          collaborator: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          startTime: "2024-11 18:00:00",
          endTime: "2024-11 19:00:00",
          address: "",
          type: "1",
          tag: [
            {
              name: "天美",
              type: "1",
            },
            {
              name: "王者荣耀",
              type: "2",
            },
          ],
        },
        {
          title: "NGR流失访谈",
          link: {
            linkName: "Product",
            linkUrl:
              "https://www.figma.com/design/7meUIxQ3bibUrZVidiVfdA/%E6%9D%83%E9%99%90%E6%94%B9%E9%80%A0?node-id=0-1&p=f",
          },
          createUser: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          collaborator: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          startTime: "2024-11 18:00:00",
          endTime: "2024-11 19:00:00",
          address: "",
          type: "1",
        },
        {
          title: "NGR流失访谈",
          link: {
            linkName: "Product",
            linkUrl:
              "https://www.figma.com/design/7meUIxQ3bibUrZVidiVfdA/%E6%9D%83%E9%99%90%E6%94%B9%E9%80%A0?node-id=0-1&p=f",
          },
          createUser: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          collaborator: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          startTime: "2024-11 18:00:00",
          endTime: "2024-11 19:00:00",
          address: "",
          type: "1",
        },
        {
          title: "NGR流失访谈",
          link: {
            linkName: "Product",
            linkUrl:
              "https://www.figma.com/design/7meUIxQ3bibUrZVidiVfdA/%E6%9D%83%E9%99%90%E6%94%B9%E9%80%A0?node-id=0-1&p=f",
          },
          createUser: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          collaborator: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          startTime: "2024-11 18:00:00",
          endTime: "2024-11 19:00:00",
          address: "端手游体验室(深圳-D1-0445)",
          type: "2",
          tag: [
           {
              name: "天美",
              type: "1",
            },
            {
              name: "王者荣耀",
              type: "2",
            },,
          ],
        },
        {
          title: "NGR流失访谈",
          link: {
            linkName: "Product",
            linkUrl:
              "https://www.figma.com/design/7meUIxQ3bibUrZVidiVfdA/%E6%9D%83%E9%99%90%E6%94%B9%E9%80%A0?node-id=0-1&p=f",
          },
          createUser: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          collaborator: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          startTime: "2024-11 18:00:00",
          endTime: "2024-11 19:00:00",
          address: "",
          type: "1",
        },
        {
          title: "NGR流失访谈",
          link: {
            linkName: "Product",
            linkUrl:
              "https://www.figma.com/design/7meUIxQ3bibUrZVidiVfdA/%E6%9D%83%E9%99%90%E6%94%B9%E9%80%A0?node-id=0-1&p=f",
          },
          createUser: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          collaborator: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          startTime: "2024-11 18:00:00",
          endTime: "2024-11 19:00:00",
          address: "端手游体验室(深圳-D1-0445)",
          type: "3",
          tag: [
           {
              name: "天美",
              type: "1",
            },
            {
              name: "王者荣耀",
              type: "2",
            },
          ],
        },
        {
          title: "NGR流失访谈",
          link: {
            linkName: "Product",
            linkUrl:
              "https://www.figma.com/design/7meUIxQ3bibUrZVidiVfdA/%E6%9D%83%E9%99%90%E6%94%B9%E9%80%A0?node-id=0-1&p=f",
          },
          address: "端手游体验室(深圳-D1-0445)",
          tag: [
            {
              name: "天美",
              type: "1",
            },
            {
              name: "王者荣耀",
              type: "2",
            },
          ],
          createUser: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          collaborator: [
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
            { name: "XXX", url: "" },
          ],
          startTime: "2024-11 18:00:00",
          endTime: "2024-11 19:00:00",
          children: [
            {
              name: "NGR流失访谈",
              url: "https://ant.design",
              startTime: "2024-11 18:00:00",
              endTime: "2024-11 19:00:00",
            },
            {
              name: "NGR流失访谈",
              url: "https://ant.design",
              startTime: "2024-11 18:00:00",
              endTime: "2024-11 19:00:00",
              address: "端手游体验室(深圳-D1-0445)",
            },
            {
              name: "NGR流失访谈",
              url: "https://ant.design",
              startTime: "2024-11 18:00:00",
              endTime: "2024-11 19:00:00",
              address: "端手游体验室(深圳-D1-0445)",
              id: "1",
            },
            { name: "NGR流失访谈", url: "https://ant.design" },
            { name: "NGR流失访谈", url: "https://ant.design" },
            { name: "NGR流失访谈", url: "https://ant.design" },
            { name: "NGR流失访谈", url: "https://ant.design" },
            { name: "NGR流失访谈", url: "https://ant.design" },
          ],
        },
      ],
    };
    const arr: (
      | {
          title: string;
          link: { linkName: string; linkUrl: string };
          createUser: { name: string; url: string }[];
          collaborator: { name: string; url: string }[];
          startTime: string;
          endTime: string;
          address: string;
          type: string;
          tag: { name: string; type: string }[];
          children?: undefined;
        }
      | {
          title: string;
          link: { linkName: string; linkUrl: string };
          createUser: { name: string; url: string }[];
          collaborator: { name: string; url: string }[];
          startTime: string;
          endTime: string;
          address: string;
          type: string;
          tag?: undefined;
          children?: undefined;
        }
      | {
          title: string;
          link: { linkName: string; linkUrl: string };
          address: string;
          tag: { name: string; type: string }[];
          createUser: { name: string; url: string }[];
          collaborator: { name: string; url: string }[];
          startTime: string;
          endTime: string;
          children: (
            | {
                name: string;
                url: string;
                startTime: string;
                endTime: string;
                address?: undefined;
              }
            | {
                name: string;
                url: string;
                startTime: string;
                endTime: string;
                address: string;
              }
            | {
                name: string;
                url: string;
                startTime?: undefined;
                endTime?: undefined;
                address?: undefined;
              }
          )[];
          type?: undefined;
        }
    )[] = [];
    // 这里如果需要对列表数据进行筛选 则可以通过递归children获取
    if (val) {
      obj?.list?.map((item) => {
        if (item.title.includes(val)) {
          arr?.push(item);
        }
      });
      result({
        total: arr?.length,
        list: arr,
      });
    } else {
      result(obj);
    }
  });
};
