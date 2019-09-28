## SPA vs PWA 뭐가 다른거야?

> 결론
- PWA의 구현 방법중 하나에 SPA가 포함된다.

> SPA
- 모든 Action이 한 페이지에서 이루어지는 어플리케이션 형태의 웹

> PWA
- 실제론 웹 페이지지만 Native 경험을 제공해주는 앱
- GeoLocation, ServiceWorker를 다루면서 보안이 더욱 중요 아니 필수 단계
- HTTP/2, Brotli 압축, MITM 방지를 위해 HTTPS가 필수
- 사이트 정보를 담은 JSON 파일인 WEB APP Manifest
- 현재 SSL 적용 여부는 검색 순위에도 영향을 준다.
- linkable
  - 북마크가 가능해야 한다.
  - 내 주관으론 이게 SPA와의 차별점이라고 말할 수 있을 것 같다.
- 오프라인 대응
  - Indexed DB, Local Storage, sessionStorage
- 성능을 위해 JPEG 이미지의 경우 WebP로 제공을 고려할 것

---
[참조 글 - 웹 프로젝트는 PWA이어야 한다.](https://webactually.com/2017/09/%EC%9B%B9-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%8A%94-pwa%EC%9D%B4%EC%96%B4%EC%95%BC-%ED%95%9C%EB%8B%A41/)

[참조 글 - top-10-web-development-trends-to-follow-in-2019](https://dzone.com/articles/top-10-web-development-trends-to-follow-in-2019)
