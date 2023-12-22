import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="underline text-xl">Hi World!</h1>
      <ul className="ml-16">
        <li><Link href="/posts">Post</Link></li>
        <li><Link href="/">Home</Link></li>
      </ul>
    </>
  );
}
