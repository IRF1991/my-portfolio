<template>
  <!-- Menu toggle button for mobile devices -->
  <button
    ref="hamburgerRef"
    class="hamburger"
    @click="toggleSidebar"
    :aria-expanded="isVisible"
    aria-label="Toggle sidebar"
  >
    ☰
  </button>

  <aside ref="sidebarRef" :class="['sidebar', { visible: isVisible }]">
    <!-- Language selector -->
    <div class="language-selector">
      <button 
        v-for="lang in languages" 
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        :class="['lang-button', { active: currentLocale === lang.code }]"
      >
        {{ lang.label }}
      </button>
    </div>

    <!-- Profile introduction -->
    <div class="intro">
      <h1 class="name">{{ $t('profile.name') }}</h1>
      <h2 class="role">{{ $t('profile.role') }}</h2>
      <p class="subtitle">{{ $t('profile.subtitle') }}</p>
    </div>

    <!-- Navigation menu -->
    <nav class="menu">
      <router-link
        v-for="link in menuLinks"
        :key="link.id"
        :to="'/' + link.id"
        class="menu-link"
        :class="{ active: $route.path.substring(1) === link.id || ($route.path === '/' && link.id === 'home') }"
      >
        {{ $t(`nav.${link.id}`) }}
      </router-link>
    </nav>

    <!-- Social media links -->
    <div class="social-links">
      <a href="https://github.com/IRF1991" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/github.svg" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/ismael-raya-fabi%C3%A1n-954780267/" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" />
      </a>
      <a href="mailto:ismaelrf1991@gmail.com" @click="openMailInNewTab" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/icons/mail.svg" alt="Gmail" />
      </a>
    </div>

    <!-- Sidebar border accent -->
    <div class="divider"></div>
  </aside>
</template>

<script>
import github from '@/assets/icons/github.svg'
import linkedin from '@/assets/icons/linkedin.svg'
import mail from '@/assets/icons/mail.svg'
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from 'vue-i18n'

export default {
  name: "Sidebar",
  setup() {
    const { locale } = useI18n()
    
    const menuLinks = [
      { id: 'home' },
      { id: 'experience' },
      { id: 'studies' },
      { id: 'projects' },
    ];

    // Language selector
    const languages = [
      { code: 'es', label: 'ESP' },
      { code: 'en', label: 'ENG' },
      { code: 'de', label: 'DE' }
    ];

    const currentLocale = ref(locale.value);

    const changeLanguage = (langCode) => {
      locale.value = langCode;
      currentLocale.value = langCode;
      localStorage.setItem('preferred-language', langCode);
    };

    // Load preferred language from localStorage
    onMounted(() => {
      const savedLang = localStorage.getItem('preferred-language');
      if (savedLang && ['es', 'en', 'de'].includes(savedLang)) {
        changeLanguage(savedLang);
      }
    });

    // hamburger state and refs
    const isVisible = ref(false);
    const sidebarRef = ref(null);
    const hamburgerRef = ref(null);

    const toggleSidebar = (e) => {
      isVisible.value = !isVisible.value;
      // prevent the click from bubbling to document listener
      if (e && e.stopPropagation) e.stopPropagation();
    };

    const onDocumentClick = (e) => {
      if (!isVisible.value) return;
      const sidebarEl = sidebarRef.value;
      const burgerEl = hamburgerRef.value;
      if (sidebarEl && !sidebarEl.contains(e.target) && burgerEl && !burgerEl.contains(e.target)) {
        isVisible.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', onDocumentClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', onDocumentClick);
    });

    const openMailInNewTab = (e) => {
      e.preventDefault();
      window.open('mailto:ismaelrf1991@gmail.com', '_blank');
    };

    return { 
      github, 
      linkedin, 
      mail, 
      menuLinks, 
      isVisible, 
      toggleSidebar, 
      sidebarRef, 
      hamburgerRef, 
      openMailInNewTab,
      languages,
      currentLocale,
      changeLanguage
    };
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: var(--sidebar-width);
  height: 100vh;
  background: #2e1a50;
  color: #fff;
  padding: 1rem 2.5rem 3rem 1.5rem;
  /* Horizontal alignment reference for consistent spacing */
  --sidebar-inset: var(--edge-gap);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  z-index: 1000;
  transition: all 0.3s ease;
  box-sizing: border-box;
  min-width: 180px;
  position: relative;
  overflow-y: auto;
}

/* Language Selector */
.language-selector {
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  display: flex;
  gap: 0.5rem;
  z-index: 1001;
}

.lang-button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.lang-button:hover {
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.3);
}

.lang-button.active {
  background: rgba(196, 181, 253, 0.2);
  color: #c4b5fd;
  border-color: rgba(196, 181, 253, 0.4);
}

