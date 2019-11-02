# GraphQL 과 REST

 til 작성 페이지 개발을 앞두고 기술 스택을 먼저 조사하던 중 graphql과 rest에 대해 알아보았다.
 
## GraphQL은 Q.L
> Query Language
- Client가 Server로 부터 데이터를 효율적으로 가져오기 위하여 쿼리를 작성하고 호출
- ```단 하나의 EndPoint``` 에서 요청을 처리
- HTTP 요청의 횟수를 줄일 수 있는 이점 존재
- 원하는 정보만 가져오는 것이 가능하여 Response Data를 줄이는 것도 가능

> Query, Mutation
- R : Query
- CUD : Mutation

> 단점
- ```파일 전송```등 Text만으로 처리가 힘들때 복잡해진다.
- 쿼리 구조라는게 있으므로 고정된 요청과 응답에 대해서는 REST API에 비해 요청의 크기가 커진다.
- **재귀적인 Query가 불가능**

## REST API
> 리소스를 URI로 표현
- GET, POST, PUT, DELETE 활용
  - GET /api/users/ : 유저 리스트 가져오기
  - GET /api/users/1/ : 유저 1을 가져오기
  - POST /api/users/ : 유저 생성하기
  - PUT /api/users/1/ : 유저 1을 생성
  - DELETE /api/users/1/ : 유저 1을 삭제

> 한계점
- 응답의 형태가 정해져있어 유연함이 부족
- 각 리소스 종류별로 요청을 하게 되어 요청 횟수 증가

## 그래서 뭘 쓰지?
> GraphQL
- 서로다른 모양의 **다양한** 요청에 대해 응답이 필요할 때
- **대부분의 요청이 CRUD에 해당할 때**

> RESTful 
- HTTP 와 HTTPS에 의한 Caching을 잘 사용하고 싶을 때
- File 전송등 CRUD를 벗어나는 요청들이 있을 때
- 요청이 **정해진 구조**인 경우

GraphQL이 Server의 구조를 단순화 시켜줄 수 있는 좋은 QL이라는데 직접 개발하면서 체감을 해보아야 겠다.

---
> 참조 포스트
- [GraphQL 개념잡기 - tech kakao](https://tech.kakao.com/2019/08/01/graphql-basic/)
- [REST에서 GraphQL 과 Relay로 갈아타기 - 이정우 , Deview 2016](https://www.slideshare.net/deview/112rest-graph-ql-relay)
- [GraphQL 과 RESTfulAPI - 안녕 프로그래밍](https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/)