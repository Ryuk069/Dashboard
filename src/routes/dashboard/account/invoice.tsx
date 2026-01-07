import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/account/invoice')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/account/invoice"!</div>
}
