<template>
  <section id="studies" class="section">
    <div class="section-inner">
      <div class="studies-list">
        <div class="study-item">
          <div class="study-header">
            <h3>{{ $t('studies.items.0.title') }}</h3>
            <span class="institution">{{ $t('studies.items.0.institution') }}</span>
            <span class="period">{{ $t('studies.items.0.period') }}</span>
          </div>
          <p class="study-description" v-html="formatText($t('studies.items.0.description'))">
          </p>
          <ul class="tech-list">
            <li>Java</li>
            <li>C#</li>
            <li>Bases de datos</li>
            <li>Desarrollo web</li>
            <li>Apps móviles</li>
            <li>Scrum</li>
          </ul>
        </div>
        
        <div class="study-item">
          <div class="study-header">
            <h3>{{ $t('studies.items.1.title') }}</h3>
            <span class="institution">{{ $t('studies.items.1.institution') }}</span>
            <span class="period">{{ $t('studies.items.1.period') }}</span>
          </div>
          <p class="study-description" v-html="formatText($t('studies.items.1.description'))">
          </p>
          <ul class="tech-list">
            <li>Calidad internacional</li>
            <li>Organización</li>
            <li>Trabajo multicultural</li>
            <li>Sistema dual</li>
          </ul>
        </div>

        <div class="study-item">
          <div class="study-header">
            <h3>{{ $t('studies.items.2.title') }}</h3>
            <span class="institution">{{ $t('studies.items.2.institution') }}</span>
            <span class="period">{{ $t('studies.items.2.period') }}</span>
          </div>
          <p class="study-description" v-html="formatText($t('studies.items.2.description'))">
          </p>
          <ul class="tech-list">
            <li>Análisis financiero</li>
            <li>Excel avanzado</li>
            <li>Reporting</li>
            <li>Contabilidad</li>
          </ul>
        </div>

        <div class="study-item">
          <div class="study-header">
            <h3>{{ $t('studies.items.3.title') }}</h3>
            <span class="institution">{{ $t('studies.items.3.institution') }}</span>
            <span class="period">{{ $t('studies.items.3.period') }}</span>
          </div>
          <p class="study-description" v-html="formatText($t('studies.items.3.description'))">
          </p>
          <ul class="tech-list">
            <li>Gestión empresarial</li>
            <li>Procesos</li>
            <li>Sistemas información</li>
            <li>Atención cliente</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StudiesSection",
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

.studies-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.study-item {
  position: relative;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(46, 26, 80, 0.4);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  /* Borde sólido morado clarito como el menú */
  border: 1px solid #c4b5fd;
}



.study-item:hover {
  transform: translateY(-2px);
  background: rgba(46, 26, 80, 0.6);
  border-color: #d2aff5;
}

.study-header {
  margin-bottom: 1rem;
}

.study-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.institution {
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

.study-description {
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
  .study-item {
    padding: 1.25rem;
  }
  
  .study-header h3 {
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