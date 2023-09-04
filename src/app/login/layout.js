import Link from "next/link";
import "./login.css";
const LoginLayout = ({ children }) => {
  return (
    <div>
      <ul className="login-menu">
        <li>
          <h4 className="heading">Hidayat Login</h4>
        </li>
        <li>
          <Link href="/login">Login main</Link>
        </li>
        <li>
          <Link href="/login/loginstudent"> Student Login</Link>
        </li>
        <li>
          <Link href="/login/loginteacher"> Teacher Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};
export default LoginLayout;
