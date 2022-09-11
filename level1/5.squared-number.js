//정수 제곱근 판별
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
//
// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

function solution(n) {
  let answer = -1
  for (let i = 1; i <= n; i++) {
    if (i * i === n) {
      answer = (i + 1) * (i + 1);
      break;
    }
  }
  return answer
}

//
function nextSqaure(n){
  var result = 0;
  var x = 0;

  while(x*x < n)  // x의 값을 계속 증가시킨다. n의 제곱근보다는 작을 때까지
  {
    x++;
  }

  if(x*x == n)  //증가된 x의 값이 n이랑 같을 떄가 오면
  {
    x++;    //x를 1시키고
    result = x*x;  //그를 제곱근한 값을 반환한다.
  }
  else    //같지 않으면
  {
    result = -1;
  }
  return result;
}

//Math.sqrt()사용
function otherSolution(n){
  var result = 0;
  var n = Math.sqrt(n); //
  result = Number.isInteger(n) ? Math.pow(n+1, 2) : -1;
  return result;
}