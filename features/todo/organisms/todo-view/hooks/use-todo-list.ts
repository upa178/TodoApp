import axios, { GenericAbortSignal } from "axios";
import { useState, ChangeEvent, useEffect } from "react";
import { ToDo } from "../types/todo";
import { z, ZodError } from "zod";

const todoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "タイトルが未入力です" })
    .max(30, { message: "タイトルは30文字以内で入力してください" }),
  description: z
    .string()
    .min(1, { message: "内容が未入力です" })
    .max(100, { message: "タイトルは100文字以内で入力してください" }),
});

export const useToDoList = () => {
  console.log("呼び出し");
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const getTodos = async () => {
    const res = await fetch("http://localhost:3000/api/todos/");
    const todos = await res.json();
    setTodos(todos);
  };

  //Nest.js使用時のコード
  // const getTodos = async (signal?: GenericAbortSignal) => {
  // const res = await axios.get("http://localhost:8000/task", {
  //   signal,
  // });
  //   setTodos(res.data);
  // };
  // const [todos, setTodos] = useState(initialData);

  // userEffect 画面がレンダリングされた後に動く処理　他にもいろいろできるので要注意
  // 開発者モードの時は、mountとunmountの処理を１回流してくれている（クリーンアップの処理を確認できる）
  useEffect(() => {
    const abortController = new AbortController();
    getTodos();
    // getTodos(abortController.signal);
    //クリーンアップ関数　マウントする前useEffectする前の状態に 画面からいなくなったときの処理
    return () => {
      setTodos([]);
      //TODO: ここでエラーになるので、調査したがわからない。。同じような質問↓
      //https://stackoverflow.com/questions/73140563/axios-throwing-cancelederror-with-abort-controller-in-react
      // abortController.abort();
      console.log("unmount");
    };
  }, []);

  const onClickDeleteButton = async (id: number) => {
    const deleteTodos = async () => {
      const res = await axios.delete(
        `http://localhost:3000/api/todos?id=${id}`
      );
    };
    await deleteTodos();
    getTodos();
  };

  const onClickAddButton = async () => {
    const task = {
      title,
      description,
    };
    console.log(todoSchema.parse(task));
    const createTodos = async () => {
      const res = await axios.post("http://localhost:3000/api/todos/", task);
    };
    await createTodos();
    getTodos();
    setTitle("");
    setDescription("");
  };

  //TODO: DELETEと同じような感じで更新APIを実行した後にTODOを再取得する
  //編集するモードにする

  const onClickUpdate = async (
    id: number,
    title: string,
    description: string
  ) => {
    const task = {
      id,
      title,
      description,
    };

    const updateTodos = async () => {
      const res = await axios.put("http://localhost:3000/api/todos/", task);
    };
    await updateTodos();
    getTodos();
  };

  const onChangeIsCompleted = async (
    targetId: number,
    title: string,
    description: string
  ) => {
    const todoToUpdate = todos.find((todo) => todo.id === targetId);

    if (!todoToUpdate) {
      console.error(`ID ${targetId} のタスクが見つかりませんでした。`);
      return;
    }
    const requestBody = {
      id: targetId,
      title,
      description,
      isCompleted: !todoToUpdate.isCompleted,
    };

    const res = await axios.put(
      "http://localhost:3000/api/todos/",
      requestBody
    );

    getTodos();
  };

  //BK
  // const onChangeIsCompleted = async (targetId: number) => {
  //   const newTodos = todos.map((todo, index) => {
  //     if (todo.id !== targetId) return todo;

  //     todo.isCompleted = !todo.isCompleted;
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // };

  return {
    todos,
    title,
    description,
    onChangeTitle,
    onChangeDescription,
    onClickAddButton,
    onChangeIsCompleted,
    onClickDeleteButton,
    onClickUpdate,
  };
};
