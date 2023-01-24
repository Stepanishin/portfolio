import React, { FC } from "react";
import "./Title.scss";

interface ITitle {
  title: string;
  className?: string;
}

const Title: FC<ITitle> = ({ title, ...props }) => {
  return <h2 {...props}>{title}</h2>;
};

export default Title;
