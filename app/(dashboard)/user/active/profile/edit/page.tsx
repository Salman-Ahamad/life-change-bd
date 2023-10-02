import { Header } from "@/components";
import { navData } from "@/lib/data";
import { NextPage } from "next";

const Edit: NextPage = () => (
  <div>
    <Header navData={navData.profile} />
    <h1 className="text-4xl font-semibold my-10 text-center">Edit Profile</h1>
    <h1>profile edit page</h1>
  </div>
);

export default Edit;
