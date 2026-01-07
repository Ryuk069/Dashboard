import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/metric')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/metric"!</div>
}
