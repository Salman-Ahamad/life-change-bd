"use client";
import { updateData } from "@/hooks";
import { IPopUp } from "@/interface";
import { Button, Label } from "@/universal";
import { FC, useState } from "react";

export const PopUp: FC<IPopUp> = ({ open, setOpen, user }) => {
  const [userId, setUserId] = useState(user.settings.trainer);

  const handleAddTrainer = () => {
    updateData(`/user/${user.id}`, {
      "settings.trainer": userId,
    });
  };

  return (
    <section
      className={`${
        open ? "flex" : "hidden"
      } absolute w-screen h-screen justify-center items-center bg-black bg-opacity-50`}
    >
      <div className="w-fit h-fit p-5 rounded-lg shadow-lg relative bg-white">
        <div
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          ❌
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-fit mx-auto">
          <div className="flex flex-col justify-center items-center gap-2.5">
            <Label className="font-semibold">Add Trainer</Label>
            <input
              type="text"
              value={userId}
              placeholder="Trainer ID"
              onChange={(e) => setUserId(e.target.value)}
              className="focus:outline-none border border-primary px-1.5 py-0.5 rounded-md sm:w-auto"
            />
          </div>
          <Button
            variant="secondary"
            disabled={userId.length === 0}
            onClick={handleAddTrainer}
            className="disabled:opacity-40 w-full"
          >
            Add
          </Button>
        </div>
      </div>
    </section>
  );
};
