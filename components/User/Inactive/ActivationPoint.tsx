import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { IAppConfig } from "@/interface";
import { UserRole } from "@/lib";
import { how2buy } from "@/lib/assets";
import { Button, CommonText, Title } from "@/universal";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export const ActivationPoint = () => {
  const [config, setConfig] = useState<IAppConfig>();
  const user = useCurrentUser();
  useGetData("/config", setConfig);

  // console.log(user.balance <= config.baseFee);

  const profileTitle = [
    "email",
    "country",
    "language",
    "phone",
    "whatsapp",
    "role",
    "reference",
    "balance",
  ];

  const tableTitle = user?.reference
    ? profileTitle
    : profileTitle.filter((i) => i !== "reference");

  const handleActivation = () => {
    if (user && config) {
      const updatedData = {
        role: UserRole.active,
        balance: user.balance - config.baseFee,
      };
      updateData("/all-ref", updatedData).then(() => signOut());
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-white rounded-t-3xl flex flex-col md:flex-row gap-8 justify-center items-center">
      <div className="w-full md:w-1/2 max-w-lg flex justify-center items-center rounded overflow-hidden">
        <iframe
          id="bangla-video"
          className="w-full h-[300px]"
          src="https://www.youtube.com/embed/TugUhMPs-5w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>

      <div className="w-full md:w-1/2 max-w-lg flex flex-col justify-center">
        <Title variant="H2" className="py-5 font-bold">
          Activation point
        </Title>
        <div className="flex gap-4 justify-center items-center">
          {user && config && user.role === UserRole.inactive && (
            <div className="my-5">
              {user.balance < config.baseFee ? (
                // <CommonText>
                //   You need more &#2547; {config.baseFee - user.balance} to
                //   Activate❗
                // </CommonText>
                <CommonText>
                  {console.log(config.baseFee - user.balance)}
                  You need more {config.baseFee - user.balance} to Activate❗
                </CommonText>
              ) : (
                <Button
                  variant="secondary"
                  className="mx-auto"
                  onClick={handleActivation}
                >
                  Request to Activate
                </Button>
              )}
            </div>
          )}
          {/* <Button
          variant="secondary"
          className="text-lg sm:text-xl lg:text-2xl bg-primary font-normal px-5 sm:px-8 lg:px-10 py-4 rounded-xl"
        >
          Buy Now
        </Button>
        <Button
          variant="secondary"
          className="text-lg sm:text-xl lg:text-2xl bg-primary font-normal px-5 sm:px-8 lg:px-10 py-4 rounded-xl"
        >
          Join Class
        </Button> */}
          {/* TODO: Add Link */}
        </div>
        <Image className="w-full mt-8" src={how2buy} alt="" />
      </div>
    </section>
  );
};
