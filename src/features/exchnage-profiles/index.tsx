import { Feature } from "../types/feature";
import { ExchangesProfilesPage } from "@features/exchnage-profiles/components/exchanges-profiles-page";
import { exchangeProfilesRouting } from "@features/exchnage-profiles/routing";

const feature: Feature = {
  contentRoutes: [
    {
      element: <ExchangesProfilesPage />,
      path: exchangeProfilesRouting.list.path,
    },
  ],
};

export const exchangeProfiles = feature;
