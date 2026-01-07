import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/domain')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/domains"!</div>
}
