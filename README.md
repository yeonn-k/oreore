# Project oreore

## 🧚‍♂️ 개발 기간 및 인원

- 개발 기간 : 2024/11/12 ~ 2024/11/25
- 개발 인원 : 프론트엔드 2명(김지연, 김하영) / 백엔드 3명(최준영, 이서빈, 한지수)

## 🪴 서비스 소개
- 서비스명 : oreore( 오래오래 )
  - 중고 물품을 등록하고 거래할 수 있는 간편한 중고거래 플랫폼

## ✨ 구현 기능
### 📋 메인페이지
1) grid UI
   - gird의 row 와 item idx 값을 활용하여 지그재그 형태로 색상이 번갈아 나타나는 그리드 구현
     ```
     background-color: ${(props) => {
      const isOddRow = props.row % 2 !== 0;
      const isOddIdx = (props.idx + 1) % 2 !== 0;

      if (isOddRow && isOddIdx) {
        return props.theme.color.blue30;
      }
      if (isOddRow) {
        return props.theme.color.orange30;
      }
      if (isOddIdx) {
        return props.theme.color.orange30;
      }
      return props.theme.color.blue30;
    }};
   ```
2) image carousel
   - `transform: translateX()`와 현재 이미지의 idx 값을 활용하여 필요한 값만큼 씩 이미지를 옆으로 밀어내는 방식으로 이미지 캐러셀 구현

---
### ✏️ 상품 등록/수정 페이지
1) input 컴포넌트
   - `props`로 동적 스타일링이 가능한 공용 컴포넌트 구현
   - 기능 부분은 커스텀 hook으로 분리 구현하여 별도 처리없이 다른 페이지에서도 사용 가능
2) 접근 방식에 따른 페이지 및 기능 구분
   - `location.pathname`으로 등록/수정을 구분
   - 상품 수정을 위한 접근일 경우 아이템 정보를 `GET` 해서 해당하는 input의 value로 넣어줌으로써 사용자 편의 고려
3) 파일 이미지 미리보기
   - `URL.createObjectURL(files[0])를 통해 미리보기 URL을 생성하고 useState로 상태 업데이트
   - 파일 데이터를 읽고 URL을 해제하여 메모리 누수 방지
     ```
     const reader = new FileReader();
     reader.readAsDataURL(file); // 파일 데이터 읽음
     reader.onloadend = () => {
      if (!imgInputRef.current) return; // 파일 입력 참조 X: 종료
     };

     // URL 해제: 메모리 누수 방지
     return () => URL.revokeObjectURL(objectUrl);
     ```
3) 수정 페이지 보안
   - 수정 요청 URL을 직접적으로 노출하지 않음으로써 사용자가 잘못된 경로로 접근하거나 임의 요청을 보내는 것을 방지
   - 수정 상품 id는 `location.state`를 활용해 전달하고 url 경로는 코드 내에서 동적으로 생성
   
---
### 🔍 상품 상세 페이지
1) 스크롤 이벤트
   - `IntersectionObserver`를 활용하여 성능 최적화를 고려한 스크롤 이벤트 구현
2) 수정 페이지 접근 권한
   - 로그인 된 `user.id`와 아이템에 저장된 `seller.id`를 비교하여 자신이 등록한 아이템만 수정 페이지 접근 가능
---
### 👤 마이 페이지
1) 페이지네이션
   - `totalPage`수를 활용하여 page num 배열을 만들고 이를 활용한 페이지네이션 구현
2) 판매중인 상품
   - 내가 등록한 상품만 조회하는 섹션 구현
   - 해당 섹션에서는 등록 상품을 삭제가 가능하므로 아이템 컴포넌트 구현 시 `location.pathname`가 마이 페이지에 해당할 경우 삭제 버튼 조건부 렌더링

---
### 🛜 interceptor
1) request: 회원 여부 확인
   ```
   export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
     const token = localStorage.getItem("token") || "";

     if (token) {
       config.headers["Authorization"] = `Bearer ${token}`;
     }

     return config;
   };
   ```
   - 요청 시 토큰 여부를 확인하고 토큰이 있을 경우 헤더에 토큰을 담아서 요청
2) error: 에러 처리
   - `error.response.status`: 401
     - 모달을 활용하여 유저에게 로그인이 필요한 페이지임을 알리고 확인 시 로그인 페이지로 리다이렉션
---
### 🎨 aws S3
1) 이미지 등록
   - 직접 업로드 대신 `presignedUrl`을 통해 보다 안전하고 효율적으로 데이터를 업로드

---
### 📢 toast
1) 알림 기능
   - 요청 성공, 오류 발생 또는 유효성 검사 실패 등 유저에게 현재 진행 상태를 즉각적으로 알림

## 📚 기술 스택
|TypeScript|React|Styled-Components|
|:---:|:---:|:---:|
| <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://www.styled-components.com/atom.png" width="65" height="65" /> |
