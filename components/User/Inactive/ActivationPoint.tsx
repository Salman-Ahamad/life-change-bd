import { how2buy } from "@/lib/assets";
import { Button, MainContainer } from "@/universal";
import Image from "next/image";
import React from "react";

export const ActivationPoint = () => {
  return (
    <section className="bg-black">
      <div className="w-full py-16 px-4 bg-white rounded-t-3xl flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="w-full md:w-1/2 max-w-lg flex justify-center items-center">
          <iframe
            id="bangla-video"
            className="w-full h-[300px]"
            src="https://www.youtube.com/embed/3772N6My12o"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-lg flex flex-col justify-center">
          <div className="py-8 flex flex-col justify-center items-center">
            <h3 className="py-5 mb-10 text-3xl font-bold">Activation point</h3>
            <div className="flex gap-4">
              <Button variant="secondary">Buy Now</Button>
              <Button variant="secondary">Join Class</Button>
            </div>
          </div>
          <Image className="w-full" src={how2buy} alt="" />
        </div>
      </div>
    </section>
  );
};
