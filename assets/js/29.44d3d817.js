(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{228:function(r,e,t){"use strict";t.r(e);var v=t(0),_=Object(v.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"graphql-과-rest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graphql-과-rest"}},[r._v("#")]),r._v(" GraphQL 과 REST")]),r._v(" "),t("p",[r._v("til 작성 페이지 개발을 앞두고 기술 스택을 먼저 조사하던 중 graphql과 rest에 대해 알아보았다.")]),r._v(" "),t("h2",{attrs:{id:"graphql은-q-l"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graphql은-q-l"}},[r._v("#")]),r._v(" GraphQL은 Q.L")]),r._v(" "),t("blockquote",[t("p",[r._v("Query Language")])]),r._v(" "),t("ul",[t("li",[r._v("Client가 Server로 부터 데이터를 효율적으로 가져오기 위하여 쿼리를 작성하고 호출")]),r._v(" "),t("li",[t("code",[r._v("단 하나의 EndPoint")]),r._v(" 에서 요청을 처리")]),r._v(" "),t("li",[r._v("HTTP 요청의 횟수를 줄일 수 있는 이점 존재")]),r._v(" "),t("li",[r._v("원하는 정보만 가져오는 것이 가능하여 Response Data를 줄이는 것도 가능")])]),r._v(" "),t("blockquote",[t("p",[r._v("Query, Mutation")])]),r._v(" "),t("ul",[t("li",[r._v("R : Query")]),r._v(" "),t("li",[r._v("CUD : Mutation")])]),r._v(" "),t("blockquote",[t("p",[r._v("단점")])]),r._v(" "),t("ul",[t("li",[t("code",[r._v("파일 전송")]),r._v("등 Text만으로 처리가 힘들때 복잡해진다.")]),r._v(" "),t("li",[r._v("쿼리 구조라는게 있으므로 고정된 요청과 응답에 대해서는 REST API에 비해 요청의 크기가 커진다.")]),r._v(" "),t("li",[t("strong",[r._v("재귀적인 Query가 불가능")])])]),r._v(" "),t("h2",{attrs:{id:"rest-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[r._v("#")]),r._v(" REST API")]),r._v(" "),t("blockquote",[t("p",[r._v("리소스를 URI로 표현")])]),r._v(" "),t("ul",[t("li",[r._v("GET, POST, PUT, DELETE 활용\n"),t("ul",[t("li",[r._v("GET /api/users/ : 유저 리스트 가져오기")]),r._v(" "),t("li",[r._v("GET /api/users/1/ : 유저 1을 가져오기")]),r._v(" "),t("li",[r._v("POST /api/users/ : 유저 생성하기")]),r._v(" "),t("li",[r._v("PUT /api/users/1/ : 유저 1을 생성")]),r._v(" "),t("li",[r._v("DELETE /api/users/1/ : 유저 1을 삭제")])])])]),r._v(" "),t("blockquote",[t("p",[r._v("한계점")])]),r._v(" "),t("ul",[t("li",[r._v("응답의 형태가 정해져있어 유연함이 부족")]),r._v(" "),t("li",[r._v("각 리소스 종류별로 요청을 하게 되어 요청 횟수 증가")])]),r._v(" "),t("h2",{attrs:{id:"그래서-뭘-쓰지"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#그래서-뭘-쓰지"}},[r._v("#")]),r._v(" 그래서 뭘 쓰지?")]),r._v(" "),t("blockquote",[t("p",[r._v("GraphQL")])]),r._v(" "),t("ul",[t("li",[r._v("서로다른 모양의 "),t("strong",[r._v("다양한")]),r._v(" 요청에 대해 응답이 필요할 때")]),r._v(" "),t("li",[t("strong",[r._v("대부분의 요청이 CRUD에 해당할 때")])])]),r._v(" "),t("blockquote",[t("p",[r._v("RESTful")])]),r._v(" "),t("ul",[t("li",[r._v("HTTP 와 HTTPS에 의한 Caching을 잘 사용하고 싶을 때")]),r._v(" "),t("li",[r._v("File 전송등 CRUD를 벗어나는 요청들이 있을 때")]),r._v(" "),t("li",[r._v("요청이 "),t("strong",[r._v("정해진 구조")]),r._v("인 경우")])]),r._v(" "),t("p",[r._v("GraphQL이 Server의 구조를 단순화 시켜줄 수 있는 좋은 QL이라는데 직접 개발하면서 체감을 해보아야 겠다.")]),r._v(" "),t("hr"),r._v(" "),t("blockquote",[t("p",[r._v("참조 포스트")])]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://tech.kakao.com/2019/08/01/graphql-basic/",target:"_blank",rel:"noopener noreferrer"}},[r._v("GraphQL 개념잡기 - tech kakao"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://www.slideshare.net/deview/112rest-graph-ql-relay",target:"_blank",rel:"noopener noreferrer"}},[r._v("REST에서 GraphQL 과 Relay로 갈아타기 - 이정우 , Deview 2016"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/",target:"_blank",rel:"noopener noreferrer"}},[r._v("GraphQL 과 RESTfulAPI - 안녕 프로그래밍"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=_.exports}}]);