import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/account/create-invoice')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/account/create-invoice"!</div>
}
