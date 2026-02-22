export type ServiceItem = {
  id: string;
  title: string;
  icon:
    | "car-outline"
    | "calendar-outline"
    | "key-outline"
    | "cube-outline"
    | "people-outline"
    | "accessibility-outline";
  badge?: "Promo";
};

export const goAnywhere: ServiceItem[] = [
  { id: "ride", title: "Ride", icon: "car-outline" },
  { id: "reserve", title: "Reserve", icon: "calendar-outline" },
  { id: "rental", title: "Rental Cars", icon: "key-outline", badge: "Promo" },
  { id: "send", title: "Send Items", icon: "cube-outline" },
  { id: "teens", title: "Teens", icon: "people-outline" },
  { id: "seniors", title: "Seniors", icon: "accessibility-outline" },
];

export const deliveries: ServiceItem[] = [
  { id: "food", title: "Food", icon: "cube-outline" },
  { id: "grocery", title: "Grocery", icon: "cube-outline" },
  { id: "retail", title: "Retail", icon: "cube-outline" },
  { id: "more", title: "More", icon: "cube-outline" },
];