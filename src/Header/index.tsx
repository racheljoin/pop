import React, { HTMLAttributes, PropsWithChildren } from 'react';
import backSrc from '../assets/back.svg';
import backBlackSrc from '../assets/backBlack.svg';
import './index.scss';
interface IHeader {
  // 返回按钮
  onBack?: () => void;
  // 标题文字
  title?: JSX.Element | string;
  // 自定义右侧
  right?: JSX.Element | string;
  theme?: 'white' | 'black';
  props?: HTMLAttributes<HTMLDivElement>;
}
const Header = ({
  right,
  children,
  theme = 'black',
  onBack,
  props = {},
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
