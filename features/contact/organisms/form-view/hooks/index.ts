import axios, { GenericAbortSignal } from "axios";
import { Form } from "../types/form";
import { useState, ChangeEvent, useEffect } from "react";
// import { createTransport } from "nodemailer";

export const useFormList = () => {
  /**
   * TODO:
   * 件名, 本文を入力して,送信ボタンをクリックすると,
   * フォむの下の部分にお問い合わせ内容がリストで新しい順で表示する.
   * (最新のお問い合わせが一番上に表示されている)
   */

  const [formLists, setFormLists] = useState<Form[]>([]);
  const [title, setTitle] = useState("");
  const [formDescription, setTextBody] = useState("");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeTextBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextBody(e.target.value);
  };

  const getAllForms = async () => {
    const res = await fetch("http://localhost:3000/api/forms/");
    const forms = await res.json();
    setFormLists(forms);
  };

  useEffect(() => {
    const abortController = new AbortController();
    getAllForms();
    // getTodos(abortController.signal);
    //クリーンアップ関数　マウントする前useEffectする前の状態に 画面からいなくなったときの処理
    return () => {
      setFormLists([]);
      //TODO: ここでエラーになるので、調査したがわからない。。同じような質問↓
      //https://stackoverflow.com/questions/73140563/axios-throwing-cancelederror-with-abort-controller-in-react
      // abortController.abort();
      console.log("unmount");
    };
  }, []);

  // const sendFormMail = async () => {
  //   // const nodemailer = require("nodemailer");
  //   var transport = createTransport({
  //     host: "sandbox.smtp.mailtrap.io",
  //     port: 2525,
  //     auth: {
  //       user: process.env.SMTP_USER,
  //       pass: process.env.SMTP_PASS,
  //     },
  //   });
  //   try {
  //     await transport.sendMail({
  //       from: process.env.MAIL_FROM,
  //       to: process.env.MAIL_TO,
  //       subject: "問い合わせがありました",
  //       text: `以下の内容でサイトにお問い合わせがありました\nタイトル: ${title}\n内容: ${formDescription}`,
  //     });
  //   } catch (error) {
  //     console.log(`メールを送信できませんでした`);
  //     throw error;
  //   }
  // };

  const onClickSendButton = async () => {
    const form = {
      title,
      formDescription,
    };
    const createForms = async () => {
      const res = await axios.post("http://localhost:3000/api/forms/", form);
    };

    const sendFormMail = async () => {
      const res = await fetch("http://localhost:3000/api/contact/", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((res) => {
        if (res.status === 200) console.log("メール送信できました");
      });
    };

    await createForms();
    await sendFormMail();
    getAllForms();
    setTitle("");
    setTextBody("");
  };

  return {
    formLists,
    title,
    formDescription,
    onChangeTitle,
    onChangeTextBody,
    onClickSendButton,
  };
};
