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

  return <div onClick={pop}>查看用户协议</div>;
};

export default () => <Demo />;
```

Demo1: body 滚动，内部滚动

```jsx
import { Agreement } from 'fe-react-pop';
const Demo = () => {
  const pop = () => {
    Agreement({
      content: (
        <div style={{ height: '150vh' }}>
          协议内容协议内容协议内容协议内容协议内容协议内容
        </div>
      ),
      title: '用户协议',
    });
  };

  return (
    <div style={{ height: '150vh' }} onClick={pop}>
      查看用户协议
    </div>
  );
};

export default () => <Demo />;
```
