import { profileRepository } from "@common/repository/api-repository";

export const exchangesProfilesServices = {
  list: {
    get() {
      return profileRepository.getActiveProfiles();
    },
  },
};
