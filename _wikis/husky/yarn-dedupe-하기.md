---
layout: post
title: pre-commit 단계에서 패키지 설치여부에 따라 yarn dedupe 하기
excerpt: ''
categories:
- husky, yarn
tags:
- husky, yarn
date: 2023-03-30
---
## pre-commit 단계에서 패키지 설치여부에 따라 yarn dedupe 하기

매번 수동으로 yarn dedupe 를 하기 귀찮아서 pre-commit 단계에서 yarn.lock 이 변경되었을 때만 yarn dedupe 를 하도록 설정했다.

```json
{
  "scripts": {
    "precommit": "git diff --name-only --cached | grep yarn.lock && yarn dedupe"
  }
}
```

또는 `npx husky add .husky/pre-commit "git diff --name-only --cached | grep yarn.lock && yarn dedupe"` 을 실행하여 `.husky/pre-commit` 파일을 생성해줄 수도 있다!

나는 `yarn dedupe` 한 결과를 커밋에 포함시키기 위해 아래 `git add .`을 추가해줘봤다.

```json
{
  "scripts": {
    "precommit": "git diff --name-only --cached | grep yarn.lock && yarn dedupe && git add ."
  }
}
```
