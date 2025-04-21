<script setup lang="ts">

import Achievement from "@/components/Achievement.vue";
import hackathon from "@/assets/achievements/hackathon.png";
import proposal from "@/assets/achievements/proposal.png";

const hackathonDesc = "Redesigned the booking forms for the testing center " +
    "used by students with accommodations at Saskpolytech to be more accessible and user-friendly. " +
    "Using JavaScript with HTML/CSS while applying key UI/UX design principles, the improved form and " +
    "submission experience was tailored to fit the event’s theme of " +
    "“How to make Saskpolytech a better place for future students”."

const proposalDesc = "Given a list of requirements from a client, the task was to create a proposal " +
    "detailing the technical specifications of hardware parts that were thoroughly researched to be the " +
    "best fit for the desktop machines and peripherals needed by said client. The final proposal came well " +
    "under the budget that was outlined and exceeded the technical requirements given."
</script>

<template>
  <div class="titleArea">
    <h1>Achievements</h1>
  </div>

  <div id="hackathon">
    <Achievement title="Saskpolytech Hackathon 2024 Winner" :image-on-right="true" :description="hackathonDesc" :image="hackathon" />
  </div>
  <br />
  <div id="proposal">
    <Achievement title="Best in Class: Technical Writing Proposal" :image-on-right="false" :description="proposalDesc" :image="proposal" />
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
</style>
