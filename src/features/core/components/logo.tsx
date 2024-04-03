import Image from "next/image";

import logo from "@/assets/logo.svg";

export const Logo = () => {
  return <Image src={logo} width={25} height={25} alt="Logo of connect4" />;
};
