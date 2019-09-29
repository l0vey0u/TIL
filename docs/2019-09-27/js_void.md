## javascript:void(0); 을 쓰는 이유
<a id="ee0ac067-1524-47a8-837b-fc94f7421243_link" href="javascript:void(0);" ..>

> a 태그의 특징
- href에 써진 곳으로 이동한다.

> onclick
- 클릭했을 때 이벤트를 설정한다.

> onclick시에만 이동하게 하고 싶다면?
- href에 void(0);과 같이 js code를 써주는 것

즉 a 태그의 디자인을 유지하면서 onclick 이벤트로 쓰고 싶을때 하는 것.

> 왜 void(0); 인가?
- undefined는 구버젼 브라우저에 대한 대응 문제나 global변수로 재 사용 문제가 있기 때문.
---
[참고 블로그](https://m.blog.naver.com/PostView.nhn?blogId=skydoor2014&logNo=221141848372)
