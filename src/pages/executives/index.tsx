import Executive from "@/layout/executive";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { useForm } from "react-hook-form";

const ExecutivesPage = () => {
  const { register, watch } = useForm<{ search: string }>();
  const search = watch("search");

  return (
    <>
      <Navbar register={register("search")} />
      <Executive search={search} />
      <Footer />
    </>
  );
};

export default ExecutivesPage;
