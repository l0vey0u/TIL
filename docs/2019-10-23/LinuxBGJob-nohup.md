# 리눅스에서 프로세스 백그라운드 실행하기 _ NoHup

## 처음부터 백그라운드 모드로 실행하기
> nohup 사용
- ```nohup cmd &```
- ex ) ```nohup mongod &```

> Foreground 모드로 전환하기
- ```jobs``` 명령어를 통해 현재 백그라운드 실행중인 프로세스 풀 확인
- ```fg %n``` 프로세스 번호를 통해 전환

## 실행중이던 프로세스 전환하기
> ```ctrl + z``` + ```bg %n```
- ```ctrl + z``` 조합을 통해 Stop 상태로 만든다.
- Stop 상태와 함께 나타나는 번호로 ```bg``` 명령어를 통해 접근한다. 

정보보안산업기사 필기 책에서 궁금했던 nohup을 드디어 명확히 알아보았다.

TMUX 없어도 간단한 멀티태스킹은 할 만 하겠다.

---
> 참고 포스트
- [리눅스-백그라운드에서-프로세스-가동-시키는-방법-2가지 - Stima, Tistory](https://guideyou.tistory.com/entry/%EB%A6%AC%EB%88%85%EC%8A%A4-%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%97%90%EC%84%9C-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EA%B0%80%EB%8F%99-%EC%8B%9C%ED%82%A4%EB%8A%94-%EB%B0%A9%EB%B2%95-2%EA%B0%80%EC%A7%80)