"use client";

import { useCurrentUser } from "@/hooks";
import { UserRole } from "@/lib";
import { Button } from "@/universal";
import { Axios, loadingToast } from "@/utils";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VerifyEmailPage = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const user = useCurrentUser();

  useEffect(() => {
    if (user?.isVerified) {
      redirect("/user/active");
    }
  }, [user]);

  const verifyUserEmail = async () => {
    const id = toast.loading("verifying...");

    const updateUser = {
      isVerified: true,
      role: UserRole.active,
      verifyToken: "",
      verifyTokenExpiry: "",
    };

    Axios.patch("/user", updateUser)
      .then(({ data }) => {
        if (data.data) {
          loadingToast(id, "User Email verbified", "success");
        }
      })
      .catch(({ response }) => {
        loadingToast(id, response.data.message, "error");
      });
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-white">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : "no token"}
      </h2>
      {token && (
        <Button variant="secondary" onClick={verifyUserEmail}>
          Verify
        </Button>
      )}
      {verified && (
        <div>
          <h2 className="text-2xl">Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyEmailPage;
