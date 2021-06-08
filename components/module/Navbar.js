import Link from "next/link";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    Cookie.remove("token");
    Cookie.remove("user");
    router.push("/login");
  };

  return (
    <>
      <Link href="/">Home</Link> | <Link href="/profile">Profile</Link> |{" "}
      <Link href="/profile/modal">Modal</Link> |{" "}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
