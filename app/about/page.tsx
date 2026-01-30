import { Card } from "@/components/ui/card";

const team = [
  { name: "Santiago Orjuela", role: "Co-founder", bio: "Placeholder bio." },
  { name: "Rastin Aghighi", role: "Co-founder", bio: "Placeholder bio." },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-1">
          <h2 className="text-lg font-medium">Mission</h2>
          <p className="mt-3 text-sm text-gray-700">
            Placeholder mission statement.
          </p>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <h2 className="text-lg font-medium">What we believe</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>• Principle / value #1</li>
            <li>• Principle / value #2</li>
            <li>• Principle / value #3</li>
          </ul>
        </Card>
      </div>

      <h2 className="mt-14 text-2xl font-semibold">Team</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {team.map((m) => (
          <Card key={m.name} className="p-6">
            <div className="h-12 w-12 rounded-full bg-gray-200" />
            <p className="mt-4 font-medium">{m.name}</p>
            <p className="text-sm text-gray-600">{m.role}</p>
            <p className="mt-3 text-sm text-gray-700">{m.bio}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
