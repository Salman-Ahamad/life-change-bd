"use client";

import { useEffect, useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { toast } from "react-toastify";

import { DataTable, Header, THeader, Tbody } from "@/components";
import { getDataFn, updateData, useGetData } from "@/hooks";
import { IActionFn, INavItem, IUser } from "@/interface";
import { BackButton, Button, Container, Title } from "@/universal";

const navData: INavItem[] = [
  {
    label: <BackButton />,
    link: "/admin",
  },
  {
    label: "Request",
    link: "/admin/user-management/gl/request",
  },
];

const SubAdmin = () => {
  const [activeUsers, setActiveUsers] = useState<IUser[]>([]);
  const [glId, setGlId] = useState("");
  const [gl, setGl] = useState<IUser>();
  const [students, setStudents] = useState<IUser[]>([]);
  const [users, setUsers] = useState<IUser[]>(
    activeUsers?.filter(({ settings }) => !settings.gl)
  );
  const [updateBtn, setUpdateBtn] = useState(true);

  useGetData("/user/active", setActiveUsers);

  useEffect(() => {
    if (activeUsers) {
      setUsers(activeUsers?.filter(({ settings }) => !settings.gl));
    }
  }, [activeUsers]);

  const handleGetGl = () => {
    getDataFn(`/user/gl/${glId}`, setGl);
    getDataFn(`/user/gl?id=${glId}`, setStudents, true);
    setGlId("");
  };

  const handleAddStudent = ({ user }: IActionFn) => {
    if (gl?.userId) {
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
    if (gl) {
      updateData(`/user/${user.id}`, {
        "settings.gl": "",
      }).then(() => {
        setUsers((prv) => [...prv, user]);
        setStudents((prv) => prv.filter((prvUser) => prvUser.id !== user.id));
      });
    } else {
      toast.error("Group Leader not found");
    }
  };

  const handleUpdateDb = () => {
    if (gl) {
      students.map((student: IUser) =>
        updateData(`/user/${student.id}`, {
          "settings.gl": gl.userId,
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
          Find Group Leader Id
        </Title>

        <div className="flex flex-col md:flex-row justify-center items-center gap-1 mb-5">
          <input
            type="text"
            value={glId}
            onChange={(e) => setGlId(e.target.value)}
            className="focus:outline-none border border-primary px-1.5 py-0.5 rounded-md w-full md:w-auto"
          />
          <Button
            variant="secondary"
            disabled={glId.length === 0}
            onClick={handleGetGl}
            className="disabled:opacity-40 w-full md:w-auto disabled:cursor-not-allowed"
          >
            Search
          </Button>
        </div>

        {gl && (
          <>
            <div className="flex justify-center items-center gap-2.5 mb-5 flex-wrap">
              <Title
                variant="H5"
                className="capitalize flex items-center justify-center"
              >
                Name: {gl?.firstName}&nbsp;
                {gl?.lastName} - Id: {gl?.userId}
              </Title>
              <Button
                variant="secondary"
                disabled={updateBtn}
                onClick={handleUpdateDb}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Update gl List
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
          Active User List
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
