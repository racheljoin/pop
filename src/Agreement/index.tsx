import React from 'react';
import Pop, { IPop } from '../Foo';
import Header from '../Header';
import './index.scss';
interface IAgreement extends IPop {
  title?: string | JSX.Element;
  content?: string | JSX.Element;
  customHeader?: ({ onBack }: { onBack: () => void }) => JSX.Element;
  onBack?: () => void;
}
interface IAgreementContent extends IAgreement {
  destroy?: () => void;
}

const AgreementContent = ({ title, destroy, content }: IAgreementContent) => {
  const handleBack = () => {
    destroy?.();
  };

  return (
    <div className="popAgreementDomContentMask">
      <Header onBack={handleBack}>{title}</Header>
      <div className="popAgreementDomContentScroll">{content}</div>
    </div>
  );
};
const Agreement = ({
  title,
  content,
  stopBodyScroll = true,
  ...props
}: IAgreement) => {
  return Pop({
    customDomId: 'popAgreementDom',
    children: <AgreementContent title={title} content={content} />,
    stopBodyScroll,
    ...props,
  });
};

export default Agreement;
