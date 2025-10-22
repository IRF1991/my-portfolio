<template>
  <section id="experience" class="section">
    <div class="section-inner">
      <div class="experience-list">
        <div class="experience-item">
          <div class="experience-header">
            <h3>{{ $t('experience.jobs.0.title') }}</h3>
            <span class="company">{{ $t('experience.jobs.0.company') }}</span>
            <span class="period">{{ $t('experience.jobs.0.period') }}</span>
          </div>
          <p class="experience-description" v-html="formatText($t('experience.jobs.0.description'))">
          </p>
          <ul class="tech-list">
            <li>Python</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>Azure ML</li>
            <li>Pandas</li>
            <li>Scikit-learn</li>
          </ul>
        </div>
        
        <div class="experience-item">
          <div class="experience-header">
            <h3>{{ $t('experience.jobs.1.title') }}</h3>
            <span class="company">{{ $t('experience.jobs.1.company') }}</span>
            <span class="period">{{ $t('experience.jobs.1.period') }}</span>
          </div>
          <p class="experience-description" v-html="formatText($t('experience.jobs.1.description'))">
          </p>
          <ul class="tech-list">
            <li>Unity</li>
            <li>GitHub</li>
            <li>Scrum</li>
            <li>Bases de datos</li>
            <li>C#</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div class="experience-item">
          <div class="experience-header">
            <h3>{{ $t('experience.jobs.2.title') }}</h3>
            <span class="company">{{ $t('experience.jobs.2.company') }}</span>
            <span class="period">{{ $t('experience.jobs.2.period') }}</span>
          </div>
          <p class="experience-description" v-html="formatText($t('experience.jobs.2.description'))">
          </p>
          <ul class="tech-list">
            <li>Gestión del tiempo</li>
            <li>Liderazgo</li>
            <li>Trabajo en equipo</li>
            <li>Resolución problemas</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienceSection",
  methods: {
    formatText(text) {
      return text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
    }
  }
};
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
  padding: 6rem 0 2rem 0; /* Content aligned with sidebar title */
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-item {
  position: relative;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(46, 26, 80, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  /* Borde sólido morado clarito como el menú */
  border: 1px solid #c4b5fd;
}



.experience-item:hover {
  transform: translateY(-2px);
  background: rgba(46, 26, 80, 0.6);
  border-color: #d2aff5;
}

.experience-header {
  margin-bottom: 1rem;
}

.experience-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.company {
  display: block;
  font-size: 1rem;
  color: #c4b5fd;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.period {
  display: block;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

.experience-description {
  margin: 1rem 0 1.5rem 0;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-size: calc(1rem + 2px);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-list li {
  background: rgba(196, 181, 253, 0.1);
  color: #c4b5fd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(196, 181, 253, 0.2);
}

@media (max-width: 768px) {
  .experience-item {
    padding: 1.25rem;
  }
  
  .experience-header h3 {
    font-size: 1.125rem;
  }
  
  .tech-list {
    gap: 0.375rem;
  }
  
  .tech-list li {
    font-size: 0.8125rem;
    padding: 0.2rem 0.6rem;
  }
}
</style>