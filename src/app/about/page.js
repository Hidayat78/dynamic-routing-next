import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>Hii everyone you know na me !!!</h1>
      <Link href="/">Go to mian page</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">Go to about Student</Link>
      <br />
      <br />
      <Link href="/about/aboutcollage">Go to collage</Link>
    </div>
  );
};
export default About;
