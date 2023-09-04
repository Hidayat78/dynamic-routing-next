"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Hidayat morning Star</h1>
      <Link href="./about">About</Link>
      <br />
      <br />
      <Link href="./login">Login</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>Login</button>
      <br /><br/>
      <button onClick={() => router.push("/about")}>About</button>
      
    </div>
  );
}
