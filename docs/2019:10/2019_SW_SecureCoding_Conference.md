# 제 9회 소프트웨어 개발보안 컨퍼런스 참가 후기
> 부제
- 초 연결 시대, **소**프트웨어 **개**발보안 시큐어코**딩**

## Prologue
> 수상자로 왔을 때 와는 다른 기분
- 작년에는 SW 개발보안 경진대회에서 우수상을 수상하게 되어 수상자 자격으로 참가했었다.
- 내가 인코그니토 발표 준비하면서 공부했던 Fuzzing 관련 내용이 책자에 있는 것은 보았지만 학기 중에 바쁜 와중에 온 것이라 오후 세션은 못 듣고 수상 후 바로 왔었다.
- 올해는 휴가 중에 갈만한 컨퍼런스를 찾다가 우연히 발견하였고, 내가 직접 신청했다.
- 작년보다 더 열심히 들으면서 도움이 되는 시간으로 만들어야 겠다고 다짐했다.

## 초연결 사회 실현을 위한 SW 신뢰성 확보
> 발표자 : 고려대학교 **김승주** 교수
- 보안에 발을 담은 사람이라면 한번 이상 듣는 다는 김승주 교수님의 발표가 나에겐 첫 세션이였다.

> 초연결 사회
- 4차 산업혁명 시대는 AWS 서비스 연결처럼 IOT들이 연결되 있는 사회이다.
- 해킹에 대한 대비는 당연하고 더해서 유저의 실수와 자연 재해에 대한 **내성**이 요구된다.
- 2017년 뉴스를 참고하면 심장박동조절기에 8600개가 넘는 취약점이 발견되었는데 해당 취약점을 패치한 버젼으로 업데이트를 하려면 OTA 방식의 업뎃이 아닌 가까운 병원을 방문해야해 더욱 보안이 중요한 상태
- ```보안 내재화```의 개념은 단순히 시큐어 코딩 뿐 아니라 설계 자체 오류에 대해서도 대비해야 되는 것이다. ( Spectre, Meltdown, WPA2 Nonce Reuse )
- 미 국방부의 보안 패러다임을 보면 목표가 Security에서 Trustworthiness로 즉 무해킹에 더불어 **무장애** 까지로 바뀌었다.

> 걸프전을 돌아보며
- 항공 미사일, 유도 미사일등으로 폭격하여 초토화를 시킨 뒤 보병이 들어가서 점령하는 방식으로 이루어졌다.
- 그리하여 위치 정보가 필요하였어서 최초의 정보전이라고 일컬어지고 있다.
- 보안가의 시점에서는 해킹으로 인한 통신 교란/노출등이 문제가 되지 않을까 생각했지만 실제로 더 문제가 되었던 것은 모래폭풍으로 인한 통신 두절이였다.
- 신뢰성, 가용성이 중요함을 인식하는 계기가 되었다.

> 복잡도를 최소화하라!
- 보안만을 강요하여 기업에게 보안SW를 넣는 것을 강요하는 순간 코드의 복잡도가 올라가면서 신뢰도가 떨어진다.
- e = mc^2은 여기서도 예외가 아니다. ( Error = More Connection^2 )

> 모의해킹은 한계가 있다.
- 모의해킹에서 취약점이 발견되지 않았다는 것은 그저 모의해킹팀이 그 기간동안 그 비용으로 찾지 못하였다는 것으로 기간과 비용이 더 제공되었을 때 발견되었을 수 있다.
- 개발 프로세스 내 보안 내재화가 중요하다.
  - 요구사항 분석 및 설계단계에서 보안 고려
  - 복잡도 최소화 ( 시큐어 코딩 **위주** 정책에서 탈피 )

> Shift Left
- SDL( Security Development Lifecycle ) 에서 보안 팀이 하던 일을 개발자에게 넘기자
- 보안 팀은 **개발자가 쓰기 편한** 분석 도구를 만들어서 제공하고 상위 단계에서 평가( valuation ) 하자
- 현실은 보안 팀이 개발자 위치에서 분석 하고 있거나, 보안가에만 맞게 분석 도구를 만드는 형태

> Common Criteria ( 국제 공통 평가 기준 )
- EAL1 ~ EAL7 숫자가 높을 수록 높다.
- KNOX가 EAL2, Windows도 EAL4이며 EAL6~7은 무기체계에 해당하는 레벨이다.
- 고려대에서는 EAL7 Secure OS 개발을 하고 있음.

## SW개발보안 정책 현황과 발전방향
> 발표자 : 한국인터넷진흥원

> 개발 보안 적용 여부도 검사하겠다.
- 국정원에서 정보보호관리실태 점검 항목 내 ```개발 보안 적용``` 항목 신설

> CWE
- **C**ommon **W**eakness **E**numeration
- 소프트웨어 주요 약점 리스트

