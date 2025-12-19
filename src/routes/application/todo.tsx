import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/application/todo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Application/todo"!</div>
}
