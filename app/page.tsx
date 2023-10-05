import Input from './components/input'
import Todos from './components/todos'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className={`text-5xl font-semibold mb-8`}> Todo App </h2>
      <Input />
      <Todos />
    </main>
  )
}
