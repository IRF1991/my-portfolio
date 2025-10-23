<template>
  <section id="projects" class="section">
    <div class="section-inner">
      <div class="projects-grid">
        
        <!-- Proyecto 1: Análisis Predictivo -->
        <div class="project-card">
          <div class="project-preview">
            <div class="preview-placeholder">
              <div class="chart-mockup">
                <div class="chart-bars">
                  <span style="height: 60%"></span>
                  <span style="height: 85%"></span>
                  <span style="height: 40%"></span>
                  <span style="height: 95%"></span>
                  <span style="height: 70%"></span>
                </div>
                <div class="chart-line"></div>
              </div>
              <div class="preview-label">{{ $t('projects.items.0.preview') }}</div>
            </div>
          </div>
          
          <div class="project-content">
            <h3>{{ $t('projects.items.0.title') }}</h3>
            <p class="project-description" v-html="formatText($t('projects.items.0.description'))">
            </p>
            
            <div class="project-metrics">
              <div class="metric">
                <span class="metric-value">{{ $t('projects.items.0.metrics.0.value') }}</span>
                <span class="metric-label">{{ $t('projects.items.0.metrics.0.label') }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">{{ $t('projects.items.0.metrics.1.value') }}</span>
                <span class="metric-label">{{ $t('projects.items.0.metrics.1.label') }}</span>
              </div>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">Scikit-learn</span>
              <span class="tech-tag">Pandas</span>
              <span class="tech-tag">Prophet</span>
            </div>
            
            <div class="project-links">
              <a href="https://github.com/IRF1991/GrowFit" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="project-link github"
                 @click.stop="openExternalLink">
                <span>{{ $t('common.github') }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Proyecto 2: Dashboard BI -->
        <div class="project-card">
          <div class="project-preview">
            <div class="preview-placeholder">
              <div class="dashboard-mockup">
                <div class="dashboard-header"></div>
                <div class="dashboard-widgets">
                  <div class="widget"></div>
                  <div class="widget"></div>
                  <div class="widget"></div>
                  <div class="widget large"></div>
                </div>
              </div>
              <div class="preview-label">{{ $t('projects.items.1.preview') }}</div>
            </div>
          </div>
          
          <div class="project-content project-content-flex">
            <h3>{{ $t('projects.items.1.title') }}</h3>
            <p class="project-description" v-html="formatText($t('projects.items.1.description'))">
            </p>
            
            <div class="project-bottom">
              <div class="project-metrics">
                <div class="metric">
                  <span class="metric-value">{{ $t('projects.items.1.metrics.0.value') }}</span>
                  <span class="metric-label">{{ $t('projects.items.1.metrics.0.label') }}</span>
                </div>
                <div class="metric">
                  <span class="metric-value">{{ $t('projects.items.1.metrics.1.value') }}</span>
                  <span class="metric-label">{{ $t('projects.items.1.metrics.1.label') }}</span>
                </div>
              </div>
              
              <div class="project-tech">
                <span class="tech-tag">Vue.js</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">i18n</span>
              </div>
              
              <div class="project-links">
                <a href="https://github.com/IRF1991/my-portfolio" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="project-link github"
                   @click.stop="openExternalLink">
                  <span>{{ $t('common.github') }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSection",
  methods: {
    formatText(text) {
      return text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
    },
    openExternalLink(event) {
      // Prevenir que Vue Router intercepte el link
      event.preventDefault();
      event.stopPropagation();
      window.open(event.target.closest('a').href, '_blank');
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
  max-width: 1000px; /* Slightly wider for grid layout */
  margin: 0 auto;
  text-align: left;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

/* Project Card */
.project-card {
  background: rgba(46, 26, 80, 0.4);
  border: 1px solid #c4b5fd;
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  background: rgba(46, 26, 80, 0.6);
  border-color: #d2aff5;
  box-shadow: 0 8px 32px rgba(46, 26, 80, 0.3);
}

/* Project Preview */
.project-preview {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, rgba(13, 11, 27, 0.8) 0%, rgba(46, 26, 80, 0.6) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-placeholder {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

.preview-label {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #c4b5fd;
  font-weight: 500;
}

/* Chart Mockup */
.chart-mockup {
  position: relative;
  width: 120px;
  height: 80px;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 60px;
  gap: 4px;
}

.chart-bars span {
  width: 18px;
  background: linear-gradient(to top, rgba(66, 184, 131, 0.8), rgba(66, 184, 131, 0.4));
  border-radius: 2px 2px 0 0;
}

.chart-line {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, rgba(196, 181, 253, 0.6), rgba(210, 175, 245, 0.8));
  border-radius: 1px;
}

/* Dashboard Mockup */
.dashboard-mockup {
  width: 140px;
  height: 90px;
  border: 1px solid rgba(196, 181, 253, 0.3);
  border-radius: 6px;
  padding: 8px;
}

.dashboard-header {
  width: 100%;
  height: 12px;
  background: rgba(196, 181, 253, 0.4);
  border-radius: 2px;
  margin-bottom: 8px;
}

.dashboard-widgets {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  height: calc(100% - 20px);
}

.widget {
  background: rgba(66, 184, 131, 0.3);
  border-radius: 3px;
}

.widget.large {
  grid-column: 1 / -1;
}

/* Project Content */
.project-content {
  padding: 1.5rem;
  flex: 1;
}

/* Project Content with bottom alignment */
.project-content-flex {
  display: flex;
  flex-direction: column;
}

.project-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1rem 0;
}

.project-description {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.project-bottom {
  margin-top: auto;
}

/* Project Metrics */
.project-metrics {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #42b883; /* Vue teal */
  line-height: 1;
}

.metric-label {
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 0.25rem;
}

/* Tech Tags */
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(196, 181, 253, 0.15);
  color: #c4b5fd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(196, 181, 253, 0.2);
}

/* Project Links */
.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid;
}

.project-link.github {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
}

.project-link.github:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

.project-link.github.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: rgba(128, 128, 128, 0.1);
}

.project-link.github.disabled:hover {
  background: rgba(128, 128, 128, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.project-link.demo {
  background: rgba(66, 184, 131, 0.2);
  color: #42b883;
  border-color: rgba(66, 184, 131, 0.4);
}

.project-link.demo:hover {
  background: rgba(66, 184, 131, 0.3);
  border-color: rgba(66, 184, 131, 0.6);
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    border-radius: 12px;
  }
  
  .project-content {
    padding: 1.25rem;
  }
  
  .project-metrics {
    gap: 1.5rem;
  }
  
  .project-links {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .project-link {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-preview {
    height: 160px;
  }
  
  .project-content {
    padding: 1rem;
  }
  
  .project-content h3 {
    font-size: 1.125rem;
  }
  
  .project-metrics {
    gap: 1rem;
    justify-content: center;
  }
}
</style>