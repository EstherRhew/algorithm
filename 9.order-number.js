//정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
//
// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

function solution(n) {
  return parseInt((n+"").split("").sort().reverse().join(""));
}

// parseInt 또는 +String <- string앞에 +를 붙이면 number type으로 변환됨.
function otherSolution(n) {
    const newN = n + "";
    const newArr = newN
      .split("")
      .sort()
      .reverse()
      .join("");

    return +newArr;
}


function otherSolution2(n) {
  //숫자가 분명히 더 빠름
  var nums =[];
  do{
    nums.push(n%10);
    n=Math.floor(n/10);
  } while(n>0)

  return nums.sort((a,b)=>b-a).join('')*1;
  //문자는 느림
  return (n+"").split('').sort((a,b)=>b-a).join('')*1;
}