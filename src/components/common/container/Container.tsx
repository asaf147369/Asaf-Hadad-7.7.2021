import styled from 'styled-components';

const SContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  flex-wrap: ${({ wrap }) => wrap};
  overflow: ${({ overflow }) => overflow};
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
  // border-bottom: ${({ borderBottom }) => borderBottom};
  
export const Container = (props:Props) => {
  return <SContainer {...props} />;
};


interface Props {
  dir?: string;
  width?: string;
  maxWidth?: string;
  justify?: string;
  alignItems?: string;
  padding?: string;
  margin?: string;
  height?: string;
  border?: string;
  // borderBottom: string;
  radius?: string;
  wrap?: string;
  overflow?: string;
  children: JSX.Element[] | JSX.Element;
}
