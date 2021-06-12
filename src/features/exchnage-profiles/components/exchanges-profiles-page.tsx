import React from "react";
import { Card } from "antd";
import { useGetExchangesProfiles } from "@features/exchnage-profiles/queries/exchanges-profiles.query";

const styles = require("./exchanges-profiles-pages.module.css");

export const ExchangesProfilesPage = () => {
  const exchangesProfiles = useGetExchangesProfiles();

  return (
    <div className={styles.cards}>
      {exchangesProfiles.data?.map((profile) => (
        <Card
          className={styles.card}
          bordered={false}
          size="small"
          title={profile.exchange.name}
          key={profile.exchange.id + profile.profile.id}
        >
          <Card.Grid className={styles.cardGrid}>{profile.exchange.label}</Card.Grid>
          <Card.Grid className={styles.cardGrid}>{profile.account.name}</Card.Grid>
          <Card.Grid className={styles.cardGrid}>{profile.source.name}</Card.Grid>
        </Card>
      ))}
    </div>
  );
};
