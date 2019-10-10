# 재부팅 후에도 남아있는 최근 실행 앱?

어느 순간부터 ( 롤리팝 부터 였다. ) 재부팅을 했는데도 Recent Apps 화면에서 최근 실행 앱 목록이 남아있는 것을 보고 원리가 궁금했다.

2018년 9월 부터 궁금해서 페이스북 커뮤니티에 질문까지 했었다.

[폰을 재부팅한 후에도 이렇게 목록이 남아있을 수 있는 원리는 무엇인가요?](https://www.facebook.com/photo.php?fbid=1688652611260606&set=gm.2367361373304385&type=3&theater)

질문 글에 달린 답변과 오늘 검색 후 큰 그림으로 이해가 되었다.

## 실제로 돌아가고 있지는 않다.
> like Windows
- 윈도우7에서 최근에 사용한 프로그램 목록을 저장해두는 것이 있다.
- 그와 같은 원리로 실제 동작은 하고 있지 않고 목록 dummy만 저장되어 있는 것이다.

## 목록 dummy를 부팅시에 부른다.
> ActivityManagerService Task List
- [ActivityManagerService.java](https://android.googlesource.com/platform/frameworks/base/+/4f868ed/services/core/java/com/android/server/am/ActivityManagerService.java)를 보면 정확한 원리는 모르겠지만 TaskRecord에 Task들을 저장하는 구문들이 보인다.

  즉 dummy에 계속 저장되고 있고 이렇기에 갑작스런 재부팅에도 리스트는 계속 남아있던 것이다.
  
  그 후 이 dummy를 부팅 시에 불러오는 것이다.
  
---
> 참조 포스트
- 본문 참조 : 페이스북 커뮤니티 질문
- 본문 참조 : ActivityManagerService.java Src Code
