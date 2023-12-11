export { default } from "next-auth/middleware";

//if theres no matcher all pages will be protected by default

export const config = {
  matcher: ["/user", "/check"],
  //matching any page that starts with /api or /dashboard
};
