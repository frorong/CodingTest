# 문제

```
문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ myString의 길이 ≤ 100,000
myString은 알파벳 소문자로 이루어진 문자열입니다.
```

# 내 풀이

```js
function solution(myString) {
  let result = [];
  const length = myString.length;
  for (let i = 0; i < length; i++) {
    result.push(myString.slice(0, myString.indexOf("x")).length);
    myString = myString.slice(myString.indexOf("x") + 1);
    if (!myString.includes("x")) {
      result.push(myString.length);
      break;
    }
  }
  return result;
}
```
