import { cookies } from "next/headers";
import Session from "@/models/Session";
import User from "@/models/User";

export async function getSession() {
  const cookieStore = await cookies();
  
  const sessionId = cookieStore.get("sessionId")?.value;
  if (!sessionId) { return null; }

  const session = await Session.findOne({ sessionId });
  if (!session) { return null; }

  if (session.expiresAt < new Date()) {
    return null;
  }

  return session;
}


export async function getCurrentUser(){
  const session= await getSession();
  if(!session){return null;}
  const user= await User.findById(session.userId).select("-password");
  if(!user){return null;}
  return user;
}





// simplified example
// const sessionId = cookies().get("sessionId");
// const session = await Session.findOne({sessionId});
// const user = await User.findById(session.userId);
// return user;

// const session = await getSession();
//  console.log(user); ali,email,password
// if(!session) {return null;}
// return getUserFromDatabase(session.userId);




