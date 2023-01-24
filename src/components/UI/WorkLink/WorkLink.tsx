import React, { FC } from "react";
import "./WorkLink.scss";

interface WorkLinkProps {
  title: string;
  url: string;
}

const WorkLink: FC<WorkLinkProps> = ({ title, url }) => {
  return (
    <a className="WorkLink" href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  );
};

export default WorkLink;
