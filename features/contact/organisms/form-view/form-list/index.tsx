import { Form } from "../types/form";
import { FormItem } from "./form-item";

type Props = {
  forms: Form[];
};

export const FormList = (props: Props) => {
  const { forms } = props;
  return (
    <div>
      {forms
        .sort((a, b) => b.id - a.id)
        .map((form) => {
          const { title, formDescription } = form;
          return <FormItem title={title} description={formDescription} />;
        })}
    </div>
  );
};
