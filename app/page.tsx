import { redirect } from "next/navigation";
import React from "react";

function page() {
  redirect("/docs");
  return <div>page</div>;
}

export default page;