> 보안 약점
- 약점은 겉으론 들어나지 않지만 나중에 발견되면 공격에 이용될 수 있는 것.
- CWE가 이에 속한다.
- 모든 보안 약점이 보안 취약점이 되지는 않는다.

> 보안 취약점
- 취약성에 근본 원인이 되는 SW 결점, 오류로 이미 발견된 오류이다.
- CVE가 이에 속한다.
- 보안 약점에 속한다.

[참고 발표자료 - 보안약점 vs 보안취약점](http://sigpl.or.kr/conf/2013/4.pdf)

**추가 조사 ( 보안 위험 vs 보안 위협 )**
> 보안 위험
- 외부의 위협이 내부의 취약성을 이용하여 보유한 각종 자산에 피해를 입힐 수 있는 잠재적인 가능성 ( 국제보안표준 ISO17799 )

> 보안 위협
- 보안 사고에 위협을 일으킬 수 있는 잠재적 원인이나 행위

[참고 포스트 - 정보보안실무, Tistory.Jeongchul](https://jeongchul.tistory.com/435)

## AI 시대의 보안과 소프트웨어 개발
> 발표자 : Microsoft 김영욱 ATS
- 일단 MS, 믿음대로 제일 흥미로웠던 세션이였다.

> MS에서 기술력으로 사회에 공헌하는 법
- 표정 / 안면 인식을 통해 아동포르노 범죄 수사를 돕기
  - 남미에서는 아동이 납치되어 혹사당하는 아동포르노 문제가 심각한 상황
  - MS의 표정/안면 인식 API로 모든 아동 포르노 영상을 데이터로 하여 분석
  - 감정과 나이를 판단하여 FingerPrint를 획득
  - 역추적을 통해 지역이 좁혀지면 인터폴과 협업하여 수사를 돕는다.

> AI 시대의 개발
- 기본에선 A+B = C 를 개발자가 구현했다.
- 이젠 + 를 학습시킨 후 A, B 데이터를 주면 C가 나온다.
- 굉장히 많아진 데이터의 **단순** 반복 및 분석 작업을 해줄 담당 기술
- 맥도날드 Drive-Thru 에서 알바생을 편하게 하는데 AI가 쓰이고 있다.
  - 음성인식으로 주문자의 음성을 전부 받아적는다.
  - 그 데이터를 2차적으로 가공하여 주문표를 만들어준다.
  - **이 모든 것을 AI 기술이 한다.**
  - 정확도도 사람보다 좋고, 소음에 대한 취약성도 적고, 사람처럼 지치지도 않는 많은 장점 보유
- 친숙한 PowerPoint, Excel에서도 쓰이고 있다.
  - 디자인 추천이 전 세계 모든 PPT 디자인을 분석한 후 이루어지는 근거있는 추천이다.
  - Excel 활용 방법이 전세계 모든 Excel 활용 내역을 분석한 후 주어지는 근거있는 조언이다.
- 최근에 제공되는 Microsoft Teams에서도 기술이 사용된다.
  - 화상회의시 주변 인물이나 사물이 보이지 않도록 Blur처리가 되며 배경을 자기가 원하는 것으로 변경도 가능하다.
  
> 보안은 어디에?
- 발표자가 중점을 개발에 둔 것 같다. 아니면 내가 개발 부분에서만 흥미를 느꼈거나...

## 블록체인 기반의 클라우드 및 IOT 소프트웨어 보안
> 발표자 : 주식회사 틸론 / 이춘성 **부사장**
- 발표 시작부터 여기 사람들 이력서 보내면 자기 권한으로 바로 면접하겠다는 부사장 능력을 보여줬다.

> 대기업을 해킹하는 방법 : 취약한 접점을 공략하라
- 대기업은 요즘 시대엔 기본적으로 보안 체계가 잘 갖추어져 있어 해킹이 쉽지않다.
- 노련한 해커들은 주로 대기업과 거래하는 회계 사무소, 법무 사무소를 공격한다.
  - 상대적으로 취약하여 해킹 가능성이 높고 거래처기 때문에 대기업의 자료들을 다 가지고 있기 때문이다.
- 이들을 위한 보안 Solution이 필요하다.

> 저것만이 유일한 기억
- ElCloud 좋아보이네 내 원격환경조성에 활용해볼까? 정도 생각해봤다.

## 2019 소개딩 후기
> 강연식 컨퍼런스, 밥은 맛있었다.
- SSTF, Ifkakao와는 다르게 매우 강연식 컨퍼런스였다. 질의 응답을 유도했던 발표자들에 대한 반응이 없어서 발표자가 불쌍해보이기 까지 했다. 작년 기억을 지켜주고 오히려 업그레이드 할 정도로 밥은 맛있었다. 다음에 한다면 ... 누가 무엇을 강연하나에 따라 올지 말지 고민될 것 같다.
- 그때쯤 난 **병장**이다 전역을 앞둔 ㄷㄷ