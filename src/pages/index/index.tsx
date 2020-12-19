import React from "react";
import { View } from "@tarojs/components";
import { styled } from "linaria/react";

const Title = styled(View)`
  color: ${(props) => props.color};
`;

const Index = () => {
  return <Title color="red">Hello World!</Title>;
};

export default Index;
