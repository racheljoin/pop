import React, { HTMLAttributes, PropsWithChildren } from 'react';
import backSrc from '../assets/back.svg';
import backBlackSrc from '../assets/backBlack.svg';
import './index.scss';
interface IHeader extends HTMLAttributes<HTMLDivElement> {
  // 返回按钮
  onBack?: () => void;
  // 自定义右侧
  right?: JSX.Element | string;
  theme?: 'white' | 'black';
}
const Header = ({
  right,
  theme = 'black',
  onBack,
  children,
  ...props
}: PropsWithChildren<IHeader>) => {
  return (
    <div
      className={`feReactPopHeader ${theme === 'white' ? 'textWhite' : ''}`}
      {...props}
    >
      <div onClick={onBack}>
        {onBack && (
          <img
            src={theme === 'white' ? backSrc : backBlackSrc}
            alt=""
            className="w-6 aspect-square"
          />
        )}
      </div>
      <p className="feReactPopHeaderTitle">{children}</p>
      <p className="feReactPopHeaderRight">{right}</p>
    </div>
  );
};
export default Header;
