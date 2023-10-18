"use client";

import Image from "next/image";

const Contact = () => (
  <div className="mt-4">
    <div className="flex gap-3 items-center">
      <Image
        className="h-[34px] rounded-full"
        src="/bill_gates.jpg"
        alt="bill gates"
      />
      <h1 className="font-medium">Bill Gates</h1>
    </div>
  </div>
);

export default Contact;
