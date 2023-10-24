import React, { ChangeEvent } from "react";
import { Button } from "../../../atoms/button";
import { DivTextArea } from "./style";

type Props = {
  title: string;
  textBody: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextBody: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickAddButton: () => void;
};

export const AddForm = (props: Props) => {
  const { title, textBody, onChangeTitle, onChangeTextBody, onClickAddButton } =
    props;

  return (
    <div>
      <p>問い合わせタイトル</p>
      <input type="text" value={title} onChange={onChangeTitle} />
      <p>問い合わせ内容</p>
      <DivTextArea value={textBody} onChange={onChangeTextBody}></DivTextArea>
      <Button onClick={onClickAddButton}>送信</Button>
    </div>
  );
};
