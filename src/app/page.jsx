import Image from "next/image";
import Header from "./component/Header";
import Nav from "./component/nav";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />
      <h3>Home Page</h3>
    </main>
  );
}
