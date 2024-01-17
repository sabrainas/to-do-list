import { useState, useEffect } from "react";
import './App.css'
import { Layout } from "./components/Layout";
import { Header } from "./components/Headers/Header";
import { Todo } from "./components/Todo/Todo";
import { TodoForm } from "./components/Todo/TodoForm";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { Paragraph } from "./components/Paragraphs/Paragraph";

interface TodoItem {
  id: number;
  text: string;
  category: string;
  isComplete: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]); // Explicita o tipo do estado

  const addTodo = (text: string, category: string) => {
    const newTodo: TodoItem = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isComplete: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  
  const completeTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(newTodos);
  }

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");




  useEffect(() => {
    // Recupera os dados do localStorage
    const storedTodos = localStorage.getItem('todos');

    if (storedTodos) {
      // Se existirem dados no localStorage, atualiza o estado
      setTodos(JSON.parse(storedTodos));
    } else {
      // Caso contrário, inicializa o estado com um array vazio
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    // Armazena os dados no localStorage sempre que o estado muda
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return ( 
    <>
      <Layout>
        <Header text="Lista de tarefas"/>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
          <div className="pb-5 border border-b-slate-600">
            {
              todos.length === 0 ? (
                <Paragraph text="Não há tarefas a serem feitas" />
              ) : (
              todos
                .filter((todo) => 
                  filter === "All" 
                  ? true 
                  : filter === "Completed" 
                  ? todo.isComplete
                  : !todo.isComplete 
                )
                .filter((todo) => 
                  todo.text.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => sort === "Asc" 
                  ? a.text.localeCompare(b.text) 
                  : b.text.localeCompare(a.text)
                )
                .map((todo): any => (
                  <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
                ))
              )
            }
          </div>
          <TodoForm addTodo={addTodo}/>
      </Layout>
    </>
  );
}

export default App;
