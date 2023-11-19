export const getHomeRoutePath = () => {
  return "/";
};

export const getTravelByLocationRoutePath = (continent: string) => {
  return `/travelByLocation/${continent}`;
};

export const getTripDetailRoutePath = (trip: string) => {
  return `/tripDetail/${trip}`;
};
