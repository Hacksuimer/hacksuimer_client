"use client";

import EventName from "./sections/eventname";
import Header from "../sections/Header";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-[1000px] pt-4 md:pt-12 flex flex-col gap-4">
      <div>
        <Header/>
        <EventName />      
      </div>
    </section>
  );
}
