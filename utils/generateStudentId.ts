import { User } from "@/models";

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne({}, { id: 1, _id: 0 }).sort({
    createdAt: -1,
  });

  return lastStudent?.id ? lastStudent.id.substring(3) : undefined;
};

export const generateStudentId = async (): Promise<string> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(4, "0"); //0000
  //increment by 1
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(4, "0");
  const year = new Date().getFullYear().toString().slice(2);

  incrementedId = `${year}${incrementedId}`;

  return incrementedId;
};
