import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/logo.png" width={48} height={48} alt="Pulau Kembang logo" />
    </Link>
  );
};

export default Logo;
