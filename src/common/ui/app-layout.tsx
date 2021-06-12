import React from "react";
import { Layout, Menu } from "antd";
import { MoneyCollectOutlined } from "@ant-design/icons";
import { exchangeProfilesRouting } from "@features/exchnage-profiles/routing";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const styles = require("./app-layout.module.css");

export const AppLayout: React.FC = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Layout className={styles.mainLayout}>
      <Sider trigger={null} collapsed={true}>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={() => navigate({ pathname: exchangeProfilesRouting.list.path })}
        >
          <Menu.Item title={"Exchanges"} key="1" icon={<MoneyCollectOutlined />} />
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header} />
        <Content className={styles.appContent}>{children}</Content>
      </Layout>
    </Layout>
  );
};
