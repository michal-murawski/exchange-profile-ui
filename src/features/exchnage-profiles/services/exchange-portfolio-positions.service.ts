import { portfolioRepository } from "@common/repository/api-repository";
import { ProfileExchangeKindType } from "@common/repository/types/profile_dto";
import { GetPortfolioBalanceRequestParams } from "@common/repository/types/portfolio_dto";

type GetPositionsOptions = {
  exchangeType: ProfileExchangeKindType;
  params: GetPortfolioBalanceRequestParams;
};

export const exchangePortfolioPositionsServices = {
  details: {
    get({ exchangeType, params }: GetPositionsOptions) {
      if (exchangeType === ProfileExchangeKindType.FUTURES) {
        return portfolioRepository.getPerpetualPositions(params);
      }
    },
  },
};
