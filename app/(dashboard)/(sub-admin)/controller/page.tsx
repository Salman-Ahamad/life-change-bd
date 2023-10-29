"use client";

import { DataTable, Header, THeader, Tbody } from "@/components";
import { getDataFn, updateData, useGetData } from "@/hooks";
import { IActionFn, INavItem, IUser } from "@/interface";
import { Button, Container, Title } from "@/universal";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiDeleteBin2Line } from "react-icons/ri";
import { toast } from "react-toastify";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/controller",
  },
  {
    label: "Profile",
    link: "/controller/profile",
  },
  {
    label: "Request",
    link: "/controller/request",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const SubAdmin = () => {
  const [inactiveUsers, setInactiveUsers] = useState<IUser[]>([]);
  const [consultantId, setConsultantId] = useState("");
  const [consultant, setConsultant] = useState<IUser>();
  const [students, setStudents] = useState<IUser[]>([]);
  const [users, setUsers] = useState<IUser[]>(
    inactiveUsers?.filter(({ settings }) => !settings.consultant)
  );
  const [updateBtn, setUpdateBtn] = useState(true);

  // const users = inactiveUsers?.filter(
  //   ({ settings }) => !settings.consultant
  // );

  useGetData("/user/inactive", setInactiveUsers);

  useEffect(() => {
    if (inactiveUsers) {
      setUsers(inactiveUsers?.filter(({ settings }) => !settings.consultant));
    }
  }, [inactiveUsers]);

  const handleGetConsultant = () => {
    getDataFn(`/user/consultant/${consultantId}`, setConsultant);
    getDataFn(`/user/consultant?id=${consultantId}`, setStudents, true);
    setConsultantId("");
  };

  const handleAddStudent = ({ user }: IActionFn) => {
    if (consultant) {
      setUpdateBtn(false);
      if (user) {
        setStudents((prv) => [...prv, user]);
      }
    } else {
      toast.error("Consultant not found");
    }
  };

  const handleRemove = (user: IUser) => {
    setUpdateBtn(false);
    if (consultant) {
      updateData(`/user/${user.id}`, {
        "settings.consultant": "",
      }).then(() => {
        setUsers((prv) => [...prv, user]);
        setStudents((prv) => prv.filter((prvUser) => prvUser.id !== user.id));
      });
    } else {
      toast.error("Consultant not found");
    }
  };

  const handleUpdateDb = () => {
    if (consultant) {
      students.map((student: IUser) =>
        updateData(`/user/${student.id}`, {
          "settings.consultant": consultant.userId,
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
          Consultant
        </Title>

        <div className="flex justify-center items-center gap-1 mb-5">
          <input
            type="text"
            value={consultantId}
            onChange={(e) => setConsultantId(e.target.value)}
            className="focus:outline-none border border-primary px-1.5 py-0.5 rounded-md w-[47%] sm:w-auto"
          />
          <Button
            variant="secondary"
            disabled={consultantId.length === 0}
            onClick={handleGetConsultant}
            className="disabled:opacity-40"
          >
            Search
          </Button>
        </div>

        {consultant && (
          <>
            <div className="flex justify-center items-center gap-2.5 mb-5">
              <Title
                variant="H5"
                className="capitalize flex items-center justify-center"
              >
                Name: {consultant?.firstName}&nbsp;
                {consultant?.lastName} - Id: {consultant?.userId}
              </Title>
              <Button
                variant="secondary"
                disabled={updateBtn}
                onClick={handleUpdateDb}
                className="disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Update Consultant List
              </Button>
            </div>

            {students?.length !== 0 && (
              <table className="w-full max-w-xl mx-auto rounded-t-md overflow-hidden mb-5">
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
            )}
          </>
        )}
      </Container>
      <Container>
        <Title variant="H4" className="capitalize -mb-10">
          Inactive User List
        </Title>

        {users.length !== 0 && (
          <DataTable
            tableData={users}
            tableHeaders={["No", "id", "Name", "Joining Time"]}
            dataProperties={["userId", "firstName", "createdAt"]}
            actionFn={handleAddStudent}
            addFullUser={setUsers}
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
