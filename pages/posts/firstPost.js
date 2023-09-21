import Head from "next/head";
import Link from "next/link";
const firstPost = () => {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First post</h1>
      <Link href="/">Back Home</Link>
      {/* <h2>Back Home</h2> */}
    </div>
  );
};

export default firstPost;
