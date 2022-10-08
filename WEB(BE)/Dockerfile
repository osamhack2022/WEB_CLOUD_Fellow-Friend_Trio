# githubCodeSpaces 노드 버전 명시
FROM node:16.17.0

LABEL name="Fellow-Friend"

# Node.js 앱을 위한 app 폴더 생성
RUN mkdir /NodeApp

# 어플리케이션 폴더를 WORKDIR명령어로 지정 - 서버 가동용
WORKDIR /NodeApp


# 가능한 package.json 과 yarn.lcok 을 복사
COPY package.json .
COPY yarn.lock .
# 의존성 설치
RUN yarn install

# 나머지 추가
COPY . .


# 앱이 3000번 포트에 바인딩 되어있기 때문에 컨테이너의 3000번 포트를 열어줌
EXPOSE 8080
# 인자값을 지정하지 않을시 node app.js를 실행
CMD [ "yarn", "prod" ]