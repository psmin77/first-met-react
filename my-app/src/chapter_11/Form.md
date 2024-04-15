# Form

- 사용자로부터 데이터 입력을 받기 위한 형식

# Controlled Components

- 리액트의 통제를 받는 Input Form Element
  - HTML Form: 각 요소들이 자체적으로 state 관리하므로 번거로움
- 모든 데이터를 state에서 관리
  - `setState()` 사용
- 사용자의 입력을 직접 제어할 수 있음

## Input

- 사용자로부터 데이터를 입력 받을 수 있는 HTML 태그

## Textarea

- 여러 줄에 걸쳐 긴 텍스트를 입력받기 위한 HTML 태그
- HTML: children으로 전달 받음
  - `<textarea>value</textarea>`
- 리액트: `value`로 전달 받음
  - `<textarea value={value} />`

## Select

- Drop-down 목록을 보여주기 위한 HTML 태그
- HTML: children option 태그에서 `selected` 어트리뷰트 가짐
- 리액트: `<select value={value}>`를 가짐
  - 여러 개의 옵션 선택 가능, 값은 배열 형태
    - `multiple={true}`, `value={[1, 2, ...]}`

## File Input 태그

- `<input tyle="file" />`
- 디바이스의 저장 장치로부터 하나 또는 여러 개의 파일을 선택할 수 있도록 하는 HTML 태그
- Uncontrolled Component : 리액트의 통제를 받지 않음

# Multiple Inputs

- 여러 개의 state를 선언하여 입력 값을 각각 관리함
- 함수 컴포넌트: `useState()` 개별 선언 필요함

# Input Null Value

- 초기 value를 선언하면 코드 수정으로만 변경 가능
- 값을 자유롭게 변경하려면 `undefined` 또는 `null` 설정
