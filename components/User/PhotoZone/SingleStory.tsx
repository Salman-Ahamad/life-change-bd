import Image from "next/image";

const SingleStory = ({ title, postImg }: any) => {
  return (
    <div
      className={`relative w-[112px] shadow-md rounded-[15px] pb-2 bg-cover shrink-0 singleStory`}
    >
      <Image
        width={40}
        height={40}
        className="w-[40px] h-[40px] rounded-full object-cover outline outline-primary m-[14px]"
        src={postImg}
        alt={title}
      />
      <p className="text-white absolute w-[100%] text-center bottom-2">
        {title}
      </p>
    </div>
  );
};

export default SingleStory;
