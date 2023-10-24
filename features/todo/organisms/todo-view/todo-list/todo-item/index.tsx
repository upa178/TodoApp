import { ChangeEvent, useState } from "react";
import * as Styled from "./style";

type Props = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  onChangeCheck: () => void;
  onClickDelete: () => void;
  onClickUpdate: (id: number, title: string, description: string) => void;
};

export const ToDoItem = (props: Props) => {
  // 分割代入
  const {
    id,
    title,
    description,
    isCompleted,
    onChangeCheck,
    onClickDelete,
    onClickUpdate,
  } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);
  const [inputDescription, setInputDescription] = useState(description);
  const onClickUpdateButton = () => {
    // setIsEditMode(!isEditMode)だとラグがある
    // prevの前回の値を持っている
    // https://zenn.dev/stin/articles/use-appropriate-api
    // setIsEditMode((prev) => {
    //   return !prev;
    // });
    setIsEditMode(true);
  };

  //TODO:onchangeを作る
  const onChangeInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const onChangeInputDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDescription(e.target.value);
  };

  //TODO:onClickUpdateに引数としてinputTitleなどを渡すIDも流す(更新処理を追加)
  const onClickComplete = () => {
    // setIsEditMode((prev) => {
    //   return !prev;
    // });
    onClickUpdate(id, inputTitle, inputDescription);

    setIsEditMode(false);
  };

  return (
    <Styled.DivContainer isCompleted={isCompleted}>
      <input type="checkbox" checked={isCompleted} onChange={onChangeCheck} />
      {isEditMode ? (
        <div>
          title:{" "}
          <input type="text" onChange={onChangeInputTitle} value={inputTitle} />
          description:{" "}
          <input
            type="text"
            onChange={onChangeInputDescription}
            value={inputDescription}
          />
        </div>
      ) : (
        <div>
          <Styled.SpanTitle>title: {title}</Styled.SpanTitle>
          <span>description: {description}</span>
        </div>
      )}
      {isEditMode ? (
        <button onClick={onClickComplete}>完了</button>
      ) : (
        <button onClick={onClickUpdateButton}>編集</button>
      )}
      <Styled.DeleteButton onClick={onClickDelete}>×</Styled.DeleteButton>
    </Styled.DivContainer>
  );
};
