import { useQuery, UseQueryResult } from "react-query";
import { exchangesProfilesServices } from "@features/exchnage-profiles/services/exchanges-profiles.services";
import { GetProfilesResponseDTO } from "@common/repository/types/profile_dto";

export function useGetExchangesProfiles(): UseQueryResult<GetProfilesResponseDTO> {
  return useQuery("exchanges-profiles", exchangesProfilesServices.list.get, { initialData: [] });
}
