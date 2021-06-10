import Image from "next/image";
import { useRouter } from "next/router";

export default function Page404() {
  const router = useRouter();

  return (
    <div>
      <div>
        <Image src="/404.gif" width={550} height={500} />
      </div>
      <button
        className="btn btn-light"
        onClick={() => {
          router.back();
        }}
      >
        Back To Home
      </button>
    </div>
  );
}
