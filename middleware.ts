// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request: NextRequestWithAuth) {
    // console.log(request.nextUrl.pathname);
    // console.log(request.nextauth.token)
    switch (request.nextauth.token?.role) {
      case "inactive":
        return NextResponse.redirect(`${process.env.BASE_URL}/inactive`);
      case "active":
        return NextResponse.redirect(`${process.env.BASE_URL}/user/active`);

      default:
        return NextResponse.redirect(`${process.env.BASE_URL}`);
    }

    // if (
    //   request.nextUrl.pathname.includes("/user") &&
    //   request.nextauth.token?.role === "inactive"
    // ) {
    //   return NextResponse.redirect(`${process.env.BASE_URL}/inactive`);
    // }

    // if (
    //   request.nextUrl.pathname.startsWith("/client") &&
    //   request.nextauth.token?.role !== "admin" &&
    //   request.nextauth.token?.role !== "manager"
    // ) {
    //   return NextResponse.rewrite(new URL("/denied", request.url));
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log("Token", token);
        return !!token;
      },
    },
  }
);

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    "/inactive",
    "/user/active",
    "/user/active/profile",
    "/user/active/withdrawal",
    "/user/instant-redeem",
    "/user/messages",
    "/user/notification",
    "/user/notification/memo",
    "/user/passbook",
    "/user/payment-method",
    "/user/redeem-list",
    "/user/ref-list",
    "/user/ref-list/joining",
    "/user/ref-list/meeting",
    "/user/ref-list/send-wish",
    "/user/transfer-points",
  ],
};
