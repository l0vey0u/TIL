# 여러 Repository에 대해 SSH 인증 설정하기

## Prolog
> 알게된 계기
- ssh 인증을 통해 편하게 커밋 올리는 것이 좋아서 오늘 막 개발 시작한 1LineDiary 레포에도 ssh인증을 적용시키려 하였다.

  기존 키를 등록 시도하니 "Key is already in used" 에러 메시지와 함께 실패하였다.

  그래서 해결책을 찾아보다가 좋은 글을 발견하였다.

## SSH Key를 여러개 만들기
> 중복은 안되므로 여러개를 만들자
- ```ssh-keygen``` 명령을 통해 생성할 때 나중에 각 Repo마다 지정해 줄 이름들을 정한다.

## SSH Config를 추가하여 설정하기
> ```vim ~/.ssh/config```
- ```
  Host project1.github.com
    Hostname github.com
    IdentityFile ~/.ssh/id_rsa1
  ```
- 맨 윗 구문은 ssh keygen에 대한 short cut, 가상의 path이므로 마음것 적는다.
- IdentityFile 에는 각 repo에 할당할 ssh keygen파일을 입력해준다.
- 그 후 ```remote set-url``` 명령어를 통해 ```git@github.com``` 대신 ```git@project1.github.com``` 으로 바꿔주면 된다.
---
> 참조 포스트
- [github, 여러 repository에 대해 ssh 설정 하기, 잔망스러운 밍피디](https://cfdf.tistory.com/20)

> Epilogue
- 밍피디 ? 저거 유튜브 채널 pd 이름인데 ㅋㅋㅋ
