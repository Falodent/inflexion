import { useForm } from "react-hook-form";

// layout
import Footer from "@/layout/footer";
import Library from "@/layout/library";
import Navbar from "@/layout/navbar";

const Home = () => {
  const { register, watch } = useForm<{ search: string }>();
  const search = watch("search");

  console.log(process.env.NODE_ENV)

  return (
    <>
      <Navbar register={register("search")} />
      <Library search={search} />
      <Footer />
    </>
  );
};

export default Home;
