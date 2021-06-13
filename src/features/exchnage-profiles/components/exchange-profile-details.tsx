import React, { FC } from "react";
import { useGetExchangePortfolioBalance } from "@features/exchnage-profiles/queries/exchnage-portfolio-balance.query";
import { ProfileDTO } from "@common/repository/types/profile_dto";
import { useGetExchangePortfolioPositions } from "@features/exchnage-profiles/queries/exchange-portfolio-positions.query";
import { Badge, Table, Tabs } from "antd";
import { ColumnsType } from "antd/lib/table/interface";
import { PerpetualPositionDTO, PortfolioBalanceDTO } from "@common/repository/types/portfolio_dto";
import { Collapse } from "antd";
import { isEmpty } from "lodash";

const { Panel } = Collapse;
const styles = require("./exchange-profile-details.module.css");

type ExchangeProfileDetailsProps = {
  profile: ProfileDTO;
};

const { TabPane } = Tabs;

const positionsColumns: ColumnsType<PerpetualPositionDTO> = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Entry price",
    dataIndex: "entry_price",
    key: "entry_price",
  },
  {
    title: "Liquidation price",
    dataIndex: "liquidation_price",
    key: "liquidation_price",
  },
  {
    title: "Amount",
    dataIndex: "position_amount",
    key: "position_amount",
  },
  {
    title: "Position side",
    dataIndex: "position_side",
    key: "position_side",
  },
  {
    title: "Leverage",
    dataIndex: "leverage",
    key: "leverage",
  },
  {
    title: "Active",
    dataIndex: "disabled",
    key: "disabled",
    render(disabled) {
      return <Badge status={disabled ? "error" : "success"} />;
    },
  },
];
const balanceColumns: ColumnsType<PortfolioBalanceDTO> = [
  {
    title: "Asset",
    dataIndex: "asset",
    key: "asset",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Free",
    dataIndex: "free",
    key: "free",
  },
  {
    title: "Locked",
    dataIndex: "locked",
    key: "locked",
  },
  {
    title: "Active",
    dataIndex: "disabled",
    key: "disabled",
    render(disabled) {
      return <Badge status={disabled ? "error" : "success"} />;
    },
  },
];

/**
 * Combine two service calls into one component in order to keep thing easier organized.
 * Developing filtering, search, multiselect with autocomplete would be easier in this scenario (out of time).
 *
 * For 'acquired assets' I could use a different component, but I simply did run out of time.
 * I also wanted to improve styling, typography, etc.
 */
export const ExchangeProfileDetails: FC<ExchangeProfileDetailsProps> = ({ profile }) => {
  const balance = useGetExchangePortfolioBalance(profile);
  const positions = useGetExchangePortfolioPositions(profile);

  return (
    <div className={styles.details}>
      <Collapse defaultActiveKey={[]} ghost>
        <Panel header="Total assets" key="1">
          {isEmpty(balance.data?.select.acquiredAssets) ? (
            "No assets acquired"
          ) : (
            <Table
              rowKey="id"
              columns={balanceColumns}
              size="small"
              dataSource={balance.data?.select.acquiredAssets}
              loading={balance.isLoading || positions.isLoading}
            />
          )}
        </Panel>
      </Collapse>
      <Tabs size="small" defaultActiveKey="balance">
        <TabPane tab="Balance" key="balance">
          <Table
            rowKey="id"
            columns={balanceColumns}
            size="small"
            dataSource={balance.data?.response}
            loading={balance.isLoading || positions.isLoading}
          />
        </TabPane>
        {!isEmpty(positions.data) && (
          <TabPane tab="Positions" key="positions">
            <Table
              rowKey="id"
              columns={positionsColumns}
              size="small"
              dataSource={positions.data}
              loading={balance.isLoading || positions.isLoading}
            />
          </TabPane>
        )}
      </Tabs>
    </div>
  );
};
