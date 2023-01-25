import React from 'react';

type ContentContainerProps = {
    content: string;
    sections: { name: string; title: string, displayContent: JSX.Element  }[];
};

export const ContentContainer = ({content, sections}: ContentContainerProps) => {
  
  const displayContent = sections.find(s => s.name === content)
  const home = sections.find(s => s.name === 'home')


  return (
  <div className="container">
    {displayContent?.displayContent ? displayContent.displayContent : home?.displayContent}
  </div>
)};