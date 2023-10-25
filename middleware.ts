import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { UserRole } from "./lib";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const { token } = request.nextauth;
    const { pathname } = request.nextUrl;

    if (!token) {
      // User is not logged in, redirect to home page
      return NextResponse.redirect("/");
    }

    const userRole = token.role;

    if (
      userRole === UserRole.active &&
      !pathname.startsWith("/active") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/active", request.url));
    } else if (
      userRole === UserRole.inactive &&
      !pathname.startsWith("/inactive") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/inactive", request.url));
    } else if (
      userRole === UserRole.admin &&
      !pathname.startsWith("/admin") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/admin", request.url));
    } else if (
      userRole === UserRole.teacher &&
      !pathname.startsWith("/teacher") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/teacher", request.url));
    } else if (
      (userRole === UserRole.controller ||
        userRole === UserRole.consultant ||
        userRole === UserRole.gl) &&
      !pathname.startsWith("/subadmin") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/subadmin", request.url));
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
    "/admin/balance",
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
    "/teacher",
    "/teacher/change-password",
    "/teacher/profile",
    "/teacher/profile/edit",
    "/subadmin",
    "/subadmin/change-password",
    "/subadmin/profile",
    "/subadmin/profile/edit",
    "/forgot-password",
  ],
};