.lang-button.active:hover {
  background: rgba(196, 181, 253, 0.3);
  border-color: rgba(196, 181, 253, 0.5);
}

/* Responsive sidebar width adjustments */
@media (max-width: 1200px) {
  .sidebar {
    width: min(300px, 45vw);
  }
}

@media (max-width: 900px) {
  .sidebar {
    width: min(280px, 40vw);
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: min(260px, 85vw);
    transform: translateX(-100%);
  }
  .sidebar.visible {
    transform: translateX(0);
  }
}

/* Profile introduction section */
.intro {
  text-align: right;
  padding-right: var(--sidebar-inset);
  padding-top: 6rem;
  margin-bottom: 1rem;
}

.name {
  font-size: 2.45rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
  color: #fff;
  line-height: 1.2;
  white-space: normal;
  overflow-wrap: break-word;
}

.role {
  font-size: 1.25rem;
  color: #c4b5fd;
  margin: 0.5rem 0;
  line-height: 1.3;
}

.subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.4;
  margin: 0;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-right: 0;
  margin: 2rem 0;
  flex: 1;
  justify-content: center;
  transform: translateY(-50px);
}

.menu a {
  display: block;
  position: relative;
  color: #fff;
  text-decoration: none;
  text-align: right;
  padding: 0.25rem calc(var(--sidebar-inset) + 0.2rem) 0.25rem 0;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  line-height: 0.8;
}

.menu a::before {
  content: "";
  position: absolute;
  right: calc(var(--sidebar-inset) + 0.2rem);
  bottom: 0.1rem;
  height: 2px;
  width: calc(100% - (var(--sidebar-inset) + 0.7rem));
  background: linear-gradient(to left, #b575f5 0%, rgba(181,117,245,0) 100%);
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.25s ease;
  opacity: 0.95;
}
.menu a:hover {
  color: #c28bf8;
}

.menu a.active::before {
  transform: scaleX(1);
}

.menu a.active {
  color: #d2aff5;
}

/* Hover effect with shorter underline */
.menu a::after {
  content: "";
  position: absolute;
  right: calc(var(--sidebar-inset) + 0.2rem);
  bottom: 0.1rem;
  height: 2px;
  width: calc((100% - (var(--sidebar-inset) + 0.7rem)) * 0.66);
  background: linear-gradient(to left, #b575f5 0%, rgba(181,117,245,0) 100%);
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.2s ease;
  opacity: 0.85;
}

.menu a:hover::after {
  transform: scaleX(1);
}

/* Hide hover effect when link is active */
.menu a.active::after {
  transform: scaleX(0);
}

/* Mobile menu toggle button */
.hamburger {
  display: none;
  position: fixed;
  left: 0.5rem;
  top: 0.6rem;
  z-index: 1101;
  background: rgba(255,255,255,0.04);
  color: #fff;
  border: none;
  padding: 0.45rem 0.6rem;
  border-radius: 6px;
  font-size: 1.05rem;
  cursor: pointer;
}

@media (max-width: 900px) {
  .hamburger { display: block; }
}

/* Social media links section */
.social-links {
  display: flex;
  gap: 1rem;
  padding-right: var(--sidebar-inset);
  align-items: center;
  justify-content: flex-end;
}

.social-links img {
  width: 28px;
  height: 28px;
  transition: transform 0.2s, opacity 0.2s;
  opacity: 0.7;
  object-fit: contain;
}

.social-links a:hover img {
  transform: scale(1.1);
  opacity: 1;
}

/* Sidebar accent border */
.divider {
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  height: 100%;
  background-color: #d2aff5;
  z-index: 999;
  box-shadow: -6px 0 12px -10px rgba(0,0,0,0.6);
}

/* Responsive typography tweaks */
@media (max-width: 900px) {
  .name {
    font-size: 2.15rem; /* slight reduction but still larger */
  }

  .role {
    font-size: 1.15rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .menu a {
    font-size: 1rem;
    padding: 0.25rem calc(var(--sidebar-inset) + 0.1rem) 0.25rem 0;
  }
}

@media (max-width: 768px) {
  .sidebar {
    padding-top: 1rem;
  }

  .language-selector {
    top: 0.8rem;
    left: 1rem;
  }

  .lang-button {
    padding: 0.25rem 0.5rem;
    font-size: 0.7rem;
  }

  .intro {
    padding-top: 4.5rem;
  }

  .name {
    font-size: 1.95rem;
  }

  .role {
    font-size: 1.05rem;
  }

  .subtitle {
    font-size: 0.85rem;
  }

  .menu a {
    font-size: 0.95rem;
    padding: 0.2rem calc(var(--sidebar-inset) + 0.05rem) 0.2rem 0;
  }
}
</style>