# 确认框

Demo1: 带标题

```jsx
import { Confirm } from 'fe-react-pop';
const Demo = () => {
  const pop = () => {
    Confirm({
      content: '确认删除吗',
      title: '删除确认',
    });
  };

  return <div onClick={pop}>确认</div>;
};

export default () => <Demo />;
```

Demo2: 不带标题

```jsx
import { Confirm } from 'fe-react-pop';
const Demo = () => {
  const pop = () => {
    Confirm({
      content: '确认删除吗',
    });
  };

  return <div onClick={pop}>无标题</div>;
};

export default () => <Demo />;
```

Demo3: 自定义 footer

```jsx
import { Confirm } from 'fe-react-pop';

const CustomFooter = ({ destroy }) => {
  const handleConfirm = () => {
    destroy();
  };
  const handleCancel = () => {
    destroy();
  };
  return (
    <div style={{ display: 'flex' }}>
      <div onClick={handleConfirm}>确定</div>
      <div onClick={handleCancel}>取消</div>
    </div>
  );
};

const Demo = () => {
  const pop = () => {
    Confirm({
      content: '确认删除吗',
      footer: <CustomFooter />,
    });
  };

  return <div onClick={pop}>自定义footer</div>;
};

export default () => <Demo />;
```

Demo4: 阻止外部滚动

```jsx
import { Confirm } from 'fe-react-pop';
const Demo = () => {
  const pop = () => {
    Confirm({
      content: '确认删除吗',
      title: '删除确认',
    });
  };

  return (
    <div onClick={pop} style={{ height: '150vh' }}>
      确认
    </div>
  );
};

export default () => <Demo />;
```
