"use client";

import { Header, Slider } from "@/components";
import { useState } from "react";

import { SlideUploader } from "@/components/Admin";
import { deleteData, useGetData } from "@/hooks";
import { INavItem, ISlider } from "@/interface";
import { Container } from "@/universal";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { toast } from "react-toastify";

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
  {
    label: "Change Password",
    link: "/admin/change-password",
  },
];

const Dashboard = () => {
  const [sliders, setSliders] = useState<ISlider[]>();

  useGetData("/config/slider", setSliders, true);

  const handleDelete = (id: string) => {
    const result: boolean = window.confirm(
      "Do you want to confirm this action?"
    );

    if (result) {
      deleteData(`/config/slider?id=${id}`, {}).then(() =>
        window.location.reload()
      );
    } else {
      toast.info("User clicked Cancel");
    }
  };

  return (
    <main>
      <Header navData={adminNav} />

      <Container className="flex flex-col justify-center items-center gap-10 my-10">
        <div className="max-w-lg w-full mx-auto flex gap-6 justify-center">
          {sliders && sliders?.length !== 0 && <Slider slides={sliders} />}
        </div>

        <div className="flex flex-col justify-center items-start gap-3 w-fit">
          <SlideUploader />
          {sliders?.map(({ imgUrl, id }, i) => (
            <div
              key={i}
              className="w-full flex justify-between items-center gap-2.5"
            >
              <Image
                src={imgUrl}
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded"
                alt=""
              />
              <div className="text-red-400 font-bold">Delete Slide {i + 1}</div>
              <div
                onClick={() => handleDelete(id)}
                className="rounded border border-red-600 text-red-600 text-2xl flex justify-center items-center p-1 cursor-pointer"
              >
                <RiDeleteBin2Line />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Dashboard;
