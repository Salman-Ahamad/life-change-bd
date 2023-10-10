import React from "react";
import { Header, Tost } from "@/components";
import { navData } from "@/lib";
import { NextPage } from "next";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { ChangeBaseFee, SearchUser } from "@/components/Settings";
import { Title } from "@/universal";

const Settings: NextPage = async () => {
  const user = await getCurrentUser();
  // console.log("User: ", user);

  const userRoll = user?.role || "inactive";

  return (
    <main>
      <Header navData={navData.active} />
      <Title variant="H2" className="pt-8">
        Settings
      </Title>
      <SearchUser role={userRoll} />
      {userRoll === "admin" && <ChangeBaseFee />}

      <div className="flex items-center justify-center py-12 px-6">
        <div className="">
          <p className="font-bold">List of Setting For ADMIN</p>
          <p>1. Search any user by id</p>
          <p>
            2. Change any user profile, his include change info, re-set PW,
            Change role, etc.
          </p>
          <p>3. Change Base Fee</p>
          <p>
            4. Generate/see Report monthly subscription, activation, deposit
            (total and by user)
          </p>
          <p className="font-bold">List of Setting For CONTROLLER</p>
          <p>5. Accept consultant change request</p>
          <p>6. Assign new consultant, GL, teacher</p>

          <p className="font-bold">List of Setting For CONSULTANT</p>
          <p>7. Search any user by id</p>
          <p>8. Send request to change the controller for any user</p>
          <p>9. Can see a list of his user</p>
          <p>10 Message: My lead, Message done, Working zone</p>

          <p className="font-bold">List of Setting For GL & TEACHER</p>
          <p>11. See student list</p>
          <p>12. Submit student attendance</p>
          <p>
            13. Create class link: Create meet link, cancel, schedule time and
            date etc.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Settings;
