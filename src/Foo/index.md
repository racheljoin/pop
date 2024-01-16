# 挂载节点

指令式调用弹窗，消失后即销毁。

调用后挂载一个 dom 到 window.body 下，调用 destroy 后移除节点，dom 默认 fixed, top0, bottom0, left0, right0;

Demo1: 弹出 1s 后自动销毁的节点

<!-- <code src="./Demo/demo1.tsx"></code> -->

```jsx
import { Pop } from 'fe-react-pop';
import React from 'react';
import './Demo/index.scss';
const Demo1 = () => {
  const pop = () => {
    Pop({
      customDomId: 'demoStyle',
      children: (
        <div>
          弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容
        </div>
      ),
      delay: 1000,
    });
  };

  return <div onClick={pop}>弹出1s后消失</div>;
};
export default () => <Demo1 />;
```

Demo2: 弹出内部子节点控制销毁的窗

```jsx
import { Pop } from 'fe-react-pop';
import React from 'react';
import './Demo/index.scss';

const Content = ({ destroy }: { destroy?: () => void }) => (
  <div>
    弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容
    <div onClick={destroy}>点击此处关闭弹窗</div>
  </div>
);

const Demo = () => {
  const pop = () => {
    Pop({
      children: <Content />,
    });
  };

  return <div onClick={pop}>弹出内部子节点手动销毁</div>;
};

export default () => <Demo />;
```
