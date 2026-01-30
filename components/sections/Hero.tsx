import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <Section className="py-24">
      <div className="text-center">

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          euphorAI
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
          Making Your Life Easier
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Request demo</Button>
          <Button variant="outline">See how it works</Button>
        </div>
      </div>
    </Section>
  );
}
