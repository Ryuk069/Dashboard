import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="">
        <Link to="/login">Landing Page</Link>
      </div>
    </>
  );
}
