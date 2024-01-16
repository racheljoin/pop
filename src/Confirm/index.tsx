import React, { cloneElement } from 'react';
import Pop from '../Foo';
import './index.scss';
interface IPop {
  delay?: number;
  content: string | JSX.Element;
  title?: string | JSX.Element;
  footer?: string | JSX.Element;
}
interface IConfirmContent extends IPop {
  destroy?: () => void;
}
const ConfirmContent = ({
  title,
  content,
  destroy,
  footer = '我知道了',
}: IConfirmContent) => {
  return (
    <div className="popConfirmDomContentMask">
      <div className="popConfirmDom">
        <div className="popConfirmDomContentTitle">{title}</div>
        <div className="popConfirmDomContent">{content}</div>
        {footer &&
          (typeof footer === 'string' ? (
            <div className="popConfirmDomFooter" onClick={destroy}>
              {footer}
            </div>
          ) : (
            cloneElement(footer, {
              destroy,
            })
          ))}
      </div>
    </div>
  );
};
const Confirm = ({ content, title, delay = 0, footer }: IPop) => {
  return Pop({
    customDomId: 'popConfirmDom',
    delay,
    children: (
      <ConfirmContent content={content} title={title} footer={footer} />
    ),
  });
};

export default Confirm;
