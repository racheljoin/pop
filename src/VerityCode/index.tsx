import React, { ChangeEventHandler, useMemo, useRef, useState } from 'react';
import './index.scss';

interface IVerityCode extends React.HTMLAttributes<HTMLDivElement> {
  bit?: number;
  onFinish?: (value: string) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
const VerityCode = ({
  bit = 6,
  onFinish,
  inputProps = {},
  ...props
}: IVerityCode) => {
  const [value, setValue] = useState<string>('');
  const [focusIndex, setFocusIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setFocusIndex(e.target.selectionEnd || 0);
    setValue(newValue);

    if (newValue.length === bit) {
      onFinish?.(newValue);
    }
  };

  const handleFocus = () => {
    if (!inputRef.current) {
      return;
    }
    setFocusIndex(inputRef.current.selectionEnd || 0);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setFocusIndex(-1);
  };

  const renderArray = useMemo(() => {
    return value.padEnd(bit, ' ').split('');
  }, [focusIndex, value]);

  return (
    <div className="feReactPopVerityCode" {...props}>
      <div className="displayArea">
        {renderArray.map((item, index) => (
          <div
            className={`value ${focusIndex === index ? 'focus' : ''}`}
            key={index}
            onClick={handleFocus}
          >
            {item}
          </div>
        ))}
      </div>

      <input
        className="hideInput"
        autoFocus
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={bit}
        autoComplete="one-time-code"
        {...inputProps}
      />
    </div>
  );
};

export default VerityCode;
