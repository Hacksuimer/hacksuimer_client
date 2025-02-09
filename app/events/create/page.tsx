"use client";
import EventForm from "./sections/event-form";
import Header from "@/app/sections/Header";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-[1000px] pt-4 md:pt-12 flex flex-col gap-4">
      <div>
        <Header />
        <EventForm />
      </div>
    </section>
  );
}
