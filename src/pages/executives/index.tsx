import { useForm } from "react-hook-form";

// layout
import Executive from "@/layout/executive";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import Wrapper from "@/layout/wrapper";

const ExecutivesPage = () => {
  const { register, watch } = useForm<{ search: string }>();
  const search = watch("search");

  return (
    <Wrapper>
      <Navbar register={register("search")} />
      <Executive search={search} />
      <Footer />
    </Wrapper>
  );
};

export default ExecutivesPage;
