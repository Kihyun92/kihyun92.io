---
title: 'useMemo'
excerpt: 'React'
date: '2020-05-01'
author:
  name: Kihyun kim
---

## useMemo

- 상태나 디펜더시에 따라 변하는 인스턴스
- 과한 연산으로 인한 메모이제이션을 기대하는 결과
- memo에 영향이 있을 수 있는 mutable한 값(객체, 배열, 함수, 컴포넌트)라던지, expensive한 계산에만 쓰는게 좋음