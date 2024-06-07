import Image from "next/image";
import MainPlanner from "@/components/planner/MainPlanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainPlanner />
    </main>
  );
}
