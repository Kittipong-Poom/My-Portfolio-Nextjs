import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  const handleClick = (e) => {
    // ตรวจสอบว่าเราอยู่ในหน้า home ก่อนเรียก scroll to top
    if (window.location.pathname === "/") {
      e.preventDefault(); // ป้องกันการนำทางใหม่เมื่ออยู่ในหน้า home
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <Link href="/" onClick={handleClick}>
      <Image className="rounded-full ml-5 xl:ml-0" src="/logokp2.jpg" width={54} height={54} priority alt="" />
    </Link>
  );
};

export default Logo;
