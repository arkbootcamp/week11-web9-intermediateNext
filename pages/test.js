import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/Layout";
import Navbar from "../components/module/Navbar";
import { authPage } from "../middleware/authorizationPage";
import axios from "axios";

export async function getServerSideProps(context) {
  const data = await authPage(context);

  const res = await axios
    .get("http://localhost:3001/backend1/api/v1/movie?page=1&limit=2", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJCYWd1cyIsInVzZXJfZW1haWwiOiJiYWd1c3RyaTE1QGdtYWlsLmNvbSIsInVzZXJfY3JlYXRlZF9hdCI6IjIwMjEtMDQtMjdUMDQ6MTA6NTQuMDAwWiIsInVzZXJfdXBkYXRlZF9hdCI6bnVsbCwiaWF0IjoxNjIzNTc3NDcxLCJleHAiOjE2MjM2NjM4NzF9._uTY9gdHosQ_LteA61pp96DxG-Bs6cewbTqerDi_kzk`,
      },
    })
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      // console.log(err.response);
      return [];
    });

  return {
    props: { res },
  };
}

export default function Test(props) {
  // console.log(props);
  return (
    <Layout title="Home">
      <Navbar />
      <br />
      <div>
        <Image
          src="/profile/vercel.svg"
          alt="Picture of the author"
          width=""
          height=""
        />
      </div>
      {props.res.data.map((item, index) => (
        <div className="d-grid gap-2 my-2" key={index}>
          <button className="btn btn-primary" type="button">
            {item.movie_name}
          </button>
        </div>
      ))}
    </Layout>
  );
}
