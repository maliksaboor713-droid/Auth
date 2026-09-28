import { cookies } from "next/headers";

const { Timestamp } = require("mongodb");

const sessionSchema= new mongoose.Schema(
  {
    sessionId:{ type:String,required:true,unique:true },
    userId:{type:mongoose.Schema.types.OdjectId,required:true,},
    expiresAt:{type:Date,required:true}
  },{Timestamps:true}
)
const Session= mongoose.models.Session || mongoose.model("Session",sessionSchema);
// export default Session;

const sessionId= await Sesssion.cryptoBytes(32).toString("hex")
const expiresAt= new Date(Date.now()+7 *24 *60 *60 *1000)
await Session.create({sessionId,expiresAt,userId: user._id})

const cookiesStore= await cookies();
cookiesStore.set("sessionId",sessionId,{
  httpOnly:true,
  secure: process.env.NODE_ENV === "production",
  path:"/",
  sameSite:"lax",
  expires:expiresAt,
})


// "Is this session valid?"
// "Is this user logged in, and what is their session?"
export default async function getSession() {
  const cookiesStore= await cookies();
  // The cookie identifies the session. The session identifies the user.
  const sessionId= await cookiesStore.get("sssionId")?.value;
    if(!sessionId){return null;}
  const session= await Session.findOne({sessionId});
    if(!session){return null;}
  return session;
}
// "Which user does this valid session belong to?"
export default async function getUserId() {
  const session= await getSession();
  const user= await User.findbyid(session.userId).select("-password");
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


// getCurrentUser
// reading the cookie
// finding the session
// checking that the session exists
// checking expiration
// finding the User


//  Cookie: “Which session should I look at?”
// 📋 Session: “This session belongs to user 123.”
// 🗄️ MongoDB: “User 123 is Ahmed, email..., role..., etc.”
// 👤 getCurrentUser(): “Here's Ahmed.”
// 🏠 Dashboard: uses Ahmed's information.


// getSession()
//      ↓
// gives session information

// getCurrentUser()
//      ↓
// gives the actual user


// One-line memory trick
// Cookie identifies → Session remembers → getSession() reads session → getCurrentUser() gets the actual user.
//                  LOGIN
//                    ↓
//           Server verifies user
//                    ↓
//            Creates SESSION
//                    ↓
//        Sends SESSION COOKIE
//                    ↓
//               Browser
//                    ↓
//        stores cookie 🍪
//                    ↓
//       User visits /dashboard
//                    ↓
//         Cookie sent to server
//                    ↓
//           getSession()
//                    ↓
//        "Who is logged in?"
//                    ↓
//        getCurrentUser()
//                    ↓
//         "Give me that user"
//                    ↓
//              👤 Ahmed
