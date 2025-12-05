import Class11math from "@/component/home/Class11math";
import EEEFIntegration from "@/component/home/EEEFIntegration";
import HomePage from "@/component/home/Home";
import LatexInputDemo from "@/component/home/LatexInputDemo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-950">
      <div className="pt-16">
        <LatexInputDemo />
      </div>
        <HomePage />
      <EEEFIntegration />
      <Class11math />
    </div>
  );
}
