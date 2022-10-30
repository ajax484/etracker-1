import axios from "axios";
import Head from "next/head";
import { signIn, useSession, getSession } from "next-auth/react";

export default function Home() {
  // const { data: session, error } = useSession();

  const session = getSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(session, error);

    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());

    const { username, password } = formEntries;
    console.log(username, password);

    const res = await signIn("credentials", {
      redirect: false,
      username: username.replace(/\s/g, "").trim(),
      password: password.trim(),
    });

    console.log(res);
    console.log(session, error);

    // try {
    //   const response = await axios.post("/api/createUser", formEntries);
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error);
    //   console.log(error.response.data.message);
    // }
  };
  return (
    <div className="w-full h-[100vh] bg-green-500">
      {/* just to test login and stuff you can delete */}
      <form onSubmit={handleSubmit} className="">
        <input type="text" name="displayName" placeholder="display name" />
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span>First page!!!</span>
    </div>
  );
}
