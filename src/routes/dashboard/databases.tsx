import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/databases')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/databases"!</div>
}
