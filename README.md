# TIL

- 매일 학습한 것을 기록하기 위함.

# 링크

- 알고리즘

  - [알고리즘](https://github.com/TAETAEHO/TIL/tree/main/Algorithm)
    <details>
      <summary>2021.09.10</summary>

    - sort((a, b) => a-b)
      - 반환값이 0보다 작으면 a를 b보다 앞에 위치시킨다.

    </details>

    <details>
      <summary>2021.09.11</summary>

    - robotPath
      - Y좌표 = DIR[i][0], X좌표 = DIR[i][1]
      - queue 이용
      </details>

  - 프로젝트

    - [MunjiOut (Codestates First Project)](https://github.com/TAETAEHO/TIL/blob/main/Project/note.md)
    - [M4M (Codestates Final Project)](https://github.com/codestates/M4M)

        <details>
        <summary>2021.09.14</summary>
        
      - 특정문자열 선택
        - 전체선택 : ctrl + shift + l
        - 선택 : ctrl + d
        - sequelize
          - 들어가는 값을 고유한 id값과 동일하게 맞추고 싶을 때
          - 테이블.findAll({order: [["createdAt", "DESC"]],});

        </details>
        
        <details>
          <summary>2021.09.15</summary>

          - csv 파일 mysql에 insert 하는 방법
            - load data local infile '파일명'\n into table 테이블명\n fields terminated by ','
            - (https://calen.tistory.com/49)

        </details>

        <details>
          <summary>2021.09.27</summary>

          - git pull 취소
            - git reset --hard ORIG_HEAD
          - 해당되는 모든 occurence 변경
            - .replace(/[해당되는 것]/g, '변경하고자 하는 것')

        </details>

        <details>
          <summary>2021.09.28</summary>

          - git fetch <shortname> <branchname>
            - Remote Repository에 branch 내용을 Local Repository에 가져온다. (자동병합 x)

        </details>

        <details>
          <summary>2021.09.29</summary>

          - A cross-origin error was thrown. React doesn't have access ~ 에러
            - JSON.parse()로 데이터를 받아오면 JSON.stringify() 해줘야한다
          - arr.flat()과 같은 개념
            - arr.reduce((acc, val) => acc.concat(val), []);

        </details>

        <details>
          <summary>2021.09.30</summary>

          - AWS cloudfront 새로고침 시 accessDenied 에러 해결(React-Route-Dom을 사용한 경우 발생하는 에러)
            - 참고자료 : https://stackoverflow.com/questions/50299204/receive-accessdenied-when-trying-to-access-a-reload-or-refresh-or-one-in-new-tab

        </details>

        <details>
          <summary>2021.10.1</summary>

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
          <summary>2021.10.2</summary>

          - HTTPS 적용
            - 커스텀 도메인을 이요하는 경우 S3, EC2 모두 커스텀 도메인으로 연결해줘야한다.

        </details>

        <details>
          <summary>2021.10.6</summary>

          - window.location.replace('경로')
            - 기존 페이지를 새로운 페이지로 변경시킨다. (새로고침)

        </details>

        <details>
          <summary>2021.10.9</summary>

          - Node mailer를 통해 메일 전송 구현 시 메일이 2번 가는 현상
            - mail option이라는 변수를 만들어서 sendMail 메서드에 담아 보냈다.

        </details>

        <details>
          <summary>2021.10.10</summary>

          - arr.flat()과 같은 개념
            - const flattened = arr => [].concat(...arr);

        </details>

    - 기타

        <details>
          <summary>2021.10.14</summary>

      - raw query vs orm
        - orm은 query를 작성하지 않아도 데이터 추가 / 삭제 / 수정가능
        - 특정 DB에 한정되지 않기 떄문에 migration이 자유롭다
        - 성능을 요구하는 raw query가 필요하지 않은 경우 orm을 사용하는게 좋다(사견)

        </details>
