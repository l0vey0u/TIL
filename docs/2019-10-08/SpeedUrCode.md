# 코드 최적화에 대한 이야기

OSAM 집체 교육 선발 테스트에서 충격적인 코딩테스트 성적을 얻었다.

어느 날과 같이 트위터를 탐색하다 코드 최적화 글에 관심이 생겨 읽어보았다.

## 이유 없이 하지마라

> 뭣이 중한디?
- 최적화가 필요하지 않은 코드를 갈아엎지 말아라 빠른 것 보다 더 중요한 것은 읽기 쉬운 코드이다.

## 성능을 좌우해주는 사소한 차이들

> try-catch 대신 if, short-circuit
- 메소드가 NULL 인지 파악하는 다음과 같은 코드가 있다고 하자.
  
  - ``` try obj.do() catch ~ ```
  
  - ``` if (obj.do) obj.do() ```
  
  - ``` obj.do && obj.do() ```
  
  차례 대로 try-catch, if, short-circuit 이라 불리는데 if와 short-circuit이 try-catch에 비해 좋은 성능을 보여준다.
  
  try-catch가 적합한 순간이 아닐땐 이 둘을 더 애용해보자.
  
> map, filter, for .. in 대신 for, foreach
- map, filter는 lambda 식에서 매우 유용하게 사용가능한 도구들이다.

  하지만 많은 성능소요가 있어 무분별한 사용은 지양하고 for이나 foreach를 애용해보자.
  
  for - in은 for문 들 중에서 최악의 성능점수를 찍었다.
  물론 가독성은 좋겠지만 최적화를 논하는 시점이라면 생각해 볼 필요가 있다.


map이 기능이 편하고 코드 가독성도 좋아서 많이 애용했는데
이게 알고리즘 평가에 영향을 줘버린 건지 의심하게 된다.

---
> 참조 포스트
- [앱의 프론트엔드 성능을 향상시키는 방법 - 5가지 코딩 팁 - 박준우](https://junwoo45.github.io/2019-10-05-frontend-performance/)