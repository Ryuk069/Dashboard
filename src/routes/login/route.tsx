import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Link to='/dashboard'>Hello "/login"!</Link></div>
}
