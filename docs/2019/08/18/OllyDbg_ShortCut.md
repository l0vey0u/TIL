# 즐거운 리버싱

> 올리 디버거 단축키
- F2 : Break Point
- Ctrl + F2 : Restart Program
- Alt + F2 : Close Program
- F7 : Step Into
- Ctrl + f7 : Animate Into
- F8 : Step Out
- F9 : Run ( debug )
- Ctrl + F9 : Execute Till Return
- Alt + F9 : Execute Till UserCode

> Step Into vs Step out
- Step Into : 단일 명령 실행, 함수 호출일시 호출 대상 위치 진입
, REP ( 반복 코드 ) 일 경우 한 Cycle 실행
- Step Out : Step Into와 비슷하나, 함수 호출을 한 명령어로 간주

> Animate Into ?
- 명령어들을 하나씩 실행하여 함수 호출로 진입

> Execute Till Return vs User Code
- 전자는 함수의 리턴 전까지 실행 후 중지로 실행 완료지점에 멈출 때 유용
- 후자는 라이브러리 코드로 들어가 버렸을 때 디버깅 중이였던 코드로 반환되기까지 실행

> 레지스터 : CPU내 기억장치
- EBP, ESP : 스택 관리
- EIP : Instruction Pointer , 현재 실행중인 명령어
- EAX : 서브루틴의 반환값

