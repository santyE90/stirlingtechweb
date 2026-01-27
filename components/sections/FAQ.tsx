import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does the product do?",
    a: "Placeholder answer describing the core value of the AI product.",
  },
  {
    q: "How do we get started?",
    a: "Placeholder onboarding steps. Later you can link to docs or a demo call.",
  },
  {
    q: "Is it secure?",
    a: "Placeholder security/compliance statement (keep it general for now).",
  },
  {
    q: "Can we integrate with our tools?",
    a: "Placeholder integrations: API, Slack, CRM, etc.",
  },
  {
    q: "Pricing?",
    a: "Placeholder pricing approach (e.g., usage-based or per-seat).",
  },
];

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <p className="mt-3 text-gray-600">
            Quick answers for common questions.
          </p>
        </div>

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
