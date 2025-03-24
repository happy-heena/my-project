<template>
  <div class="top-nav">
    <nav>
      <ul>
        <li><font-awesome-icon icon="home" />홈</li>
        <li><font-awesome-icon icon="history" />히스토리</li>
        <li><font-awesome-icon icon="address-book" />연락처</li>
      </ul>
    </nav>
    <div class="sub-menu">
      <ul>
        <li><font-awesome-icon icon="cog" />setting</li>
        <li><font-awesome-icon icon="pencil-alt" />memo</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽에 배치 */
  align-items: center;
  position: fixed; /* 상단 고정 */
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 10px 20px;
  z-index: 10; /* 다른 요소들 위에 고정되도록 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 살짝 추가 */
}

nav ul,
.sub-menu ul {
  display: flex; /* 가로로 정렬 */
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li,
.sub-menu ul li {
  margin-right: 20px; /* 메뉴 항목 간의 간격 */
  display: flex;
  align-items: center;
}

nav ul li font-awesome-icon,
.sub-menu ul li font-awesome-icon {
  margin-right: 8px; /* 아이콘과 텍스트 간의 간격 */
}
</style>
