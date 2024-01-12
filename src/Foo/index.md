# Message

h5端，指令式调用弹窗，消失后即销毁
调用后挂载一个dom到window.body下，调用destroy后移除节点

dom默认fixed, top0, bottom0, left0, right0;

Demo1: 弹出1s后自动销毁的节点

```jsx
import { Message } from 'pop';
const Demo = () => {

  const pop = () => {
    Message({
      children: <div>弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容</div>,
      delay: 1000
    })
  }

  return <div onClick={pop}>弹出1s后消失</div>
}

export default () => <Demo />
```
Demo2: 弹出内部子节点控制销毁的窗
```jsx
import { Message } from 'pop';

const Content = ({ destroy }) => 
  <div>弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容
    <div onClick={destroy}>点击此处关闭弹窗</div>
  </div>

const Demo = () => {

  const pop = () => {
    Message({
      children: <Content />
    })
  }

  return <div onClick={pop}>弹出内部子节点手动销毁</div>
}

export default () => <Demo />
```

