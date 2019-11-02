# 파이썬 DebugModule : cProfile
![cProfile콘솔적용화면](https://i.imgur.com/4RwmcOX.png)

## cProfile

cProfile 모듈을 time 인자로 -s (Sort) 한 결과이다.

실행 후 어떤 메소드가 얼마나 호출 됬는지 확인 가능하다.

> 파라미터 설명
- ncalls | 호출 횟수
- tottime | for the total time spent in the given function
  
  (and excluding time made in calls to sub-functions)
- percall | 호출정도
- cumtime | is the cumulative time spent in this and all subfunctions (from invocation till exit).
  
  This figure is accurate even for recursive functions
- percall | is the quotient of cumtime divided by primitive calls
- filename:lineno(function) - provides the respective data of each function

위 사진과 같은 경우

[백준 2579번 문제](https://www.acmicpc.net/problem/2579)에 대한 결과인데

7개 인자를 input 받았고 T를 제외한 6개를 리스트에 추가했고.. 이런 정보들을 확인 된다.

---

이걸로는 디버깅시 원인 찾기엔 부족할 거 같고, 직접 프로그래밍 해보면서

해당 사항에 대해선 다시 공부해야 할 것 같다.
