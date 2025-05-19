import { StaticImage } from "../image";

const Logo = () => {
  return (
    <StaticImage
      src="png/logo.png"
      alt="Inflexion AI"
      width={39}
      height={38.25}
    />
  );
};

export default Logo;
