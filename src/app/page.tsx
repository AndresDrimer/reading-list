"use client";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-violet-700 to-violet-500 mx-auto p-6 text-white">
      <TodoList />
      <TodoForm />
    </main>
  );
}
