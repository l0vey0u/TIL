# 깃허브 명령어 정리
## .gitignore 설정 전에 올라가 버린 파일 어떡해?
> git rm
- ```git rm``` 명령어를 통해 삭제 가능
- ```git rm --cached``` 옵션으로 로컬에선 유지하고 원격지에서만 삭제할 수 있다.
- 다중 폴더의 경우 -r 옵션을 추가해야 한다.

## http 프로토콜로 되어있는 remote 주소를 git 프로토콜로 바꾸고 싶어
> git remote
- ```git remote -v``` 를 통해 우선 현재 remote 주소 확인
- ```git remote set-url git프로토콜주소``` 로 주소 변경