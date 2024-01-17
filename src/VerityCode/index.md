# 验证码组件

```jsx
import { VerityCode } from 'fe-react-pop';
const Demo = () => {
  const handleFinish = (value) => {
    console.log('输入结束：', value);
  };
  return <VerityCode onFinish={handleFinish} />;
};

export default () => <Demo />;
```
