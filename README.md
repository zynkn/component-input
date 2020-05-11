# 타이틀

이 repo는 리액트 컴포넌트의 뼈대를 만들고 있습니다.




## 다른 컴포넌트 보기

* [component-input](https://choosealicense.com/licenses/mit/)
* [component-calendar](https://choosealicense.com/licenses/mit/)


## Property

```ts
interface InputProps {
  id?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
  prefix?: string | number | React.ReactNode;
  suffix?: string | number | React.ReactNode;
  disabled?: boolean;
  block?: boolean;
  type?: "text" | "number" | "email" | "password" | "tel";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: () => void;
}
```

## Example
[링크](https://choosealicense.com/licenses/mit/)
```react
/* 기본 */
<Input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />

/* ref 사용 가능 */
const inputEl = React.useRef<HTMLInputElement>(null);
<Input ref={inputEl} placeholder="email" type="email" block value={value} onChange={(e)=>setValue(e.target.value)} onPressEnter={()=>{console.log('ggg')}} />
```