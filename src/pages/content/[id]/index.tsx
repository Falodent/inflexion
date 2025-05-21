import { useForm } from "react-hook-form";

// layout
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import FullContent from "@/layout/content";
import Wrapper from "@/layout/wrapper";

const ContentPage = () => {
  const { register } = useForm<{ search: string }>();

  return (
    <Wrapper>
      <Navbar register={register("search")} />
      <FullContent />
      <Footer />
    </Wrapper>
  );
};

export default ContentPage;
