import { Card } from "@/components/ui/card";

export default function ProductDemo() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: text */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              See the product in action
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Short explanation of how the AI works and what problem it solves.
              This will later be replaced with real copy.
            </p>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>• Fast setup</li>
              <li>• Real-time insights</li>
              <li>• Designed for teams</li>
            </ul>
          </div>

          {/* Right: demo placeholder */}
          <Card className="aspect-video flex items-center justify-center">
            <span className="text-gray-400">
              Product demo video / interactive preview
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
}
