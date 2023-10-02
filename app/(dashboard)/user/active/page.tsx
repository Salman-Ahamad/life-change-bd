import { Header } from "@/components";
import {
  LiveEarningClass,
  LiveLearningClass,
  ReferenceMeetingLink,
  SupportLink,
  SupportTeam,
} from "@/components/User/Active";
import { navData } from "@/lib/data";

const Active = () => {
  return (
    <>
      <Header navData={navData.active} />
      <div className="flex items-center justify-center py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {/* {`✅ You are an active Seller 🏅 , well done


Don't share your personal information with anyone even our employees and Student's and Seller and also don't share your personal information on any post Like phone number password and any kind of OTP.

Any kind of problem join here for solution
Tele`} */}
          <SupportLink />
          <SupportTeam />
          <LiveEarningClass />
          <LiveLearningClass />
          <ReferenceMeetingLink />
        </div>
      </div>
    </>
  );
};

export default Active;
