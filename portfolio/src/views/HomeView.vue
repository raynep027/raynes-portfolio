<script setup lang="ts">
import {BListGroup, BListGroupItem, BContainer, BRow, BCol} from "bootstrap-vue-next";
import { AkLinkedinBoxFill } from '@kalimahapps/vue-icons';
import { BxGmail } from '@kalimahapps/vue-icons';
</script>

<template>
  <div class="titleArea">
    <h1>Welcome to Rayne's Portfolio</h1>
  </div>


  <div class="mainArea">
    <div id="about">
      <h2>About Me</h2>
      <p>I am a second-year student in Saskpolytech's Computer Systems Technology program. I am looking forward to
       going into a career of Software Development, with aspirations to develop Accessibility Software or work in
      Indie Game Development one day. I'm excited to continue to learn after I graduate and I am confident that I
       will be able to adapt to the tools and environment of my next experience.</p>
    </div>
    <BContainer>
      <BRow>
        <BCol>
          <div id="skills">
            <h2>Skills</h2>
            <BListGroup>
              <BListGroupItem>
                <div class="fw-bold">Programming Languages</div>
                <ul>
                  <li>Java</li>
                  <li>C#</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>TypeScript</li>
                  <li>PHP</li>
                  <li>C</li>
                  <li>SQL</li>
                </ul>
              </BListGroupItem>
              <BListGroupItem>
                <div class="fw-bold">Frameworks and Tools</div>
                <ul>
                  <li>Symfony</li>
                  <li>Vue.js</li>
                  <li>Doctrine</li>
                  <li>MySQL</li>
                  <li>SQLite</li>
                  <li>PrimeVue</li>
                  <li>Bootstrap</li>
                  <li>Azure</li>
                  <li>Google Cloud Platform</li>
                </ul>
              </BListGroupItem>
              <BListGroupItem>
                <div class="fw-bold">Other</div>
                <ul>
                  <li>Version Control (Git)</li>
                  <li>UI/UX Design Principles</li>
                  <li>MVC Design Pattern</li>
                  <li>Test-Driven Development</li>
                  <li>Agile Methodology</li>
                </ul>
              </BListGroupItem>
            </BListGroup>
          </div>
        </BCol>
        <BCol>
          <div id="interests">
            <h2>Interests and Hobbies</h2>
            <BListGroup>
              <BListGroupItem>Software Development</BListGroupItem>
              <BListGroupItem>UI/UX Design</BListGroupItem>
              <BListGroupItem>Accessibility Software</BListGroupItem>
              <BListGroupItem>Mechanical Keyboards</BListGroupItem>
              <BListGroupItem>Cozy Games</BListGroupItem>
              <BListGroupItem>Interior Decorating</BListGroupItem>
              <BListGroupItem>Painting</BListGroupItem>
            </BListGroup>
          </div>
        </BCol>
      </BRow>

    </BContainer>


    <div id="contact">
      <h2>Contact Me</h2>
      <a href="https://www.linkedin.com/in/rayne-perry-2993782a6/" target="_blank">
        <AkLinkedinBoxFill />
      </a>
      <span><BxGmail/> raynep03@gmail.com</span>
    </div>
  </div>

</template>

<style scoped>
.titleArea, h1 {
  text-align: center;
  font-size: 40pt;
}

.mainArea {
  padding-top: 1rem;
  text-align: center;
}

li {
  text-align: left;
}

#about {

}

#skills {

}



</style>
