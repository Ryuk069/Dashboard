import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/application/weather")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-full">
      <iframe
        src="http://localhost:4173"
        className="h-1/1 w-full rounded-xl border"
      ></iframe>
    </div>
  );
}
