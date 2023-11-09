"use client";

import { THeader, Tbody } from "@/components";
import { updateData, useGetData } from "@/hooks";
import { IRequest } from "@/interface";
import { Button, Container, Title } from "@/universal";
import { useState } from "react";

const Request = () => {
  const [requestUser, setRequestUser] = useState<IRequest[]>();

  useGetData("/request", setRequestUser);

  const handleAdd = (request: IRequest) => {
    updateData(`/request`, {
      userId: request.userId,
      reqId: request.id,
      "settings.gl": request.seniorId,
    }).then(() => window.location.reload());
  };

  return (
    <Container className="mt-10">
      <Title variant="H2" className="capitalize">
        Request List
      </Title>

      {requestUser?.length !== 0 && (
        <div className="rounded-lg overflow-x-auto mt-5 rounded-t-md w-full max-w-xl mx-auto">
          <table className="w-full max-w-xl mx-auto rounded-t-md overflow-hidden mb-5 overflow-x-auto">
            <thead className="bg-info text-gray-50 font-medium">
              <tr>
                <THeader label="No" />
                <THeader label="Gl Id" />
                <THeader label="User Id" />
                <THeader label="Action" />
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y text-center border-b-2 border-info">
              {requestUser?.map((student, i) => (
                <tr key={i}>
                  <Tbody label={String(i + 1)} />
                  <Tbody label={student.seniorId} />
                  <Tbody label={student.userId} />

                  <Tbody
                    label={
                      <div className="flex gap-1.5">
                        <Button
                          onClick={() => handleAdd(student)}
                          variant="secondary"
                          className="bg-sky-400 hover:bg-sky-500 transition-all delay-200 px-1 py-1 flex gap-0.5 justify-center items-center rounded-md text-xs mx-auto"
                        >
                          Accept&nbsp;&nbsp;✔️
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
    </Container>
  );
};

export default Request;
