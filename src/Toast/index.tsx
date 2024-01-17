import React from 'react';
import Pop, { IPop } from '../Foo';
import './index.scss';
interface IToast extends IPop {
  delay?: number;
  hasMask?: boolean;
  content: string | JSX.Element;
}

const Toast = ({ content, delay = 1000, hasMask = true, ...props }: IToast) => {
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
    ...props,
  });
};

export default Toast;
