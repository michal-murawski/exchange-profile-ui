/**
 * Every single entity from our servers is marked as DTO in order to distinguish UI and backend relations.
 */

export type PortfolioBalanceDTO = {
  profile_id: number;
  asset: string;
  total: number;
  free: number;
  locked: number;
  disabled: boolean;
  // Date string UTC
  inserted_at: string;
  id: number;
};

export type GetPortfolioBalanceResponse = Array<PortfolioBalanceDTO>;

export type GetPortfolioBalanceRequestParams = {
  profileId: number;
};

export enum PerpetualPositionMarginType {
  ISOLATED = "isolated",
  CROSS = "cross",
}

export enum PerpetualPositionPositionSideType {
  SHORT = "SHORT",
}

export type PerpetualPositionDTO = {
  id: number;
  profile_id: number;
  product: string;
  entry_price: number;
  liquidation_price: number;
  position_amount: number;
  position_side: PerpetualPositionPositionSideType;
  leverage: number;
  margin_type: PerpetualPositionMarginType;
  isolated_margin: number;
  unrealized_pnl: number;
  disabled: boolean;
  // Date string UTC
  updated_at: string;
};

export type GetPerpetualPositionResponseDTO = Array<PerpetualPositionDTO>;

export type GetPerpetualPositionRequestParams = {
  profileId: number;
};
