## 동기, Blocking

> 동기 <-> 비동기, Blocking <-> Non Blocking
- 동기-비동기는 프로세스의 수행 순서 보장이 목적이다.
- Blocking-Non Blocking은 프로세스의 유휴상태 ( 동작 상태 )에 대한 개념이다.


> 동기
- Blocking은 농구 기술 용어와 흡사한 기능을 하고, 비 or Non은 반대의 개념이다.
- 즉 동기가 무엇인지만 알면 해결.
- 동기는 sync하는 것이다.
  
  단어 ( Synchronous ) 의 사전적 의미를 보면 '정확히 같은 시간에 발생 존재하는 것' 이다.
  
  ![수영_싱크로](https://evan-moon.github.io/2019/09/19/sync-async-blocking-non-blocking/synchronized-swimming.jpg)
  
  위 사진과 같은 것이라 보면 된다.
  
  그럼 컴퓨터에서 동기란 무엇일까?
  
  현재 작업의 응답과 다음 작업의 요청이 동시에 일어나는 것.
  
  이 말 자체가 어떤 순서를 가지고 진행된다는 의미도 된다.


> 4가지 방식의 이해
1. 동기 & Blocking
- 우리가 가장 많이 사용하는 방식.
- 순차적으로 실행되면서 한 프로세스가 실행중일 때 타 프로세스가 동시에 진행될 수 없다.

2. 동기 & Non Blocking
- yield가 이 방식의 예라고 할 수 있을 것 같다.
- 순차적으로 진행되지만 상위 프로세스가 다른 작업을 진행할 수 있다.
- 동기 === Blocking이 아니라는 점에 유의하자.

3. 비동기 & Non Blocking
- 둘 다 신경쓰지 않겠다. 라고 생각하면 쉽게 생각할 수 있을 것 같다.
  
  프로세스가 순차적으로 실행될 필요가 없으면서 **상위** 프로세스는
  
  **하위** 프로세스에게 일을 맡기고 다른 일을 할 수 있다.
- 강조까지 했지만 상위와 하위 관계라는 것에 유의하자.
- 해당 방식은 동시 작업에 편하지만 개발자 입장에선 흐름을 읽을 수 없다는 단점 존재.
  
  그리하여 JS같은 경우 Promise, async / await 같은 개념이 나온 것이다.
  
4. 비동기 & Blocking
- 저레벨에서 주로 쓰인다.
- 욕심이 많은 경우이다. Non Blocking으로 흐름을 읽기가 힘드니까

  Blocking으로 I/O 흐름을 읽지만 비동기므로 동시에 처리하겠다는
  
  두 마리 토끼를 다 잡으려는 경우이다.
  
  다만 성능이 좋지 못하다.


---
[참조 글 : 동기(Synchronous)는 정확히 무엇을 의미하는걸까?](https://evan-moon.github.io/2019/09/19/sync-async-blocking-non-blocking/)