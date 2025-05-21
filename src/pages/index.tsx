import { useForm } from "react-hook-form";

// layout
import Footer from "@/layout/footer";
import Library from "@/layout/library";
import Navbar from "@/layout/navbar";
import Wrapper from "@/layout/wrapper";

const Home = () => {
  const { register, watch } = useForm<{ search: string }>();
  const search = watch("search");

  return (
    <Wrapper>
      <Navbar register={register("search")} />
      <Library search={search} />
      <Footer />
    </Wrapper>
  );
};

export default Home;
