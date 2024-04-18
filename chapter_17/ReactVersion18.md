# React Version 18

## Automatic Batching

- 기존에는 컴포넌트가 update 될 때마다 Re-render 발생
- Automatic Batching : 여러 작업을 묶어서 한 번에 처리
  - Re-render 한 번만 발생함

## Transitions

- 업데이트 종류
  - 긴급한 업데이트: 사용자와 직접적인 인터랙션이 일어나는 경우
    - ex. 글자 입력, 버튼 클릭 등
  - 긴급하지 않은 업데이트: 사용자와 직접적인 인터랙션이 일어나지 않는 경우
    - ex. API 호출 결과 등
- `startTransition` : 긴급하지 않은 업데이트를 설정하여 긴급한 업데이트 이후에 실행됨
  - 중간에 긴급한 업데이트가 생기는 경우 중단될 수 있음

## Suspense

- 하위 컴포넌트가 준비되기 전까지 렌더링을 중단했다가 이후에 실행됨

```js
function MyComponent(props) {
  return (
    // OtherComponent가 준비될 때까지 fallback(LoadingSpinner) 실행됨
    <Suspense fallback={<LoadingSpinner />}>
      <OtherComponent />
    </Suspense>
  );
}
```

## React DOM Client

- `react-dom/client` 패키지 추가
- `ReactDOM.createRoot()` 생성 후 렌더하는 방식으로 변경됨

## React DOM Server

- `renderToPipeableStream` : NodeJS 환경에서 스트리밍을 위한 함수
- `renderToReadableStream` : Edge runtime 환경을 위한 함수

## Strict mode

- 잠재적인 버그를 찾을 수 있도록 하는 모드
- 새로운 동작 방식: 언마운트(unmount) 시켰다가 다시 한 번 마운트(mount) 하는 방식

## Hooks

### useId()

- 서버와 클라이언트에서 고유한 id 값을 생성하기 위한 함수
- `map()`의 key로 사용하는 id가 아닌 element 자체 id 용도

### useTransitions()

- 긴급하지 않은 업데이트를 모아서 처리할 수 있는 함수
- `startTransition`과 동일한 기능

### useDeferredValue()

- 긴급하지 않은 업데이트의 재렌더링을 연기할 수 있는 함수
- 예를 들어, 짧은 시간 내에 상태가 여러 번 변경되더라도 마지막 상태 값만 반영하면 되므로 적용 가능함
- cf. 디바운스

## useSyncExternalStore()

- 외부 저장소를 구독할 수 있도록 하는 함수
- 주로 라이브러리에서 사용

## useInsertionEffect()

- 주로 JSON 라이브러리에서 사용
