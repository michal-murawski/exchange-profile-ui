import { portfolioRepository } from "@common/repository/api-repository";
import { ProfileExchangeKindType } from "@common/repository/types/profile_dto";
import { GetPortfolioBalanceRequestParams } from "@common/repository/types/portfolio_dto";

type GetBalanceOptions = {
  exchangeType: ProfileExchangeKindType;
  params: GetPortfolioBalanceRequestParams;
};

export const exchangePortfolioBalanceServices = {
  details: {
    get({ exchangeType, params }: GetBalanceOptions) {
      if (exchangeType === ProfileExchangeKindType.SPOT) {
        return portfolioRepository.getSpotBalances(params);
      }

      return portfolioRepository.getFuturesBalances(params);
    },
  },
};
