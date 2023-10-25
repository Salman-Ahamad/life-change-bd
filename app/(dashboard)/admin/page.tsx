"use client";

import { Header, Slider } from "@/components";
import { useState } from "react";

import SlideUploader from "@/components/Admin/SlideUploader";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
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
  const user = useCurrentUser();
  console.log(user);

  const [config, setConfig] = useState<IAppConfig>();
  useGetData("/config", setConfig, true);
  const [slideImages, setSlideImages] = useState(
    config?.sliderImage || ["", "", "", ""]
  );

  const handleSlideImageUpdate = (item: number, imageUrl: string) => {
    console.log({ item, imageUrl });

    setSlideImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[item] = imageUrl;
      return updatedImages;
    });
  };

  return (
    <main>
      <Header navData={adminNav} />

      <Container className="flex flex-col justify-center items-center">
        <div className="flex gap-4">
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide1"
              slideImage={slideImages[0]}
              setSlideImage={(image: string) =>
                handleSlideImageUpdate(0, image)
              }
            />
          )}
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide2"
              slideImage={slideImages[1]}
              setSlideImage={(image: string) =>
                handleSlideImageUpdate(1, image)
              }
            />
          )}
        </div>
        <div className="flex gap-4">
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide3"
              slideImage={slideImages[2]}
              setSlideImage={(image: string) =>
                handleSlideImageUpdate(2, image)
              }
            />
          )}
          {config?.sliderImage && (
            <SlideUploader
              slideName="slide4"
              slideImage={slideImages[3]}
              setSlideImage={(image: string) =>
                handleSlideImageUpdate(3, image)
              }
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
