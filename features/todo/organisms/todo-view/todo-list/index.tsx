import { ToDoItem } from "./todo-item";
import { ToDo } from "../types/todo";
import { useState } from "react";
import { FilterTypeValues, FILTER_TYPES } from "../const/filter";

type Props = {
  todos: ToDo[];
  onChangeIsCompleted: (
    targetIndex: number,
    title: string,
    description: string
  ) => void;
  onClickDelete: (targetIndex: number) => void;
  onClickUpdate: (id: number, title: string, description: string) => void;
  filter: FilterTypeValues;
};

export const ToDoList = (props: Props) => {
  const { todos, onChangeIsCompleted, onClickDelete, onClickUpdate, filter } =
    props;
  console.log("todos", todos);

  return (
    <div>
      {todos
        .filter((todo) => {
          if (filter === FILTER_TYPES.UNDONE) return !todo.isCompleted;
          if (filter === FILTER_TYPES.DONE) return todo.isCompleted;
          return true;
        })
        .sort((a, b) => b.id - a.id)
        .map((todo, index) => {
          const { id, title, description, isCompleted } = todo;
          return (
            <ToDoItem
              //keyはループの時に必須で入れる、ユニークな値にする
              key={id}
              id={id}
              title={title}
              description={description}
              isCompleted={isCompleted}
              onChangeCheck={() => {
                onChangeIsCompleted(id, title, description);
              }}
              onClickDelete={() => {
                onClickDelete(id);
              }}
              onClickUpdate={onClickUpdate}
            />
          );
        })}
    </div>
  );
};
