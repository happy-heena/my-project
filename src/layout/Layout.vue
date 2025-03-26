<template>
  <header>
    <div class="header-top">
      <div class="header-inner">
        <nav>
          <ul>
            <li @click="scrollToSection('about-me')">About Me</li>
            <li @click="scrollToSection('skills')">Skills</li>
            <li @click="scrollToSection('projects')">Projects</li>
            <li @click="scrollToSection('contract')">Contract</li>
          </ul>
        </nav>
        <div class="menu-icon">
          <ul>
            <li>Setting</li>
            <li>Memo</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <main>
    <section id="about-me">About Me</section>
    <section id="skills">Skills</section>
    <section id="projects">Projects</section>
    <section id="contract">Contract</section>
  </main>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 10; /* 헤더가 다른 콘텐츠 위에 오도록 설정 */

  .header-top {
    height: 72px;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.15); */
    background-color: #fff;
  }

  .header-inner {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto; /* 가운데 정렬 */
    max-width: 1200px; /* 최대 너비 제한 */
    padding: 0 20px;
    height: 100%;
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      height: 100%;
      flex-direction: row;
      gap: 10px;

      li {
        font-size: 32px;
        font-weight: bold;
        cursor: pointer;
        padding-bottom: 8px;

        &:hover {
          border-bottom: 3px solid black;
        }
      }
    }
  }

  .menu-icon {
    ul {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 20px;

      li {
        position: relative;
        padding: 0 2px;
      }
    }
  }
}

main {
  margin-top: 72px;

  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    #about-me {
      background-color: lightblue;
    }

    #skills {
      background-color: lightgreen;
    }

    #projects {
      background-color: lightcoral;
    }

    #contract {
      background-color: lightgoldenrodyellow;
    }
  }
}
</style>
