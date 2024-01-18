import React, { useState } from 'react';
import './index.scss';
const KEYCODE = Object.freeze({
  LEFT_ARROW: 'ArrowLeft',
  RIGHT_ARROW: 'ArrowRight',
  END: 'End',
  HOME: 'Home',
  SPACE: 'Space',
  BACK_SPACE: 'Backspace',
});

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
  const [value, setValue] = React.useState<string[]>(new Array(bit).fill(''));
  // 用来存放6个input的引用
  const inputsRef = React.useRef<HTMLInputElement[]>([]);
  const [focusIndex, setFocusIndex] = useState(0);

  // 聚焦指定下标的input
  const focusInput = (i: number) => {
    const input = inputsRef.current?.[i];
    if (!input) {
      return;
    }
    input.focus();
    input.setSelectionRange?.(0, 1000);
    setFocusIndex(i);
  };

  // 聚焦后一个input
  const focusNextInput = () => {
    focusInput(focusIndex + 1);
  };

  // 聚焦前一个input
  const focusPrevInput = () => {
    focusInput(focusIndex - 1 <= 0 ? 0 : focusIndex - 1);
  };

  const changeValue = (v: string[]) => {
    setValue(v);
    if (!v.some((i) => !i)) {
      onFinish?.(v.join(''));
    }
  };

  const setNewValue = (v: string, index: number) => {
    const newValue = [...value];
    newValue[index] = v;
    changeValue(newValue);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const val = e.target.value.trim();
    const newValue = val.slice(val.length - 1, val.length);
    setNewValue(newValue, index);
    if (val) {
      focusNextInput();
    }
  };

  // 删除
  const handleOnDelete = (index: number) => {
    if (value[index]) {
      setNewValue('', index);
    } else {
      focusPrevInput();
    }
  };

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    switch (e.code) {
      case KEYCODE.HOME:
      case KEYCODE.END:
      case KEYCODE.SPACE:
        e.preventDefault();
        break;
      case KEYCODE.BACK_SPACE:
        handleOnDelete(index);
        break;
      default:
        break;
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const copyValue = e.clipboardData.getData('text/plain').slice(0, bit);
    const len = copyValue.length;
    const index = len === bit ? bit - 1 : len;
    changeValue(copyValue.padEnd(bit, '').split(''));
    focusInput(index);
  };

  return (
    <div className={'feReactPopVerityCode'} {...props}>
      {value.map((v, index) => {
        const focus = index === focusIndex;
        return (
          <input
            autoFocus={index === 0}
            key={index}
            ref={(ref: HTMLInputElement) => (inputsRef.current[index] = ref)}
            className={`feReactPopVerityCodeInput ${focus ? 'focus' : ''}`}
            maxLength={1}
            value={v || ''}
            // autoComplete="one-time-code"
            onClick={() => focusInput(index)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            onPaste={handlePaste}
            {...inputProps}
          />
        );
      })}
    </div>
  );
};

export default VerityCode;
