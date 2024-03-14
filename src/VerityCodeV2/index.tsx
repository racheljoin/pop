import React, { useRef, useState } from 'react';
import './index.scss';

interface IVerityCode extends React.HTMLAttributes<HTMLDivElement> {
  bit?: number;
  onFinish?: (value: string) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
const VerityCode = ({
  bit = 6,
  onFinish,
  inputProps,
  ...props
}: IVerityCode) => {
  const [value, setValue] = React.useState<string>('');
  const throttleTime = useRef<NodeJS.Timer>(null);
  // 用来存放6个input的引用
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [focus, setFocus] = useState(0);

  const focusInput = () => {
    inputRef.current?.focus?.();
  };

  const handleBlur = () => {
    setFocus(-1);
  };
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setFocus(e.target.value.trim().length);
  };

  const throttleFinish = (newValue: string) => {
    if (throttleTime.current) {
      return;
    }
    throttleTime.current = setTimeout(() => {
      clearTimeout(throttleTime.current);
      throttleTime.current = null;
      onFinish?.(newValue);
    }, 40);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value.trim();
    setValue(newValue);
    setFocus(newValue.trim().length);
    if (newValue.trim().length === bit) {
      throttleFinish(newValue);
    }
  };

  return (
    <div className={'feReactPopVerityCodeV2'} onClick={focusInput} {...props}>
      <div className="displayValues">
        {value
          .padEnd(bit, ' ')
          .split('')
          .map((v, index) => {
            return (
              <div
                autoFocus={index === focus}
                key={index}
                className={`feReactPopVerityCodeValueV2 ${
                  index === focus ? 'focus' : ''
                }`}
              >
                {v}
              </div>
            );
          })}
      </div>
      <input
        className="feReactPopVerityCodeInputV2"
        autoFocus
        ref={inputRef}
        value={value}
        maxLength={bit}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        {...inputProps}
      />
    </div>
  );
};

export default VerityCode;
