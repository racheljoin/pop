# 验证码组件V2

```jsx
import { VerityCodeV2 } from 'fe-react-pop';
const Demo = () => {
  const handleFinish = (value) => {
    console.log('输入结束：', value);
  };
  return <VerityCodeV2 onFinish={handleFinish} />;
};

export default () => <Demo />;
```
