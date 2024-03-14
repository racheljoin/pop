# 验证码组件 V2

```jsx
import { VerityCodeV2 } from 'fe-react-pop';
const Demo = () => {
  const handleFinish = (value) => {
    alert(`输入结束：${value}`);
  };
  return <VerityCodeV2 onFinish={handleFinish} />;
};

export default () => <Demo />;
```
