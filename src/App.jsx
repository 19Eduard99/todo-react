import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./routes/HomePage";
import SingleTodo from "./routes/SingleTodo";
import AllTodos from "./routes/AllTodos";
import { Routes, Route } from "react-router";
import DoneTodos from "./routes/DoneTodos";
import Storage from "./utils/Storage";
import { useState } from "react";

const App = () => {
  const data = Storage.getItems() || [];
  const [todoItems, setTodoItems] = useState(data);

  return (
    <>
      <Header />
      <main style={{ padding: "40px 0" }}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage todoItems={todoItems} setTodoItems={setTodoItems} />
            }
          />
          <Route
            path="/:index"
            element={
              <SingleTodo todoItems={todoItems} setTodoItems={setTodoItems} />
            }
          />
          <Route
            path="/all-todos"
            element={
              <AllTodos todoItems={todoItems} setTodoItems={setTodoItems} />
            }
          />
          <Route
            path="/done-todos"
            element={
              <DoneTodos todoItems={todoItems} setTodoItems={setTodoItems} />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
