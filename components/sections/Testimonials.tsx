import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "This product saved us hours every week. The output is consistently accurate.",
    name: "Alex Chen",
    title: "Product Lead, Company",
  },
  {
    quote:
      "We shipped faster and made better decisions because the insights were immediate.",
    name: "Samira Patel",
    title: "Ops Manager, Company",
  },
  {
    quote:
      "Super simple to integrate. The team adopted it in a day.",
    name: "Jordan Lee",
    title: "Engineer, Company",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">What people are saying</h2>
          <p className="mt-3 text-gray-600">
            Placeholder testimonials for now — replace with real reviews later.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6">
              <p className="text-gray-700">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-gray-600">{t.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
    </section>
  );
}
