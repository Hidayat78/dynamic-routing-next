"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();

  const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <div>
      <h1 className="heading">Hii everyone login here</h1>
      {/* <Link href="/">Go to man page</Link>
      <br />
      <br />
      <button onClick={() => navigate("loginstudent")}>
        Go to student Login Page
      </button>
      <br />
      <br />
      <button onClick={() => navigate("loginteacher")}>
        Go to Teacher Login Page
      </button> */}
    </div>
  );
};
export default Login;

// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// const Login = () => {
//   const router = useRouter();
//   return (
//     <div>
//       <h1>Hii everyone login here</h1>
//       <Link href="/">Go to man page</Link>
//       <br />
//       <br />
//       <button onClick={() => router.push("/login/loginstudent")}>
//         Go to student Login Page
//       </button>
//       <br />
//       <br />
//       <button onClick={() => router.push("/login/loginteacher")}>
//         Go to Teacher Login Page
//       </button>
//     </div>
//   );
// };
// export default Login;
