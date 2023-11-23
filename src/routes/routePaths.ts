export const getHomeRoutePath = () => {
  return "/";
};

export const getTravelByLocationRoutePath = (continent: string) => {
  return `/travelsByLocation/${continent}`;
};

export const getTripDetailRoutePath = (trip: string) => {
  return `/tripDetail/${trip}`;
};

export const getContactRoutePath = () => {
  return `/contact`;
};
