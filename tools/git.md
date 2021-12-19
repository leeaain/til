# Git

> ### 모든 설정 확인
```
git config --list
```
> ### 파일로 확인하고 싶을 때
```
git config --global -e
```
> ### 텍스트 에디터와 git 연결하기
```
git config --global core.editor "code --wait"
```
wait 옵션은 터미널을 대기상태로 전환하는 옵션. 삭제하면 터미널 사용 계속 가능.
> ### git user name과 email 설정
```
git config user.email "이메일 주소"
git config user.name "이름"
```
확인
```
git config user.email
git config user.name
```
> ### core.autocrlf : 운영체제끼리 서로 다른 개행문자 사용법을 조절해주는 속성
```
git config --global core.autocrlf input 
// win user는 input 대신 true로 설정
```
운영체제마다 개행 문자가 다르기 때문에 적용하는 옵션

> ### git 초기화
git 프로젝트로 설정하는 것.
```
mkdir git
cd git
git init
```
> ### git 프로젝트 해제
```
rm -rf .git
// 숨겨져있는 git 폴더를 삭제하면 끝
```