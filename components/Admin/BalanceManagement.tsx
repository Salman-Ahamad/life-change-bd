"use client";

import { updateData, useGetData } from "@/hooks";
import { IAppConfig } from "@/interface";
import { Button, Container, Title } from "@/universal";
import { useState } from "react";
import { toast } from "react-toastify";

export const BalanceManagement = () => {
  const [config, setConfig] = useState<IAppConfig>();
  const [balanceField, setBalanceField] = useState("");
  const [margeBalance, setMargeBalance] = useState(0);

  useGetData("/config", setConfig, true);

  const handleMarge = () => {
    if (config)
      if (margeBalance !== 0) {
        if (balanceField === "pending") {
          if (config.totalPendingFee >= margeBalance) {
            updateData("/config", {
              $inc: {
                mainBalance: margeBalance,
                totalPendingFee: -margeBalance,
              },
            }).then(() => window.location.reload());
          } else {
            toast.error("Insufficient balance!");
            setBalanceField("");
            setMargeBalance(0);
          }
        } else if (balanceField === "withdraw") {
          if (config.totalWithdraw >= margeBalance) {
            updateData("/config", {
              $inc: {
                mainBalance: -margeBalance,
                totalWithdraw: -margeBalance,
              },
            }).then(() => window.location.reload());
          } else {
            toast.error("Insufficient balance!");
            setBalanceField("");
            setMargeBalance(0);
          }
        }
      } else {
        toast.error("Please Provide a pending balance");
      }

    setBalanceField("");
    setMargeBalance(0);
  };

  return (
    <Container className="my-10 mb-20 flex flex-col items-start justify-center max-w-xs gap-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <Title
          variant="H5"
          className="capitalize flex gap-5 justify-start w-full"
        >
          <span>Main Balance: </span> <span>&#2547; {config?.mainBalance}</span>
        </Title>
        <Title
          variant="H5"
          className="capitalize flex gap-5 justify-start w-full"
        >
          <span>Pending Fees: </span>
          <span>&#2547; {config?.totalPendingFee}</span>
        </Title>
        <Title
          variant="H5"
          className="capitalize flex gap-5 justify-start w-full"
        >
          <span>Withdraw Amount: </span>
          <span>&#2547; {config?.totalWithdraw}</span>
        </Title>
      </div>

      <div className="max-w-xs">
        <label htmlFor="">Marge to Main Balance</label>
        <div className="flex gap-1">
          <select
            onChange={(e) => setBalanceField(e.target.value)}
            className="outline-none text-black text-base md:text-lg max-w-[150px] border border-primary rounded-[5px] py-1 px-2"
          >
            <option value="">Select item</option>
            <option value="pending">Pending Fee</option>
            <option value="withdraw">Withdraw</option>
          </select>
          <input
            type="number"
            value={margeBalance}
            onChange={(e) => setMargeBalance(e.target.valueAsNumber)}
            className="outline-none text-black text-base md:text-lg max-w-[150px] border border-primary rounded-[5px] py-1 px-2"
          />
        </div>
        <Button
          onClick={handleMarge}
          variant="secondary"
          className="w-full mt-2.5"
        >
          Marge To Main
        </Button>
      </div>
    </Container>
  );
};
