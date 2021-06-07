// import { useState, useEffect } from "react";
// import axiosApiIntances from "../utils/axios";
// import Layout from "../components/Layout";
// import Navbar from "../components/module/Navbar";
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     console.log("Get Data !");
//     getUsers();
//   }, []);

//   const getUsers = () => {
//     axiosApiIntances
//       .get("users")
//       .then((res) => {
//         console.log(res.data);
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <Layout title="Home">
//       <Navbar />
//       <h1 className={styles.titleHead}>Home Page !</h1>
//       <h2>{process.env.APP_NAME}</h2>
//       {users.map((item, index) => (
//         <div className="d-grid gap-2" key={index}>
//           <button className="btn btn-primary" type="button">
//             {item.name}
//           </button>
//         </div>
//       ))}
//     </Layout>
//   );
// }

// =================================================================

import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axiosApiIntances from "../utils/axios";
import Layout from "../components/Layout";
import Navbar from "../components/module/Navbar";
import styles from "../styles/Home.module.css";
import { authPage } from "../middleware/authorizationPage";

export async function getServerSideProps(context) {
  const data = await authPage(context);
  // console.log(data);

  const res = await axiosApiIntances
    // tambahkan headers jika menggunakan ssr untuk get data
    .get("users", {
      headers: {
        Authorization: `Bearer ${data.token || ""}`,
      },
    })
    .then((res) => {
      console.log(res.config); // cek menggunakan res.config di terminal. nanti akan mucul properti headers
      return res.data;
    })
    .catch((err) => {
      // console.log(err);
      return [];
    });

  return {
    props: { users: res, userLogin: data },
  };
}

export default function Home(props) {
  const router = useRouter();
  // console.log(props);
  const [users, setUsers] = useState(props.users);

  const handleProfile = (id) => {
    router.push(`/profile/${id}`);
  };

  return (
    <Layout title="Home">
      <Navbar />
      <br />
      {/* <img src="/vercel.svg" alt="My Image" className="logo" /> */}
      <div>
        <Image
          src="/profile/vercel.svg"
          alt="Picture of the author"
          width=""
          height=""
        />
      </div>
      {/* <h1 className={styles.titleHead}>Home Page !</h1> */}
      {/* <h2>{process.env.APP_NAME}</h2> */}
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
