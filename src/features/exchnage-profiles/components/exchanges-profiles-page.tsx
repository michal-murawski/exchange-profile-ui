import React, { useState } from "react";
import { Menu, Space, Typography } from "antd";
import { useGetExchangesProfiles } from "@features/exchnage-profiles/queries/exchanges-profiles.query";
import { capitalize } from "lodash";
import { ProfileDTO } from "@common/repository/types/profile_dto";
import { ExchangeProfileDetails } from "@features/exchnage-profiles/components/exchange-profile-details";

const styles = require("./exchanges-profiles-pages.module.css");

function formatTitle({ exchange }: ProfileDTO): string {
  return `${capitalize(exchange.name)}`;
}

function formatDescription({ source, account, profile }: ProfileDTO): string {
  return `Source: ${source.name}, Account: ${account.name}, Profile: ${profile.name}`;
}

export const ExchangesProfilesPage = () => {
  const exchangesProfiles = useGetExchangesProfiles();
  const [selectedProfile, setProfile] = useState<ProfileDTO | undefined>();

  return (
    <>
      <Menu className={styles.menu} mode="inline">
        {exchangesProfiles.data?.map((profile, index) => (
          <Menu.Item
            onClick={() => {
              setProfile(profile);
            }}
            key={index}
            className={styles.item}
            title={formatTitle(profile)}
          >
            <Space size="small" direction="vertical">
              <Typography.Text>{formatTitle(profile)}</Typography.Text>
              <Typography.Text type="secondary">{formatDescription(profile)}</Typography.Text>
            </Space>
          </Menu.Item>
        ))}
      </Menu>

      {selectedProfile && (
        /**
         * As mentioned in the feature index file. We could add nested routing instead of using local state.
         */
        <div className={styles.detailsWrapper}>
          <ExchangeProfileDetails profile={selectedProfile} />
        </div>
      )}
    </>
  );
};
