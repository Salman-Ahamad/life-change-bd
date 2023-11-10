import { connectDb } from "@/config";
import { Assignment } from "@/models";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";

connectDb();

export const GET = async () => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(401, "Denied❗unauthorized 😠😡😠");
    }
    const SahihHolyQuran = "6527fd3fc52df568af38b43c";
    const PhotoEditing = "6527fd3fc52df568af38b43d";
    const VideoEditing = "6527fd3fc52df568af38b43e";
    const LeadGeneration = "6527fd3fc52df568af38b43f";
    const DigitalMarketing = "6527fd3fc52df568af38b440";
    const GraphicDesign = "6527fd3fc52df568af38b441";
    const PeopleManagement = "6527fd3fc52df568af38b442";
    const FacebookMarketing = "6527fd3fc52df568af38b443";
    const MailMarketing = "6527fd3fc52df568af38b444";
    const YouTubeContentCreating = "6527fd3fc52df568af38b444";

    const sahihHolyQuran = await Assignment.countDocuments({
      userId: user.id,
      courseId: SahihHolyQuran,
    });
    const photoEditing = await Assignment.countDocuments({
      userId: user.id,
      courseId: PhotoEditing,
    });
    const videoEditing = await Assignment.countDocuments({
      userId: user.id,
      courseId: VideoEditing,
    });
    const leadGeneration = await Assignment.countDocuments({
      userId: user.id,
      courseId: LeadGeneration,
    });
    const digitalMarketing = await Assignment.countDocuments({
      userId: user.id,
      courseId: DigitalMarketing,
    });
    const graphicDesign = await Assignment.countDocuments({
      userId: user.id,
      courseId: GraphicDesign,
    });
    const peopleManagement = await Assignment.countDocuments({
      userId: user.id,
      courseId: PeopleManagement,
    });
    const facebookMarketing = await Assignment.countDocuments({
      userId: user.id,
      courseId: FacebookMarketing,
    });
    const mailMarketing = await Assignment.countDocuments({
      userId: user.id,
      courseId: MailMarketing,
    });
    const youTubeContentCreating = await Assignment.countDocuments({
      userId: user.id,
      courseId: YouTubeContentCreating,
    });

    return ApiResponse(200, "Course update successfully 🛠️✅", {
      sahihHolyQuran,
      photoEditing,
      videoEditing,
      leadGeneration,
      digitalMarketing,
      graphicDesign,
      peopleManagement,
      facebookMarketing,
      mailMarketing,
      youTubeContentCreating,
    });
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
