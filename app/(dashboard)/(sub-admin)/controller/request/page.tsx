"use client";

import { IUser } from "@/interface";
import { useState } from "react";

const Request = () => {
  const [students, setStudents] = useState<IUser[]>();

  //   useGetData("/user/inactive", setInactiveUsers, true);

  return (
    <div>
      <h1>request</h1>
    </div>
  );
};

export default Request;
