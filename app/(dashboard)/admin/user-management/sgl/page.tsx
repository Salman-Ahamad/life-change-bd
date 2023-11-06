"use client";

import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { toast } from "react-toastify";

import { DataTable, Header, THeader, Tbody } from "@/components";
import { getDataFn, updateData, useGetData } from "@/hooks";
import { IActionFn, INavItem, IUser } from "@/interface";
import { Button, Container, Title } from "@/universal";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/admin",
  },
  {
    label: "Request",
    link: "/admin/user-management/sgl/request",
  },
];

const SubAdmin = () => {
  const [activeUsers, setActiveUsers] = useState<IUser[]>([]);
  const [sglId, setSglId] = useState("");
  const [sgl, setSgl] = useState<IUser>();
  const [students, setStudents] = useState<IUser[]>([]);
  const [users, setUsers] = useState<IUser[]>(
    activeUsers?.filter(({ settings }) => !settings.sgl)
  );
  const [updateBtn, setUpdateBtn] = useState(true);

  useGetData("/user/gl/all", setActiveUsers);

  useEffect(() => {
    if (activeUsers) {
      setUsers(activeUsers?.filter(({ settings }) => !settings.sgl));
    }
  }, [activeUsers]);

  const handleGetSgl = () => {
    getDataFn(`/user/sgl/${sglId}`, setSgl);
    getDataFn(`/user/sgl?id=${sglId}`, setStudents, true);
    setSglId("");
  };

  const handleAddStudent = ({ user }: IActionFn) => {
    if (sgl?.userId) {
      setUpdateBtn(false);
      if (user) {
        setUsers((prv) => prv.filter((prvUser) => prvUser.id !== user.id));
        setStudents((prv) => [...prv, user]);
      }
    } else {
      toast.error("Group Leader not found");
    }
  };

  const handleRemove = (user: IUser) => {
    setUpdateBtn(false);
    if (sgl) {
      updateData(`/user/${user.id}`, {
        "settings.sgl": "",
      }).then(() => {
        setUsers((prv) => [...prv, user]);
        setStudents((prv) => prv.filter((prvUser) => prvUser.id !== user.id));
      });
    } else {
      toast.error("Group Leader not found");
    }
  };

  const handleUpdateDb = () => {
    if (sgl) {
      students.map((student: IUser) =>
        updateData(`/user/${student.id}`, {
          "settings.sgl": sgl.userId,
        }).then(() => setUpdateBtn(true))
      );
    }
  };

  return (
    <main>
      <Header navData={navData} />
      <Title variant="H3" className="capitalize py-6">
        Welcome to Life Change Bd
      </Title>
      <Container>
        <Title variant="H4" className="capitalize mb-1">
          Find Senior Group Leader Id
        </Title>

        <div className="flex flex-col md:flex-row justify-center items-center gap-1 mb-5">
          <input
            type="text"
            value={sglId}
            onChange={(e) => setSglId(e.target.value)}
            className="focus:outline-none border border-primary px-1.5 py-0.5 rounded-md w-full md:w-auto"
          />
          <Button
            variant="secondary"
            disabled={sglId.length === 0}
            onClick={handleGetSgl}
            className="disabled:opacity-40 w-full md:w-auto disabled:cursor-not-allowed"
          >
            Search
          </Button>
        </div>

        {sgl && (
          <>
            <div className="flex justify-center items-center gap-2.5 mb-5 flex-wrap">
              <Title
                variant="H5"
                className="capitalize flex items-center justify-center"
              >
                Name: {sgl?.firstName}&nbsp;
                {sgl?.lastName} - Id: {sgl?.userId}
              </Title>
              <Button
                variant="secondary"
                disabled={updateBtn}
                onClick={handleUpdateDb}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Update sgl List
              </Button>
            </div>

            {students?.length !== 0 && (
              <div className="rounded-lg overflow-x-auto">
                <table className="w-full max-w-xl mx-auto rounded-t-md overflow-hidden mb-5 overflow-x-auto">
                  <thead className="bg-info text-gray-50 font-medium">
                    <tr>
                      <THeader label="No" />
                      <THeader label="User Id" />
                      <THeader label="Name" />
                      <THeader label="Action" />
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y text-center border-b-2 border-info">
                    {students?.map((student, i) => (
                      <tr key={i}>
                        <Tbody label={String(i + 1)} />
                        <Tbody label={student.userId} />
                        <Tbody
                          label={student.firstName + " " + student.lastName}
                        />

                        <Tbody
                          label={
                            <div className="flex gap-1.5">
                              <Button
                                onClick={() => handleRemove(student)}
                                variant="secondary"
                                className="bg-red-500 hover:bg-red-600 transition-all delay-200 px-1 py-1 flex gap-0.5 justify-center items-center rounded-md text-xs mx-auto"
                              >
                                Remove&nbsp;
                                <RiDeleteBin2Line />
                              </Button>
                            </div>
                          }
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </Container>
      <Container>
        <Title variant="H4" className="capitalize -mb-10">
          Group Leader List
        </Title>

        {users.length !== 0 && (
          <DataTable
            tableData={users}
            tableHeaders={["No", "id", "Name", "Joining Time"]}
            dataProperties={["userId", "firstName", "createdAt"]}
            actionFn={handleAddStudent}
            addFullUser
            actionBtn={
              <Button variant="secondary" className="text-xs">
                Add
              </Button>
            }
          />
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;
