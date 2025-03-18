import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="m-8 p-20 grid align-middle">
      <Navbar />
      <h1 className="pb-7 flex justify-center">Welcome to ChoreSync</h1>
      <p className="">
        Thank you for visiting ChoreSync. Our aim is to be your go to app for
        all things chores management, whether it be taking care of pets,
        gardening, or regular household chores. Whatever your needs, we got you!
      </p>
      <button className="rounded bg-teal-200">Learn More</button>
    </div>
  );
}
