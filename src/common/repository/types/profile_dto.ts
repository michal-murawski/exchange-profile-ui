export enum ProfileSourceKindType {
  EXCHANGE = "EXCHANGE",
}

export enum ProfileExchangeKindType {
  SPOT = "SPOT",
  FUTURES = "FUTURES",
}

export type ProfileDTO = {
  source: {
    id: number;
    name: string;
    kind: ProfileSourceKindType;
    disabled: boolean;
    // Date string UTC
    updated_at: string;
  };
  exchange: {
    id: number;
    source_id: number;
    name: string;
    kind: ProfileExchangeKindType;
    label: string;
    disabled: boolean;
    // Date string UTC
    updated_at: string;
  };
  account: {
    id: number;
    exchange_id: number;
    name: string;
    disabled: boolean;
    updated_at: string;
  };
  profile: {
    id: number;
    account_id: number;
    name: string;
    label: string;
    disabled: false;
    // Date string UTC
    updated_at: string;
  };
};

export type GetProfilesResponseDTO = Array<ProfileDTO>;
