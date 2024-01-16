import React from 'react';
import Pop from '../Foo';
import Header from '../Header';
import './index.scss';
interface IPop {
  title?: string | JSX.Element;
  content?: string | JSX.Element;
  customHeader?: ({ onBack }: { onBack: () => void }) => JSX.Element;
  onBack?: () => void;
}
interface IAgreementContent extends IPop {
  destroy?: () => void;
}

// const CustomHeader = ({ onBack, title }: IPop) => {
//   return <Header onBack={onBack}>{title}</Header>;
// };

const AgreementContent = ({ title, destroy, content }: IAgreementContent) => {
  const handleBack = () => {
    destroy?.();
  };

  return (
    <div className="popAgreementDomContentMask">
      <Header onBack={handleBack}>{title}</Header>
      {content}
    </div>
  );
};
const Agreement = ({ title, content }: IPop) => {
  return Pop({
    customDomId: 'popAgreementDom',
    children: <AgreementContent title={title} content={content} />,
  });
};

export default Agreement;
