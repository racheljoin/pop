# 协议弹窗

Demo1: 带标题

```jsx
import { Agreement } from 'fe-react-pop';
const Demo = () => {
  const pop = () => {
    Agreement({
      content: '协议内容协议内容协议内容协议内容协议内容协议内容',
      title: '用户协议',
    });
  };

  return <div onClick={pop}>确认</div>;
};

export default () => <Demo />;
```
