import { AddForm } from "./add-form";
import { FormList } from "./form-list";
import { useFormList } from "./hooks";

export const FormView = () => {
  const {
    formLists,
    title,
    formDescription,
    onChangeTitle,
    onChangeTextBody,
    onClickSendButton,
  } = useFormList();

  return (
    <div>
      <AddForm
        title={title}
        textBody={formDescription}
        onChangeTitle={onChangeTitle}
        onChangeTextBody={onChangeTextBody}
        onClickAddButton={onClickSendButton}
      />

      <FormList forms={formLists} />
    </div>
  );
};
