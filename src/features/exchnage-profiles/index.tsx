import { Feature } from "../types/feature";
import { ExchangesProfilesPage } from "@features/exchnage-profiles/components/exchanges-profiles-page";
import { exchangeProfilesRouting } from "@features/exchnage-profiles/routing";

/**
 * We could add more children and nested routes to separate logic and simplify components and remove local state.
 * Unfortunately, I was out of time.
 */
const feature: Feature = {
  contentRoutes: [
    {
      element: <ExchangesProfilesPage />,
      path: exchangeProfilesRouting.list.path,
    },
  ],
};

export const exchangeProfiles = feature;
