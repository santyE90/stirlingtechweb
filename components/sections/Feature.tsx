import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Feature one",
    description: "Short description of the feature.",
  },
  {
    title: "Feature two",
    description: "Short description of the feature.",
  },
  {
    title: "Feature three",
    description: "Short description of the feature.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center">
          Why teams use this product
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <h3 className="font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
