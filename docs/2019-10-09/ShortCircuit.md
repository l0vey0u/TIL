# Short Circuit ( 쇼트 서킷 )이란?
## 연산량을 줄여보자
> && 와 || 의 특징
- &&는 앞이 False일 때 ||는 앞이 True일 때 뒤 불리언 값을 체크하지 않는다.
- 연산자 앞 뒤에 불리언 값을 반환하는 연산 코드를 써놓으면 조건에 따라 뒤 연산 코드를 생략할 수 있고 이는 연산량을 줄이는 효과로 나타난다.

> Example
- ``` doA() || doB() ```
- ``` notA() && notB() ```

따지고 보면 별거 아닌 것이였지만 특수한 용어로 불리고 있다는 것이 신기하다.

---
> 참고 포스트
- [쇼트-서킷](https://m.blog.naver.com/PostView.nhn?blogId=lastingchild&logNo=140188063380&proxyReferer=https%3A%2F%2Fwww.google.com%2F)