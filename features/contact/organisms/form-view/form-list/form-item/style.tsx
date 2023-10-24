import styled from "@emotion/styled";

export const DivContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const SpanTitle = styled.span`
  color: red;
`;

export const DeleteButton = styled.div`
  font-size: 100%; /*ボタンの大きさ*/
  font-weight: bold;
  border: 1px solid #999;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 1.3em;
  line-height: 1.3em;
  cursor: pointer;
  transition: 0.2s;
`;
