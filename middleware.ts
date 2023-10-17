import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "./lib";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    if (
      request.nextUrl.pathname.startsWith("/user") &&
      request.nextauth.token?.role === UserRole.inactive
    ) {
      return NextResponse.redirect(`${process.env.BASE_URL}/inactive`);
    } else if (
      request.nextUrl.pathname.startsWith("/inactive") &&
      request.nextauth.token?.role === UserRole.active
    ) {
      return NextResponse.redirect(`${process.env.BASE_URL}/active/user`);
    } else if (
      request.nextUrl.pathname.includes("/admin") &&
      request.nextauth.token?.role !== UserRole.admin
    ) {
      return NextResponse.redirect(`${process.env.BASE_URL}/admin-login`);
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
    "/active",
    "/active/change-password",
    "/active/courses",
    "/active/my-ref",
    "/active/passbook",
    "/active/ref-list",
    "/active/user",
    "/active/user/[slug]",
    "/active/user/profile",
    "/active/user/profile/edit",
    "/active/user/withdrawal",
    "/active/photo-zone",
    "/admin",
    "/admin/action",
    "/admin/reports",
    "/admin/settings",
    "/admin/user-management",
    "/admin/user-management/ref-list",
    "/admin/user-management/ref-list/my-ref",
    "/admin/user-management/ref-list/send-wish",
    "/adminuser-management/student",
    "/inactive",
    "/inactive/profile",
    "/photo-zone",
    "/photo-zone/profile",
    "/photo-zone/user-profile/[slug]",
  ],
};
