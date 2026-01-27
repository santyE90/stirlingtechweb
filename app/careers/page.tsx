import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const roles = [
  {
    title: "Software Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    blurb: "Placeholder: build product features and infrastructure.",
  },
  {
    title: "ML Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    blurb: "Placeholder: improve models, evals, and deployment pipeline.",
  },
  {
    title: "Founding PM",
    location: "Remote / Hybrid",
    type: "Full-time",
    blurb: "Placeholder: drive discovery, roadmap, and customer feedback loops.",
  },
];

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Careers</h1>
      <p className="mt-4 text-gray-700 max-w-3xl">
        Placeholder hiring pitch. What kind of people you want, what problems
        they’ll work on, and what’s exciting about the mission.
      </p>

      <Card className="mt-10 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">Don’t see the right role?</p>
            <p className="mt-1 text-sm text-gray-700">
              Send a note with what you’d like to work on.
            </p>
          </div>
          <Button>Reach out</Button>
        </div>
      </Card>

      <h2 className="mt-12 text-2xl font-semibold">Open roles</h2>
      <div className="mt-6 grid gap-6">
        {roles.map((r) => (
          <Card key={r.title} className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-medium">{r.title}</p>
                <p className="mt-1 text-sm text-gray-600">
                  {r.location} • {r.type}
                </p>
                <p className="mt-3 text-sm text-gray-700">{r.blurb}</p>
              </div>

              <Button variant="outline">Apply</Button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
