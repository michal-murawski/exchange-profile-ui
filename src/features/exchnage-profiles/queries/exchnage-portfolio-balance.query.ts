import { useQuery, UseQueryResult } from "react-query";
import { ProfileDTO } from "@common/repository/types/profile_dto";
import { exchangePortfolioBalanceServices } from "@features/exchnage-profiles/services/exchange-portfolio-balance.service";
import { GetPortfolioBalanceResponse, PortfolioBalanceDTO } from "@common/repository/types/portfolio_dto";

export function useGetExchangePortfolioBalance(profile: ProfileDTO): UseQueryResult<{
  response: GetPortfolioBalanceResponse;
  select: { acquiredAssets: PortfolioBalanceDTO[] };
}> {
  return useQuery(
    `profile-balance-${profile.exchange.kind.toLocaleLowerCase()}-${profile.profile.id}`,
    async () =>
      exchangePortfolioBalanceServices.details.get({
        exchangeType: profile.exchange.kind,
        params: {
          profileId: profile.profile.id,
        },
      }),
    {
      refetchOnWindowFocus: false,
      select: (data) => {
        /**
         * We can create our own selectors which will be called only for new/fresh data from a server
         */
        return {
          response: data,
          select: {
            acquiredAssets: data.filter((balance) => balance.total > 0),
          },
        };
      },
    }
  );
}
