"use client";

import { Header } from "@/components";
import { createData, updateData, useCurrentUser } from "@/hooks";
import { INavItem } from "@/interface";
import { BackButton, Button, Container, Title } from "@/universal";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active/user/profile",
  },
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/active",
  },
];

const Withdrawal = () => {
  const user = useCurrentUser();
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState("");

  const handleWithdraw = () => {
    if (user) {
      updateData("/user", { balance: user.balance - amount }, true).then(() =>
        createData(`/withdrawal`, { amount, method })
      );
    }
  };
  return (
    <>
      <Header navData={navData} />
      <Title variant="H3" className="capitalize my-10">
        Withdrawal Balance &#2547; {user?.balance}
      </Title>

      <Container className="flex gap-5 items-end justify-center mt-10">
        <div className="w-auto">
          <div>
            <label className="pl-1.5">Withdrawal Amount </label>
            <input
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
              className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
            />
          </div>
          <div className="flex flex-col justify-center items-start mt-2.5">
            <label className="pl-1.5">Method </label>

            <select
              name=""
              id=""
              onChange={(e) => setMethod(e.target.value)}
              className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
            >
              <option value="bKash">Withdrawal Method</option>
              <option value="bKash">bKash</option>
              <option value="Nagad">Nagad</option>
              <option value="Rocket">Rocket</option>
            </select>
          </div>
        </div>
        <Button
          variant="secondary"
          className="py-[7px] lg:py-2.5 px-3"
          onClick={handleWithdraw}
        >
          Save
        </Button>
      </Container>
    </>
  );
};

export default Withdrawal;
