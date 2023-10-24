import * as Styled from "./style";

type Props = {
  title: string;
  description: string;
};

export const FormItem = (props: Props) => {
  const { title, description } = props;
  return (
    <Styled.DivContainer>
      <Styled.SpanTitle>タイトル: {title}</Styled.SpanTitle>
      <span>本文: {description}</span>
    </Styled.DivContainer>
  );
};
