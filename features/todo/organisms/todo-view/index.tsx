import { useState } from "react";
import { AddToDoForm } from "./add-todo-form";
import { FilterTypeValues, FILTER_TYPES } from "./const/filter";
import { useToDoList } from "./hooks/use-todo-list";
import { Status } from "./status";
import { ToDoList } from "./todo-list";

export const ToDoView = () => {
  const {
    todos,
    title,
    description,
    onChangeTitle,
    onChangeDescription,
    onClickAddButton,
    onChangeIsCompleted,
    onClickDeleteButton,
    onClickUpdate,
  } = useToDoList();

  const [selectedFilter, setSelectedFilter] = useState<FilterTypeValues>(
    FILTER_TYPES.ALL
  );

  return (
    <div>
      <AddToDoForm
        title={title}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeDescription={onChangeDescription}
        onClickAddButton={onClickAddButton}
      />

      <Status
        selectedFilter={selectedFilter}
        onChangeFilter={(filterValue: FilterTypeValues) => {
          setSelectedFilter(filterValue);
        }}
      />

      <ToDoList
        todos={todos}
        onChangeIsCompleted={onChangeIsCompleted}
        onClickDelete={onClickDeleteButton}
        onClickUpdate={onClickUpdate}
        filter={selectedFilter}
      />
    </div>
  );
};
