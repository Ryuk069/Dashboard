import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/account/billing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/account/billing"!</div>
}
