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
