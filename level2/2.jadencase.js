//JadenCase 문자열 만들기
// 문제 설명
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.
//
// 제한 조건
// s는 길이 1 이상 200 이하인 문자열입니다.
// s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
// 숫자는 단어의 첫 문자로만 나옵니다.
// 숫자로만 이루어진 단어는 없습니다.
// 공백문자가 연속해서 나올 수 있습니다.

//word[0]을 안쓰고 word.charAt(0)을 쓴 이유는 전자는 빈값을(" ") 받으면 undefined를 반환하고,
//후자는 빈값을(" ") 그대로 반환함
function solution(s) {
  const array = s.toLowerCase().split(" ");
  const jadened = array.map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1)
  })

  return jadened.join(" ")
}

function otherSolution(s) {
  return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}