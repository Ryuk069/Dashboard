import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/application/social-app')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="w-full h-full">
      Hello From Social app
    </div>
}
