import { redirect } from "next/navigation";

const IndexPage = async () => {
  redirect("/playground");
};

export default IndexPage;
