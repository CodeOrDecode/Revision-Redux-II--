import React from "react";
import TodoItem from "./TodoItem";
import Addtodo from "./Addtodo";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showtodo } from "../Redux/Todo/action";
import Loading from "./Loading";
import Error from "./Error";
import { loadingcon } from "../Redux/Others/action";
import { errorVal } from "../Redux/Others/action";

const Todo = () => {
  const dispatch = useDispatch();

  const todoData = useSelector((state) => {
    return state.todo;
  });

  const loaderr = useSelector((state) => {
    return state.other;
  });


  const { loading, error } = loaderr;

  async function handleTodoData() {
    dispatch(loadingcon(true));
    try {
      let { data } = await axios({
        method: "get",
        url: "http://localhost:3000/todos",
      });
      dispatch(loadingcon(false));
      dispatch(errorVal(false));
      dispatch(showtodo(data));
    } catch (error) {
      console.log(error);
      dispatch(loadingcon(false));
      dispatch(errorVal(true));
    }
  }

  async function addTodo(value) {
    dispatch(loadingcon(true));
    let obj = { title: value, status: false };
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/todos",
        data: obj,
      });
      handleTodoData();
    } catch (error) {
      console.log(error);
      dispatch(loadingcon(false));
      dispatch(errorVal(true));
    }
  }

  async function handleEditTodo(val, val2) {
    dispatch(loadingcon(true));
    try {
      let obj = { status: !val2 };
      await axios({
        method: "patch",
        url: `http://localhost:3000/todos/${val}`,
        data: obj,
      });
      handleTodoData();
    } catch (error) {
      console.log(error);
      dispatch(loadingcon(false));
      dispatch(errorVal(true));
    }
  }

  useEffect(() => {
    handleTodoData();
  }, []);


  return (
    <div>
      <Addtodo addTodo={addTodo} />

      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        todoData.map((ele) => {
          return (
            <TodoItem key={ele.id} {...ele} handleEditTodo={handleEditTodo} />
          );
        })
      )}
    </div>
  );
};

export default Todo;
