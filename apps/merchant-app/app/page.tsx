import { prisma } from "@repo/orm/client"
import BalanceFetch from "../components/BalanceFetch";

export default async function Page() {
  const users = await prisma.user.findMany()

  return (
    <div className="bg-amber-600 text-black">
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email} - {user.name ?? "no name"}</li>
        ))}
      </ul>
      <BalanceFetch/>
    </div>
  );
}
