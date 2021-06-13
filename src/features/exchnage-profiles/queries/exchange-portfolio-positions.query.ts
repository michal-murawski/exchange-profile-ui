import { useQuery, UseQueryResult } from "react-query";
import { ProfileDTO } from "@common/repository/types/profile_dto";
import { exchangePortfolioPositionsServices } from "@features/exchnage-profiles/services/exchange-portfolio-positions.service";
import { GetPerpetualPositionResponseDTO } from "@common/repository/types/portfolio_dto";

export function useGetExchangePortfolioPositions(
  profile: ProfileDTO
): UseQueryResult<GetPerpetualPositionResponseDTO> {
  return useQuery(
    `profile-positions-${profile.exchange.kind.toLocaleLowerCase()}-${profile.profile.id}`,
    async () =>
      exchangePortfolioPositionsServices.details.get({
        exchangeType: profile.exchange.kind,
        params: {
          profileId: profile.profile.id,
        },
      }),
    { refetchOnWindowFocus: false }
  );
}
