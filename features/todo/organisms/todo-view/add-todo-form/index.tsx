import React, { ChangeEvent, useState } from "react";
import { Button } from "../../../atoms/button";
import * as Styled from "./style";

type Props = {
  title: string;
  description: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAddButton: () => void;
};

export const AddToDoForm = (props: Props) => {
  const {
    title,
    description,
    onChangeTitle,
    onChangeDescription,
    onClickAddButton,
  } = props;

  const [isShownError, setIsShownError] = useState(false);

  const handleSubmit = () => {
    if (title === "") {
      setIsShownError(true);
      return;
    }
    if (description === "") {
      setIsShownError(true);
      return;
    }
    onClickAddButton();
    setIsShownError(false);
  };

  // const isDisabled = title === "";

  return (
    <div>
      <div>
        <div>
          Title:{" "}
          <input
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="タイトルを入力してください"
          />
        </div>
        {isShownError && title === "" && (
          <Styled.DivErrorText>タイトルが空っぽです</Styled.DivErrorText>
        )}
      </div>
      <div>
        <div>
          内容:{" "}
          <input
            type="text"
            value={description}
            onChange={onChangeDescription}
            placeholder="内容を入力してください"
          />
        </div>
        {isShownError && description === "" && (
          <Styled.DivErrorText>内容が空っぽです</Styled.DivErrorText>
        )}
      </div>
      <Button onClick={handleSubmit}>追加</Button>
    </div>
  );
};
