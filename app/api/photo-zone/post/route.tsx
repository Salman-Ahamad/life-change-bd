import { connectDb } from "@/config";
import { Post } from "@/models/postModel";
import { ApiResponse } from "@/utils";
import getCurrentUser from "@/utils/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const posts = await Post.find()
      .populate({
        path: "author",
        select: "firstName lastName image id", // Specify the fields you want to include
      })
      .sort({ createdAt: -1 }); // Sort by createdAt in descending order;

    if (!posts) {
      return ApiResponse(404, "Posts not found❗");
    }

    return ApiResponse(200, "Post get success 🧹", posts);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const request = await req.json();

    const { postImg, postText } = await request;

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    }

    const newPost = await Post.create({
      author: user.id,
      imageUrl: postImg,
      text: postText,
    });

    if (!newPost) {
      return ApiResponse(404, "DB error❗");
    }

    return ApiResponse(200, "Post Create successfully 🧹", newPost);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const PATCH = async (req: NextRequest, res: NextResponse) => {
  try {
    const { postId, likes } = await req.json();

    // Get Current User
    const user = await getCurrentUser();

    if (!user) {
      return ApiResponse(404, "User not found❗");
    } else if (!user.role) {
      return ApiResponse(401, "Denied❗ unauthorized user 😠😡😠");
    }

    const result = await Post.updateOne(
      { _id: postId },
      { likes },
      {
        new: true,
      }
    );

    return ApiResponse(200, "User update successfully 🛠️✅", result);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  try {
    const request = await req.json();

    return ApiResponse(200, "Post Deleted successfully 🧹", request);
  } catch (error: any) {
    return ApiResponse(400, error.message);
  }
};
