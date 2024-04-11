# Conditional Rendering

- 조건부 렌더링, 어떠한 조건에 따라서 렌더링이 달라지는 것

## 자바스크립트의 Truthy와 Falsy

- Truthy: true는 아니지만, true로 여겨지는 값
- Falsy: false는 아니지만, false로 여겨지는 값

```js
// truthy
true
{} (empty object)
[] (empty array)
42 (number, not zero)
"0", "false" (string, not empty)

// falsy
false
+-0 (zero)
0n (BigInt zero)
'', "", `` (empty string)
null
undefined
NaN (not a number)
```

# Element Variables

- element를 변수처럼 저장하여 조건부 렌더링에 사용하는 방법

# Inline Conditions

- 조건문을 코드 안에 집어넣는 것

## Inline If

- 조건문에 따라서 값을 보여주거나 보여주지 않음
- && 연산자 사용
- 단축 평가
  - `true && expression` -> expression
  - `false && expression` -> false
    - false 값이 return 되므로 주의

## Inline If-Else

- 조건문에 다른 값을 보여줌
- ? 연산자 사용
- 삼항 연산자 표현식
  - `condition ? true : false`

# Component 렌더링 막기

- `return null`
- 컴포넌트 생명주기 함수에 영향주지 않음
