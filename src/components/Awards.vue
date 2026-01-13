<template>
  <section class="awards" id="awards">
    <div class="container">
      <h2>Awards & Competitions</h2>
      <p class="section-description">Participation in programming competitions and certifications</p>
      
      <div class="competitions-grid">
        <div 
          v-for="competition in competitions" 
          :key="competition.id"
          class="competition-card"
          @click="openModal(competition)"
        >
          <div class="card-image-wrapper">
             <img :src="competition.image" :alt="competition.name" loading="lazy">
             <div class="card-overlay">
               <i class="fas fa-search-plus"></i>
             </div>
          </div>
          <div class="card-content">
            <h3>{{ competition.name }}</h3>
            <p class="year">{{ competition.year }}</p>
            <p class="description-preview">{{ truncateText(competition.description, 80) }}</p>
          </div>
        </div>
      </div>

      <!-- Modal para imagem expandida e detalhes -->
      <transition name="modal">
        <div v-if="selectedCompetition" class="modal-overlay" @click="closeModal">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeModal">
              <i class="fas fa-times"></i>
            </button>
            <img :src="selectedCompetition.image" :alt="selectedCompetition.name" class="modal-image">
            <div class="modal-info">
              <h3>{{ selectedCompetition.name }}</h3>
              <p class="organization">{{ selectedCompetition.organization }} - {{ selectedCompetition.year }}</p>
              <p class="full-description">{{ selectedCompetition.description }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import { competitions } from '../data/competitions';

export default {
  name: 'Awards',
  setup() {
    const selectedCompetition = ref(null);

    const openModal = (competition) => {
      selectedCompetition.value = competition;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
      selectedCompetition.value = null;
      document.body.style.overflow = ''; // Restore scrolling
    };

    const truncateText = (text, length) => {
      if (text.length <= length) return text;
      return text.substring(0, length) + '...';
    };

    return {
      competitions,
      selectedCompetition,
      openModal,
      closeModal,
      truncateText
    };
  }
};
</script>

<style scoped>
.awards {
  padding: 100px 20px;
  background-color: var(--bg-primary);
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%); 
  color: var(--text-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.awards h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  text-align: center;
  background: linear-gradient(to right, var(--primary), var(--text-highlight));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 60px;
  color: var(--text-secondary);
}

.competitions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 10px;
}

.competition-card {
  background: var(--bg-card);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.competition-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary);
}

.card-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.competition-card:hover .card-image-wrapper img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.competition-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay i {
  color: var(--text-primary);
  font-size: 2rem;
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.competition-card:hover .card-overlay i {
  transform: scale(1);
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: var(--text-highlight);
  font-weight: 600;
}

.year {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--primary);
  background: rgba(var(--primary-rgb), 0.1);
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 12px;
  font-weight: 500;
}

.description-preview {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal-content {
  background: var(--bg-card);
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh; /* Ensure modal fits in viewport */
  display: flex;
  flex-direction: column; /* Allow content to scroll */
  position: relative;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  overflow: hidden; /* Hide main overflow */
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-image {
  width: 100%;
  max-height: 50vh; /* Limit image height */
  object-fit: contain;
  background:black;
}

.modal-info {
  padding: 30px;
  overflow-y: auto; /* Scroll info if too long */
}

.modal-info h3 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--primary);
}

.modal-info .organization {
  font-size: 1.1rem;
  color: var(--text-accent);
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
}

.full-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .awards {
    padding: 60px 20px;
  }
  
  .awards h2 {
    font-size: 2rem;
  }
  
  .competitions-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-info h3 {
    font-size: 1.5rem;
  }
}
</style>