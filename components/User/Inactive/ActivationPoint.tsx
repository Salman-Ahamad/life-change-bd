import { how2buy } from "@/lib/assets";
import { Button, Title } from "@/universal";
import Image from "next/image";

export const ActivationPoint = () => (
  <section className="w-full py-16 px-4 bg-white rounded-t-3xl flex flex-col md:flex-row gap-8 justify-center items-center">
    {/* <div className="w-full md:w-1/2 max-w-lg flex justify-center items-center rounded overflow-hidden">
      <iframe
        id="bangla-video"
        className="w-full h-[300px]"
        src="https://www.youtube.com/embed/3772N6My12o"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div> */}

    <div className="w-full md:w-1/2 max-w-lg flex flex-col justify-center">
      <Title variant="H2" className="py-5 font-bold">
        Activation point
      </Title>
      <div className="flex gap-4 justify-center items-center">
        <Button
          variant="secondary"
          className="text-lg sm:text-xl lg:text-2xl bg-primary font-normal px-5 sm:px-8 lg:px-10 py-4 rounded-xl"
        >
          {/* TODO: Add Link */}
          Buy Now
        </Button>
        <Button
          variant="secondary"
          className="text-lg sm:text-xl lg:text-2xl bg-primary font-normal px-5 sm:px-8 lg:px-10 py-4 rounded-xl"
        >
          {/* TODO: Add Link */}
          Join Class
        </Button>
      </div>
      <Image className="w-full mt-8" src={how2buy} alt="" />
    </div>
  </section>
);
