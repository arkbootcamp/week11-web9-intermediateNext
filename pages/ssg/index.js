import axios from "axios";
import Layout from "components/Layout";
import Navbar from "components/module/Navbar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const users = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      // console.log(err);
      return [];
    });
  return {
    props: { users },
  };
}

export default function SSGPage(props) {
  const router = useRouter();
  // console.log(props);
  const [users, setUsers] = useState(props.users);

  const handleProfile = (id) => {
    router.push(`/ssg/${id}`);
  };

  return (
    <Layout title="SSG Rendering">
      <Navbar />
      <div>
        <Image
          src="/profile/vercel.svg"
          alt="Picture of the author"
          width=""
          height=""
        />
      </div>
      {users.map((item, index) => (
        <div className="d-grid gap-2 my-2" key={index}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => handleProfile(item.id)}
          >
            {item.name}
          </button>
        </div>
      ))}
    </Layout>
  );
}
