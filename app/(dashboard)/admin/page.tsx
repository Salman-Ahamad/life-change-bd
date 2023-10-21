"use client";

import { Header, Slider } from "@/components";
import { useState } from "react";

import SlideUploader from "@/components/Admin/SlideUploader";
import { updateData, useGetData } from "@/hooks";
import { IAppConfig, INavItem } from "@/interface";
import { Container } from "@/universal";
import { AiOutlineHome } from "react-icons/ai";
import { getFileUploader } from "@/utils/actions/getFileUploade";

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
    label: "Balance",
    link: "/admin/balance",
  },
  {
    label: "Settings",
    link: "/admin/settings",
  },
];

const Dashboard = () => {
  const [config, setConfig] = useState<IAppConfig>();
  useGetData("/config", setConfig, true);

  const uploadImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
    slideNoFn: number
  ) => {
    event.preventDefault();
    console.log("1", { slideNoFn });
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      console.log("2", { slideNoFn });
      const uploadedFile = await getFileUploader(selectedFile);
      if (uploadedFile) {
        console.log("3", { slideNoFn });
        updateData("/config/upload-slide", {
          url: uploadedFile,
          index: slideNoFn,
        });
        // .then(() => window.location.reload());
      }
    }
  };

  return (
    <main>
      <Header navData={adminNav} />

      <Container className="flex flex-col justify-center items-center">
        <div className="flex gap-4">
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide1"
              slides={config?.sliderImage}
              slideNo={0}
              uploadImFn={uploadImage}
            />
          )}
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide2"
              slides={config?.sliderImage}
              slideNo={1}
              uploadImFn={uploadImage}
            />
          )}
        </div>
        <div className="flex gap-4">
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide3"
              slides={config?.sliderImage}
              slideNo={2}
              uploadImFn={uploadImage}
            />
          )}
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide4"
              slides={config?.sliderImage}
              slideNo={3}
              uploadImFn={uploadImage}
            />
          )}
        </div>

        <div className="max-w-lg w-full mx-auto py-6 flex gap-6 justify-center">
          {config?.sliderImage && <Slider slides={config?.sliderImage} />}
        </div>
      </Container>
    </main>
  );
};

export default Dashboard;
