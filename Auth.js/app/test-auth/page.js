// import {getCurrentUser} from "@/lib/auth";
import { getCurrentUser } from "@/lib/auth";

export default async function TestAuthPage() {
  const user= await getCurrentUser();
  return (
    <main>
      <h1>Test Authentication</h1>
      {user ? (
        <div>
          <h1>Logged In!</h1>
          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
        </div>
      ):(
        <div>
          <h1>User Not logged-in</h1>
        </div>
      )}
    </main>
  )
}
