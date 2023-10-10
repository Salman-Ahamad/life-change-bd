"use client";

import React from "react";

export default function Sample() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("Submittted: ");
    } catch (error: any) {
      console.error(error);
    }
  };

  return <main>page</main>;
}
