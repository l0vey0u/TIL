## 클라우드 환경에서의 Serverless Service 개발

> API 보안
- 알 수 없는 호스트가 API GW에 무분별한 API 호출하는 것을 방지하는 것은 아래와 같다.
   - HTTPS, CORS 설정, 비대칭 암호화, 압축-난독화, 이상징후
   
> Cache
- 반복된 데이터 요청을 최적화 하기 위해 사용
- In Memory Cache

> Cold Start vs Warm Start
- 함수코드 다운로드 -> 컨테이너 실행 -> 코드실행 준비 -> **실제 코드 실행**
- Warm Start는 실제코드 실행만 진행하여 15배 정도 빠르게 진행된다.
- Cold Start로 안 가게 하는 것이 중요. Warm-UP Event를 걸어주자


[ 참조 : https://mk.kakaocdn.net/dn/if-kakao/conf2019/%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C_2019/T01-S05.pdf ]
