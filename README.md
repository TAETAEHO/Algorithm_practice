# TIL

- 매일 학습한 것을 기록하기 위함.

# 링크

- 알고리즘

  - [알고리즘](https://github.com/TAETAEHO/TIL/tree/main/Algorithm)
    <details>
      <summary>2021.09.10 : sort()</summary>

    - sort((a, b) => a-b)
      - 반환값이 0보다 작으면 a를 b보다 앞에 위치시킨다.

    </details>

    <details>
      <summary>2021.09.11 : robotPath</summary>

    - robotPath
      - Y좌표 = DIR[i][0], X좌표 = DIR[i][1]
      - queue 이용
      </details>

  - 프로젝트

    - [MunjiOut (Codestates First Project)](https://github.com/TAETAEHO/TIL/blob/main/Project/note.md)
    - [M4M (Codestates Final Project)](https://github.com/codestates/M4M)

        <details>
        <summary>2021.09.14 : 특정 문자열 선택</summary>
        
      - 특정문자열 선택
        - 전체선택 : ctrl + shift + l
        - 선택 : ctrl + d
        - sequelize
          - 들어가는 값을 고유한 id값과 동일하게 맞추고 싶을 때
          - 테이블.findAll({order: [["createdAt", "DESC"]],});

        </details>
        
        <details>
          <summary>2021.09.15 : csv파일 bulk insert</summary>

          - csv 파일 mysql에 insert 하는 방법
            - load data local infile '파일명'\n into table 테이블명\n fields terminated by ','
            - (https://calen.tistory.com/49)

        </details>

        <details>
          <summary>2021.09.27 : git pull 취소</summary>

          - git pull 취소
            - git reset --hard ORIG_HEAD
          - 해당되는 모든 occurence 변경
            - .replace(/[해당되는 것]/g, '변경하고자 하는 것')

        </details>

        <details>
          <summary>2021.09.28 : git fetch</summary>

          - git fetch <shortname> <branchname>
            - Remote Repository에 branch 내용을 Local Repository에 가져온다. (자동병합 x)

        </details>

        <details>
          <summary>2021.09.29 : 배포환경에서 flat() 에러 핸들링</summary>

          - A cross-origin error was thrown. React doesn't have access ~ 에러
            - JSON.parse()로 데이터를 받아오면 JSON.stringify() 해줘야한다
          - arr.flat()과 같은 개념
            - arr.reduce((acc, val) => acc.concat(val), []);

        </details>

        <details>
          <summary>2021.09.30 : cloudfront accessdenied 에러 핸들링</summary>

          - AWS cloudfront 새로고침 시 accessDenied 에러 해결(React-Route-Dom을 사용한 경우 발생하는 에러)
            - 참고자료 : https://stackoverflow.com/questions/50299204/receive-accessdenied-when-trying-to-access-a-reload-or-refresh-or-one-in-new-tab

        </details>

        <details>
          <summary>2021.10.1 : cloudfront 배포 자동화 에러 핸들링</summary>

          - AWS CloudFront를 사용하여 배포 자동화를 진행할 경우 수정사항이 적용되지 않은 문제
            - CloudFront의 캐시 정책을 수정한다
              - S3 권장 옵션(CachingOptimized)를 사용하게 되면 24시간이 지나야 수정사항이 반영된다. 이를 disabled로 설정하면 바로 적용된다.
          - Nodemailer
            - 이메일을 보내기 위한 모듈
            - 참고자료 : https://bb-library.tistory.com/106
          - ejs
            - 이메일 폼을 만들기 위한 모듈
            - 참고자료 : https://bb-library.tistory.com/106

        </details>

        <details>
          <summary>2021.10.2 : HTTPS 적용</summary>

          - HTTPS 적용
            - 커스텀 도메인을 이용하는 경우 S3, EC2 모두 커스텀 도메인으로 연결해줘야한다.

        </details>

        <details>
          <summary>2021.10.6 : window.location.replace</summary>

          - window.location.replace('경로')
            - 기존 페이지를 새로운 페이지로 변경시킨다. (새로고침)

        </details>

        <details>
          <summary>2021.10.9 : node mailer 에러 핸들링</summary>

          - Node mailer를 통해 메일 전송 구현 시 메일이 2번 가는 현상
            - mail option이라는 변수를 만들어서 sendMail 메서드에 담아 보냈다.

        </details>

        <details>
          <summary>2021.10.10 : flat() -> reduce</summary>

          - arr.flat()과 같은 개념
            - const flattened = arr => [].concat(...arr);

        </details>

      - [Ha_Za (with TypeScript, Prisma, Graphql)](https://github.com/Ha-Za/Ha-Za)

        <details>
          <summary>2021.10.27 : prisma 세팅(관계 설정, migrate)</summary>

        - 참고자료
          - migrate : https://www.prisma.io/docs/concepts/components/prisma-migrate
          - 관계 설정(one to one, one to many) : https://www.prisma.io/docs/concepts/components/prisma-schema/relations
            - one to one : ex) Post?
            - one to many : ex) Post[]
          - prisma 설치 및 node.js와 연동 : https://velog.io/@jinybear/TIL-4.-prisma-%EC%84%A4%EC%B9%98-%EB%B0%8F-node.js%EC%99%80-%EC%97%B0%EB%8F%99

        </details>

        <details>
          <summary>2021.10.28 : schema.prisma, React/Graphql/Prisma로 회원가입 구현, Graphql resolver</summary>

        - ex) id : ID! -> !(느낌표)는 필수라는 뜻
          - https://v1.prisma.io/docs/1.34/datamodel-and-migrations
        - 참고자료(회원가입 구현) : https://goo-eungs.tistory.com/34?category=882310
          - prisma-client 모듈 : prima.create 등으로 테이블에 데이터 생성 및 조회 삭제 가능
            - prisma-client 모듈 설치 안됨(20211029)
        - resolver 인자 : (parent, args, context, info)

        </details>

    - [타입스크립트](https://github.com/TAETAEHO/TIL/tree/main/TypeScript)

    - 기타

        <details>
          <summary>2021.10.14 : raw query vs orm</summary>

      - raw query vs orm

        - orm은 query를 작성하지 않아도 데이터 추가 / 삭제 / 수정가능
        - 특정 DB에 한정되지 않기 떄문에 migration이 자유롭다
        - 성능을 요구하는 raw query가 필요하지 않은 경우 orm을 사용하는게 좋다(사견)

        </details>

        <details>
          <summary>2021.10.16 : cors란, node.js기반 웹 서비스에서 설정 방법</summary>

        - cors란 무엇이고 Node.js기반 웹 서비스에서 어떻게 설정하는지
          - same origin이 아닌 cross origin에 대해서 리소스를 요청하는 것.
          - spa, 고도화 어플리케이션 등장으로 서버 뿐만 아니라 여러 곳의 리소스를 활용하기 위한 목적
          - 응답헤더에 Access-Control-Allow-Origin을 사용하여 허용하고자 하는 도메인 또는 포트를 추가할 수 있다. \*를 사용하여 전체 도메인에 대해 허용할 수 있다.
          - cors 확장 라이브러리를 사용해서 설정할 수 있다.

        </details>

        <details>
          <summary>2021.10.18 : node.js에서 비동기의 개념</summary>

        - Node.js에서 비동기의 개념
          - node는 비동기 IO를 지원하며 Single Thread 기반으로 동작하는 서버이다.
          - node는 비동기 처리를 이벤트 방식으로 처리한다.
          - 클라이언트측의 요청을 비동기로 처리하기 위해 요청을 서버 내부에 메시지 형태로 전달한다.
          - 서버 내부에서 이 메시지를 이벤트 루프가 처리하게 된다.
          - 이벤트 루프가 처리하는 도중 제어권은 다음 요청에게 넘어가며 이전 요청이 완료됐을 경우 콜백 함수를 호출하여 처리완료를 호출측에 전달한다.

        </details>

        <details>
          <summary>2021.10.19 : 객체지향 3대 특징</summary>

        - 캡슐화 : 객체의 속성, 메서드를 하나로 묶음
        - 상속 : 기존 클래스 재사용
        - 다형성
          - 오버로딩 : 같은 이름의 메서드를 여러 개 정의하고 다양하게 호출해서 사용.
          - 오버라이딩 : 상위 클래스의 메서드도 하위 클래스에 상속되어 사용할 수 있다.

        </details>

        <details>
          <summary>2021.10.20 : 클러스터, 넌 클러스터</summary>

        - 클러스터 인덱스
          - 데이터가 정렬되어 있는 상태로 디스크에 저장
          - 검색 속도 빠르지만 update/delete/insert 느림
        - 넌 클러스터 인덱스
          - 데이터가 정렬되어 있지 않은 상태로 디스크에 저장
          - 테이블당 여러개 생성 가능

        </details>

        <details>
          <summary>2021.10.21 : node의 장, 단점</summary>

        - 장점
          - React, Vue 등 스크립트 언어 기반으로 프론트엔드가 개발되었다면 node도 스크립트 기반 언어로 개발하기 때문에 유지보수가 쉬워진다.
          - 규모가 작은 프로젝트에서 싱글 스레드 기반으로 하기 때문에 퍼포먼스 향상이 있다.
        - 단점
          - 출시된지 얼마 되지 않았기 때문에 Java, PHP 등과 같은 신뢰도 문제(현업 개발자님 의견)
          - 싱글 스레드 기반이기 때문에 대규모 프로젝트와 현업에서 사용하는 서비스를 감당하기 버거울 수 있다.

        </details>

        <details>
          <summary>2021.10.22 : 개발 방법론</summary>

        - 폭포수 모델(waterfall)
          - 선형 순차적 모델
          - 이전 단계 수행 완료 시 까지 다음 단계를 수행할 수 없으므로 규모가 큰 프로젝트나 고객의 요구사항이 자주 변경되는 프로젝트에 부적합
        - 애자일
          - 일정한 주기로 프로토타입을 만들어 고객의 요구사항이 있을때마다 반영하는 방식
          - 스크럼 : Sprint 중심, 매일 정해진 장소 정해진 시간에 팀 단위 개발

        </details>

        <details>
          <summary>2021.10.23 : sequelize.define</summary>

        - const users = sequelize.define('user', {
          name : {
          type : DataTypes.STRING,
          allowNull : false
          }
          }, {timestamps : false})

        </details>

        <details>
          <summary>2021.10.24 : tsconfig.json</summary>

        - npm install -D typescript nodemon ts-node
        - npx tsc -init

        </details>

        <details>
          <summary>2021.11.2 : react-addons-update</summary>

        - npm install react-addons-update
        - 참고자료 : https://velopert.com/1015
          - 원소 제거하기 : $splice
          - 원소 수정하기 : $set

        </details>

        <details>
          <summary>2021.11.3 : toISOString</summary>

        - toISOString() 메서드는 단순화한 확장 ISO 형식(ISO 8601)의 문자열을 반환

        </details>

        <details>
          <summary>2021.11.5 : Spread syntax</summary>

        - ex -> return {...obj, something}
          - something이 이미 있을 경우 대체해줌

        </details>

        <details>
          <summary>2021.11.8 : Mocha vs Jest</summary>

        - 참고자료 : https://dailytaeho.tistory.com/6

        </details>

        <details>
          <summary>2021.11.9 : toLocaleString</summary>

        - 배열의 요소를 나타내는 문자열을 반환
        - 참고자료 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString

        </details>

        <details>
          <summary>2021.11.18 : Redux</summary>

        - 참고자료 : https://dailytaeho.tistory.com/7

        </details>

        <details>
          <summary>2021.11.20 : Java - abstract, interface</summary>

        - 참고자료 : https://dailytaeho.tistory.com/9

        </details>

        <details>
          <summary>2021.11.23 : dom-to-image</summary>

        - 참고자료 : https://dailytaeho.tistory.com/10

        </details>

        <details>
          <summary>2021.11.24 : SQL - replace into vs insert into</summary>

        - 참고자료 : https://dailytaeho.tistory.com/11

        </details>

        <details>
          <summary>2021.11.25 : react life cycle</summary>

        - 참고자료 : https://dailytaeho.tistory.com/12

        </details>

        <details>
          <summary>2021.12.04 : componentWillReceiveProps(newProps)</summary>

        - 참고자료 : https://dailytaeho.tistory.com/14

        </details>

        <details>
          <summary>2021.12.05 : Bitbucket에서 git clone하기(app password)</summary>

        - 참고자료 : https://dailytaeho.tistory.com/15

        </details>

        <details>
          <summary>2021.12.15 : MySQL NULL 처리</summary>

        - 참고자료 : https://dailytaeho.tistory.com/16

        </details>

        <details>
          <summary>2021.12.19 : 이벤트 루프, 태스크 큐, 호출 스택</summary>

        - 이벤트 루프
          - 이벤트 발생 시 호출할 콜백함수를 관리
          - 호출할 콜백함수의 순서를 결정한다.
        - 태스크 큐
          - 이벤트 발생 후 호출되어야 할 콜백함수들이 기다리는 공간
        - 호출 스택
          - 현재 어떤 함수가 실행되고 있는지, 함수내에 어떤 함수가 동작하고 있는지 등을 제어한다.

        </details>

        <details>
          <summary>2021.12.21 : react-csv</summary>

        - csv파일로 내려받을 수 있는 모듈
        - ```js
          import { CSVLink } from "react-csv";

          <CSVLink
            header={header}
            data={data}
            filename={"file.csv"}
            className="btn btn-primary"
            target="_blank"
          >
            csv파일 내려받기
          </CSVLink>;
          ```

        </details>
