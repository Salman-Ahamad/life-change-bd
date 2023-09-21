import { facebook, pinterest, twitter } from "@/lib/assets";
import { Title } from "@/universal";
import Image from "next/image";

export const Footer = () => (
  <footer className="bg-primary py-20 text-white">
    <Title variant="H2" className="capitalize">
      Follow our CEO
    </Title>
    <div className="flex justify-center items-center gap-5 lg:gap-10 mt-14">
      {[facebook, twitter, pinterest].map((icon, i) => (
        <Image key={i} src={icon} className="w-10 h-10" alt="" />
      ))}
    </div>
  </footer>
);
