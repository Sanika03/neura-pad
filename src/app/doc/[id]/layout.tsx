import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function DocLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <div>{children}</div>; 
}
export default DocLayout;
