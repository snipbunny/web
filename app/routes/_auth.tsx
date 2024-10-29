import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getCurrentUser } from "~/services/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getCurrentUser();
  if (user) return redirect("/dashboard/");
  return null;
}

export default function AuthPortal() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}
