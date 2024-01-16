import React from 'react';
import Pop from '../Foo';
import './index.scss';
interface IPop {
  delay?: number;
  hasMask?: boolean;
  content: string | JSX.Element;
}

const Toast = ({ content, delay = 1000, hasMask = true }: IPop) => {
  return Pop({
    customDomId: 'popToastDom',
    delay,
    children: hasMask ? (
      <div className="popToastDomContentMask">
        <div className="popToastDomContent">{content}</div>
      </div>
    ) : (
      <div className="popToastDomContent">{content}</div>
    ),
  });
};

export default Toast;
