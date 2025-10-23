<template>
  <section id="home" class="section">
    <div class="section-inner">
      <div class="description">
        <p v-html="formatText($t('home.description.paragraph1'))"></p>
        <p v-html="formatText($t('home.description.paragraph2'))"></p>
        <p v-html="formatText($t('home.description.paragraph3'))"></p>
      </div>
      
      <!-- Professional skills showcase -->
      <div class="skills-section">
        <div class="skills-grid">
          <!-- Personal Skills -->
          <div class="skill-category">
            <h4>{{ $t('home.skillsCategories.personal') }}</h4>
            <div class="skills-tags">
              <span v-for="(tag, idx) in personalTags" :key="'p-'+idx" class="skill-tag">{{ tag }}</span>
            </div>
          </div>

          <!-- Technical Skills -->
          <div class="skill-category">
            <h4>{{ $t('home.skillsCategories.technical') }}</h4>
            <div class="skills-tags">
              <span v-for="(tag, idx) in technicalTags" :key="'t-'+idx" class="skill-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'HomeSection',
  setup() {
    const { tm, t } = useI18n()
    const personalTags = computed(() => tm('home.skills.personalTags'))
    const technicalTags = computed(() => tm('home.skills.technicalTags'))

    const formatText = (text) => text.replace(/\*(.*?)\*/g, '<strong>$1</strong>')

    return { personalTags, technicalTags, formatText, t }
  }
}
</script>

<style scoped>
.section {
  width: 100%;
  margin: 0;
  color: #fff;
  line-height: 1.6;
  font-size: 1rem;
}

.section-inner {
  padding: 4rem 0 1rem 0; /* Reduced padding to fit better on screen */
  max-width: 800px;
  margin: 0 auto; /* center inner content block */
  text-align: center;
}

.description {
  margin-bottom: 3rem; /* Reduced margin to prevent scroll */
}

.description p {
  font-size: calc(1.1rem + 1px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
}

.description p:last-child {
  margin-bottom: 0;
}

/* Skills section */
.skills-section {
  margin-top: 2rem; /* Reduced margin to fit content better */
  text-align: left;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.skill-category h4 {
  font-size: 1.1rem;
  color: #c4b5fd;
  margin-bottom: 0.8rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(196, 181, 253, 0.3);
  padding-bottom: 0.3rem;
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: 0.3px;
  cursor: default;
  background: rgba(66, 184, 131, 0.7);
  color: #0d0b1b;
  border: 1px solid rgba(66, 184, 131, 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  
  .skill-category h4 {
    font-size: 1rem;
  }
  
  .skill-tag {
    font-size: 0.8rem;
    padding: 0.35rem 0.7rem;
  }
}

@media (max-width: 480px) {
  .skills-tags {
    gap: 0.4rem;
  }
  
  .skill-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>