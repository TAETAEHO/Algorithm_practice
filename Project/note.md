# MunjiOut (codestates first project)

## 프로젝트 레파지토리 링크

- **[MunjiOut](https://github.com/TAETAEHO/MunjiOut)**

## Position

- Back-end
  - Mypage, Locations 컨트롤러 구현

## 컨트롤러 소개

- Mypage

  - userinfo : 클라이언트에서 Mypage 버튼 클릭 시 로그인 된 사용자의 정보를 불러온다.
  - editUserinfo : Mypage에서 유저가 본인의 정보를 수정할 수 있다. (비밀번호 등등)
  - withdrawal : 유저의 회원탈퇴 기능

- Locations
  - setLocation : 유저가 미세먼지 농도를 알기위한 지역을 검색한 후 그 지역을 선호지역으로 선택하면 해당 정보를 DB에 저장한다.
  - unsetLocation : 유저가 선호지역으로 선택했던 지역을 선호지역에서 제외시키면 DB에 반영한다.

## 보완할 점

- 클라이언트
  - open api 정보를 받아올 때 펜딩되는 경우 화면상에 로딩창이라던지 명확한 정보가 필요할거같다.
  - 회원정보 수정시 수정완료를 알려줄 수 있는 모달창 또는 다른 기능이 필요할거같다.
- 서버
  - sequelize로 DB설계 시 중복 컬럼을 허용하지 않게 설계 할 수 있는지 확인이 필요하다.
  - token에 담긴 유저정보를 req.headers.cookie에서 받아오지 못하고 클라이언트에서 보낸 req.headers.authorization으로 받아온다.  
    따라서 포스트맨으로 테스트 시 서버쪽에서 테스트가 진행되지 않는데 req.body에 회원정보를 받아오고 req.headers.cookie에 토큰 정보를 받아왔을 때 CORS 핸들링을 보완해야한다.

## 에러 핸들링

- 2021.09.01 : 리액트에서 자동으로 페이지 새로고침을 원하는 경우
  - **window.location.replace('/경로')**
  - [리액트에서 페이지 새로고침](https://www.notion.so/useHistory-5f738c684b2b4903bde661256c37b664)
