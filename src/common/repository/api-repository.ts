import axios from "axios";
import { GetProfilesResponseDTO } from "./types/profile_dto";
import {
  GetPerpetualPositionRequestParams,
  GetPerpetualPositionResponseDTO,
  GetPortfolioBalanceRequestParams,
  GetPortfolioBalanceResponse,
} from "./types/portfolio_dto";

const BASE_PATH = "http://localhost:3004/api/v1";

/**
 * Just an example how to handle multiple paths and services to call.
 */
const profileApiClient = axios.create({
  baseURL: `${BASE_PATH}/extended/profile`,
});

const portfolioApiClient = axios.create({
  baseURL: `${BASE_PATH}/portfolio`,
});

export const profileRepository = {
  getActiveProfiles(): Promise<GetProfilesResponseDTO> {
    return profileApiClient.get<GetProfilesResponseDTO>("/active").then(({ data }) => data);
  },
};

export const portfolioRepository = {
  getSpotBalances(params: GetPortfolioBalanceRequestParams): Promise<GetPortfolioBalanceResponse> {
    return portfolioApiClient
      .get<GetPortfolioBalanceResponse>("/spot/balance", { params })
      .then(({ data }) => data);
  },
  getFuturesBalances(params: GetPortfolioBalanceRequestParams): Promise<GetPortfolioBalanceResponse> {
    return portfolioApiClient
      .get<GetPortfolioBalanceResponse>("/futures/balance", { params })
      .then(({ data }) => data);
  },
  getPerpetualPositions(params: GetPerpetualPositionRequestParams): Promise<GetPerpetualPositionResponseDTO> {
    return portfolioApiClient
      .get<GetPerpetualPositionResponseDTO>("/perpetual/position", { params })
      .then(({ data }) => data);
  },
};
