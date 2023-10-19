import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "./lib";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const userRole = request.nextauth.token?.role;

    if (
      userRole === UserRole.active &&
      !request.nextUrl.pathname.startsWith("/active") &&
      !request.nextUrl.pathname.startsWith("/photo-zone") &&
      !request.nextUrl.pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/active", request.url));
    } else if (
      userRole === UserRole.inactive &&
      !request.nextUrl.pathname.startsWith("/inactive") &&
      !request.nextUrl.pathname.startsWith("/photo-zone") &&
      !request.nextUrl.pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/inactive", request.url));
    } else if (
      userRole === UserRole.admin &&
      !request.nextUrl.pathname.startsWith("/admin") &&
      !request.nextUrl.pathname.startsWith("/photo-zone") &&
      !request.nextUrl.pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/admin", request.url));
    } else if (
      (userRole === UserRole.controller ||
        userRole === UserRole.consultant ||
        userRole === UserRole.gl ||
        userRole === UserRole.teacher) &&
      !request.nextUrl.pathname.startsWith("/subadmin") &&
      !request.nextUrl.pathname.startsWith("/photo-zone") &&
      !request.nextUrl.pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/subadmin", request.url));
    }

    // if (
    //   request.nextUrl.pathname.startsWith("/active") &&
    //   request.nextauth.token?.role === UserRole.inactive
    // ) {
    //   return NextResponse.redirect(new URL("/inactive", request.url));
    //   // return NextResponse.redirect(`/inactive`);
    // } else if (
    //   request.nextUrl.pathname.startsWith("/inactive") &&
    //   request.nextauth.token?.role === UserRole.active
    // ) {
    //   return NextResponse.redirect(`/active`);
    // } else if (
    //   request.nextUrl.pathname.startsWith("/admin") &&
    //   request.nextauth.token?.role !== UserRole.admin
    // ) {
    //   return NextResponse.redirect(`/admin-login`);
    // }
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
    "/admin/user-management/send-wish",
    "/admin/user-management/student",
    "/inactive",
    "/inactive/profile",
    "/photo-zone",
    "/photo-zone/profile",
    "/photo-zone/user-profile/[slug]",
    "/subadmin",
    "/forgot-password",
  ],
};
