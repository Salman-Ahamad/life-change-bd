import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "./lib";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    if (
      request.nextUrl.pathname.includes("/user") &&
      request.nextauth.token?.role === UserRole.inactive
    ) {
      return NextResponse.redirect(`${process.env.BASE_URL}/inactive`);
    } else if (
      request.nextUrl.pathname.includes("/inactive") &&
      request.nextauth.token?.role === UserRole.active
    ) {
      return NextResponse.redirect(`${process.env.BASE_URL}/user/active`);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/inactive",
    "/inactive/profile",
    "/user/[slug]",
    "/user/active",
    "/user/active/profile",
    "/user/active/profile/edit",
    "/user/active/withdrawal",
    "/user/change-password",
    "/user/courses",
    "/user/messages",
    "/user/notification",
    "/user/notification/memo",
    "/user/passbook",
    "/user/payment-method",
    "/user/photo-zone",
    "/user/photo-zone/profile",
    "/user/photo-zone/user-profile/[slug]",
    "/user/redeem-list",
    "/user/ref-list",
    "/user/ref-list/my-ref",
    "/user/ref-list/send-wish",
    "/user/settings",
    "/user/settings/reports",
    "/user/settings/students",
    "/user/settings/team-management",
    "/user/settings/user-management",
    "/user/transfer-points",
    "/user/video-zone",
  ],
};
