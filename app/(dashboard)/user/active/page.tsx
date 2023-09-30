"use client";

import { Header } from "@/components";
import { navData } from "@/lib/data";
import { Button } from "@/universal";
import { useSession } from "next-auth/react";

const Active = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <Header navData={navData.active} />
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 py-12">
        <div className="w-96">
          <div className="shadow-md p-4">
            <h4>May I help you</h4>
            <Button variant="secondary">Get Links</Button>
          </div>
          <div className="shadow-md p-4">
            <h4>Life change Support Team</h4>
            <div className="flex justify-between items-center">
              <p>Your Trainer</p>
              <Button variant="secondary">Message</Button>
            </div>
            <div className="flex justify-between items-center">
              <p>Your Team Leader</p>
              <Button variant="secondary">Message</Button>
            </div>
            <div className="flex justify-between items-center">
              <p>Senior Team Leader</p>
              <Button variant="secondary">Message</Button>
            </div>
            <div className="flex justify-between items-center">
              <p>Life Change BD Support</p>
              <Button variant="secondary">Open Message</Button>
            </div>
          </div>
          <div className="shadow-md p-4">
            <p>Life Change BD Support Whatsapp</p>
            <Button variant="secondary">Get Whatsapp</Button>
          </div>
        </div>
        <div className="w-96">
          <div className="shadow-md p-4">
            <h4>Join Live Learning Training Class</h4>
            <Button variant="secondary">Get Links</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Active;
