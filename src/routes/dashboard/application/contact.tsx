import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/application/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="w-full h-full">
            Hello From Contact
    </div>
}
