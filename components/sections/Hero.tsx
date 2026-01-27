import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <Section className="py-24">
      <div className="text-center">
        <p className="text-sm font-medium text-[#C1121F]">Placeholder tagline</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Your AI product headline goes here
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700">
          One or two lines describing what the product does. Placeholder for now.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Request demo</Button>
          <Button variant="outline">See how it works</Button>
        </div>
      </div>
    </Section>
  );
}
