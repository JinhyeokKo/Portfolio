![logo](https://raw.githubusercontent.com/JinhyeokKo/Portfolio/main/docs/logo.png)

* 프로젝트 : 고진혁 포트폴리오
* 기간 : 2025.03 ~ 2025.04
* 링크 : [바로 가기](https://jinhyeokko.pages.dev/)

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/cloudflarepages-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white"/>
##
### 디렉터리 구조
```
├── front/src
│   ├── assets # 홈페이지 이미지 파일
│   ├── components
│   │    ├── carousel # 슬라이드 와퍼
│   │    ├── common # 공통 사
│   │    ├── data # 웹 내에서만 쓰는 데이터
│   │    ├── hooks # 훅 모음
│   │    ├── lists # 프로젝트 아이템
│   │    ├── screen # 화면 조절 기능
│   │    ├── ui # 디자인 모음
│   │    └── viewer # 문서 파서
│   ├── context
│   │    ├── device # 사용자 기기 종류 판별
│   │    └── theme # 홈페이지 기본 테마 설정
│   └── styles # 효과 및 인덱스 css
└── docs # 문서 관리용 폴더
```

### 라이브러리
> 사용한 라이브러리입니다. 자세한 사항은 package.json 파일을 참고해주세요.
* React 19.0.0
* Vite 6.2.0
* Styled-Components 6.1.16
* react-markdown 10.1.0
* react-pdf 9.2.1
* rehype-raw 7.0.0
* remark-gfm 4.0.1

##
### 기능
**공통 기능**
* 다크모드
  > 디폴트값은 사용자 환경에 맞추었습니다.
  > 화면 우측 상단의 토글을 통해 변경할 수 있습니다.
* 스크린
  > 모바일의 경우 화면전환을 통해 프로젝트 내용을 원활히 볼 수 있도록 하였습니다.
  > 화면 우측 상단 토글을 통해 전체화면으로 전환할 수 있습니다.
  > 프로젝트 모달내에서 토글을 통해 가로/세로화면으로 전환할 수 있습니다.
* 사이드 네비게이션
  > 1920px 이상의 디바이스에서 사이드 네비게이션을 통해 각 섹션으로 이동할 수 있습니다.

**프로젝트 관련**
* 캐로셀
  > 카드 형식으로 프로젝트 목록을 구성하였습니다.
  > 슬라이드(그랩)를 통해 다음 목록으로 전환할 수 있습니다.
  > 프로젝트 영역 탭을 통해 카테고리를 지정할 수 있습니다.
* 모달
  > 카드의 디테일 버튼을 클릭 시 활성화됩니다.
  > 프로젝트의 상세 내용을 확인할 수 있습니다.
  > 모바일의 경우 모달 내 토글을 통해 가로/세로화면으로 전환할 수 있습니다.


### 화면 (해상도와 디바이스에 따라 스타일이 다소 다를 수 있습니다.)
| Main                                                                                       |
|--------------------------------------------------------------------------------------------|
| ![section1](https://raw.githubusercontent.com/JinhyeokKo/Portfolio/main/docs/section1.jpg) |
| - 간략한 소개 표시                                                                                |

| About Me                                                                                   |
|--------------------------------------------------------------------------------------------|
| ![section2](https://raw.githubusercontent.com/JinhyeokKo/Portfolio/main/docs/section2.jpg) |
| - 개인 이력 및 스킬 표시                                                                            |

| Interview                                                                                  |
|--------------------------------------------------------------------------------------------|
| ![section3](https://raw.githubusercontent.com/JinhyeokKo/Portfolio/main/docs/section3.jpg) |
| - 셀프 인터뷰 형식 간략한 소개                                                                         |

| Project                                                                                    |
|--------------------------------------------------------------------------------------------|
| ![section4](https://raw.githubusercontent.com/JinhyeokKo/Portfolio/main/docs/section4.jpg) |
| - 카드 형식으로 프토젝트 안내<br/>- 탭 메뉴로 카테고리별 확인<br/>- 페이지 버튼 혹은 그랩으로 슬라이드 이동                        |

| Project Modal                                                                           |
|-----------------------------------------------------------------------------------------|
| ![modal1](https://raw.githubusercontent.com/JinhyeokKo/Portfolio/main/docs/modal1.jpeg) |
| - 프로젝트 상세 정보 및 내용(기간, 설명, 작업, 기술)                                                       |

| Project Modal                                                                           |
|-----------------------------------------------------------------------------------------|
| ![modal2](https://raw.githubusercontent.com/JinhyeokKo/Portfolio/main/docs/modal2.jpeg) |
| - 깃허브 스타일 사용(일부 css 수정)<br/>- 바로가기 링크 추가                                                |

| End                                                                                        |
|--------------------------------------------------------------------------------------------|
| ![section5](https://raw.githubusercontent.com/JinhyeokKo/Portfolio/main/docs/section5.jpg) |
| - 소셜 링크 추가<br/>- 끝 맺음 표시                                                                   |
