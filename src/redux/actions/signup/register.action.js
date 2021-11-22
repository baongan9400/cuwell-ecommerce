import * as type from "../../constants";

export function register(email, name, phone, city, district, commute) {
  return {
    type: type.USER_REGISTER_REQUESTED,
    email,
    name,
    phone,
    city,
    district,
    commute,
  };
}
