# OSAM 개발 아이디어 계획 전 도구 사전 조사
> SPA
- Single Page Application, 단일 페이지로 Server Side Rendering에 비해 배포가 간단. ( CSR )
- Native와 유사한 사용자 경험
- link tag를 이용하여 새로운 페이지를 요청 시 static res를 다운받는 방식은 새로고침이 발생하고 변경이 필요없는 부분도 갱신한다는 단점이 존재
- AJAX 기술을 이용, 웹 앱에 필요한 모든 static res를 최초에 한번 다운로드 ( 초기 구성속도의 단점 유발 )
- 필요시 마다 갱신이 필요한 부분의 데이터만 전달하여 트래픽 감소 효과, 새로 고침 미 발생으로 Native와 유사경험 구현

> VUE.js
- 간결함, 사용의 편리함
- JS다.
- 구조와 간결함의 멋진 결합
- 뷰에 사용될 data는 data라는 객체에 저장, 이벤트의 callback들은 모두 methods 객체에 저장, 이 들은 언제든 볼 수 있고 실행 가능.
- vue.js는 값이 변하는 것을 확인 후 뷰를 업데이트 할 뿐.
- vue가 화면 제어를 해주어 데이터 중심의 사고 가능

> Element UI
- VUE.js UI Toolkit
- 일종의 부트스트랩 같은 느낌
