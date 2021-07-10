import styled from 'styled-components';

const SText = styled.p<Props>`
  font-size: ${(p) => p.size};
  color: ${(p) => p.color};
  font-weight: ${(p) => p.weight};
  margin: ${(p) => (p.margin ? p.margin : '0')};
  padding: ${(p) => (p.padding ? p.padding : '0')};
  text-align: ${(p) => p.textAlign};
  border: ${(p) => p.border};
`;

export const Text = (props:Props) => {
  return (
    <SText {...props}>
      {props.children}
    </SText>
  );
};

interface Props {
  size?: string;
  color?: string;
  weight?: string;
  margin?: string;
  padding?: string;
  children: string | string[];
  textAlign?: string;
  border?: string;
}
