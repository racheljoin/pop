# 弹出提示

Demo1: 弹出 1s 后自动销毁的用户提示框

```jsx
import { Toast } from 'fe-react-pop';
const Demo = () => {
  const pop = () => {
    Toast({
      content: '验证码错误',
      // delay: 1000
    });
  };

  return <div onClick={pop}>提示</div>;
};

export default () => <Demo />;
```

Demo2: 严格模式下多次执行导致的问题

```jsx
import React, { useEffect } from 'react';
import { Toast } from 'fe-react-pop';

const Div = ({ children }) => <div>{children}</div>;

const Demo = () => {
  useEffect(() => {
    const destroy = Toast({
      content: (
        <Div>
          <Div>
            <Div>
              <Div>我嵌套很深1</Div>
            </Div>
            <Div>
              <Div>
                我嵌套很深2
                <Div>我嵌套很深3</Div>
              </Div>
            </Div>
          </Div>
        </Div>
      ),
    });
    console.log('执行1次1次1次1次');

    setTimeout(() => {
      destroy();
    }, 1000);
  }, []);

  return <div>测bug</div>;
};

export default () => (
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
```
