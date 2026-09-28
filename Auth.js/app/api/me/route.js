import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUser();

  if (!user) {
    return Response.json(
      { succes:false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  return Response.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
  } catch (error) {
    return Response.json({
      message:"Invalid User Data",
    },{status:500});
  }
}
