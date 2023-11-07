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
      userRole === UserRole.checker &&
      !pathname.startsWith("/checker") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/checker", request.url));
    } else if (
      userRole === UserRole.controller &&
      !pathname.startsWith("/controller") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/controller", request.url));
    } else if (
      userRole === UserRole.consultant &&
      !pathname.startsWith("/consultant") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/sgl", request.url));
    } else if (
      userRole === UserRole.sgl &&
      !pathname.startsWith("/sgl") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/sgl", request.url));
    } else if (
      userRole === UserRole.gl &&
      !pathname.startsWith("/gl") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/gl", request.url));
    } else if (
      userRole === UserRole.trainer &&
      !pathname.startsWith("/trainer") &&
      !pathname.startsWith("/photo-zone") &&
      !pathname.startsWith("/forgot-password")
    ) {
      return NextResponse.redirect(new URL("/trainer", request.url));
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
    "/admin/user-management/count",
    "/admin/user-management/ref-list",
    "/admin/user-management/ref-list/my-ref",
    "/admin/user-management/send-wish",
    "/admin/user-management/sgl",
    "/admin/user-management/sgl/request",
    "/admin/user-management/gl",
    "/admin/user-management/gl/request",
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
    "/checker",
    "/checker/change-password",
    "/checker/profile",
    "/checker/profile/edit",
    "/controller",
    "/controller/change-password",
    "/controller/profile",
    "/controller/profile/edit",
    "/consultant",
    "/consultant/change-password",
    "/consultant/profile",
    "/consultant/profile/edit",
    "/gl",
    "/gl/count",
    "/gl/inactive",
    "/gl/change-password",
    "/gl/profile",
    "/gl/profile/edit",
    "/trainer",
    "/trainer/count",
    "/trainer/inactive",
    "/trainer/change-password",
    "/trainer/profile",
    "/trainer/profile/edit",
    "/sgl",
    "/sgl/inactive",
    "/sgl/count",
    "/sgl/change-password",
    "/sgl/profile",
    "/sgl/profile/edit",
    "/forgot-password",
  ],
};
