"use client";

import { Header } from "@/components";
import { createData, updateData, useCurrentUser, useGetData } from "@/hooks";
import { IAppConfig, INavItem } from "@/interface";
import { BackButton, Button, CommonText, Container, Title } from "@/universal";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { toast } from "react-toastify";

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
  const user = useCurrentUser(true);
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState("");
  const [number, setNumber] = useState("");
  const [config, setConfig] = useState<IAppConfig>();

  useGetData("/config", setConfig, true);

  const handleWithdraw = () => {
    if (user) {
      if (number.length === 11 && user.balance >= amount) {
        createData(`/withdrawal`, { amount, method, number }).then(() =>
          window.location.reload()
        );
      } else {
        toast.error("Number must be 11 characters");
      }
    }
  };

  const handleAddPending = () => {
    if (user && user.balance >= 200) {
      updateData("/user/withdrawal-fee", {}).then(() =>
        window.location.reload()
      );
    } else {
      toast.error("Below minimum balance 🤑200");
    }
  };

  return (
    <>
      <Header navData={navData} />
      <Title variant="H3" className="capitalize my-10">
        Withdrawal Balance &#2547; {user?.balance}
      </Title>

      <Container className="flex gap-5 items-end justify-center mt-10">
        <div className="w-auto flex flex-col gap-5">
          <div>
            <label className="pl-1.5">Amount</label>
            <input
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
              className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
            />
          </div>
          <div>
            <label className="pl-1.5">Number</label>
            <input
              type="text"
              onChange={(e) => setNumber(e.target.value)}
              className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
            />
          </div>

          <div className="flex flex-col justify-center items-start">
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
          <Button
            variant="secondary"
            onClick={handleWithdraw}
            disabled={!user?.settings.withdrawalFee}
            className="py-[7px] lg:py-2.5 px-3 w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            withdraw
          </Button>
        </div>
      </Container>
      {!user?.settings.withdrawalFee && (
        <Container className="flex flex-col justify-center items-center gap-2.5 mt-5">
          <CommonText className="text-center text-green-600">
            Before withdraw, please <br />
            pay pending fee &#2547;
            {config?.withdrawalFee}
          </CommonText>
          <Button
            variant="secondary"
            className="px-10"
            onClick={handleAddPending}
          >
            Accept
          </Button>
        </Container>
      )}
    </>
  );
};

export default Withdrawal;
