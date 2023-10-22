"use client";

import { useState } from "react";
import { Header, Slider } from "@/components";

import { useCurrentUser, useGetData } from "@/hooks";
import { IAppConfig, INavItem } from "@/interface";
import { AiOutlineHome } from "react-icons/ai";
import SlideUploader from "@/components/Admin/SlideUploader";

const adminNav: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/admin",
  },
  {
    label: "User Management",
    link: "/admin/user-management",
  },
  {
    label: "Reports",
    link: "/admin/reports",
  },
  {
    label: "Action",
    link: "/admin/action",
  },
  {
    label: "Settings",
    link: "/admin/settings",
  },
];

const Dashboard = () => {
  const [config, setConfig] = useState<IAppConfig>();

  const user = useCurrentUser();
  useGetData("/config", setConfig);

  return (
    <main>
      <Header navData={adminNav} />

      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-4">
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide1"
              slides={config?.sliderImage}
              slideNo={0}
            />
          )}
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide2"
              slides={config?.sliderImage}
              slideNo={1}
            />
          )}
        </div>
        <div className="flex gap-4">
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide3"
              slides={config?.sliderImage}
              slideNo={2}
            />
          )}
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide4"
              slides={config?.sliderImage}
              slideNo={3}
            />
          )}
        </div>

        <div className="max-w-lg w-full mx-auto py-6 flex gap-6 justify-center">
          {config?.sliderImage && <Slider slides={config?.sliderImage} />}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
