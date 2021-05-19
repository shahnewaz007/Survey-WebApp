import { Cookies } from "react-cookie";

export default {
  surveyid:15,
  authMessage: "",
  tempToken: "",
  isLoggedIn: new Cookies().get("isLoggedIn") || false,
  firstName: new Cookies().get("firstName") || null,
  userRole: new Cookies().get("userRole") || null,
};
