<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  
  let slideElement: HTMLElement;
  
  // Svelte 5 reactive state for modal
  let activeModal = $state<string | null>(null);
  
  const agents = [
    {
      id: 'claude',
      logo: '🅒',
      name: 'Claude Code',
      type: 'Hub-and-Spoke + Agent Teams',
      desc: 'Por defecto <strong>secuencial/conversacional</strong>. Subagents opcionales en paralelo con opt-in explícito.',
      badges: ['Paralelo (opt-in)', 'Context isolation', 'Ecosistema maduro'],
      // Modal content
      modal: {
        arquitectura: [
          'Por defecto: SECUENCIAL/CONVERSACIONAL (agentic loop single-threaded)',
          'Orquestación: Subagents (hub-and-spoke, estables) + Agent Teams (mesh, experimental)',
          'Paralelización: NO por defecto, requiere opt-in explícito del usuario'
        ],
        casosUso: [
          'Flujos conversacionales donde el contexto se comparte naturalmente',
          'Exploración de codebase sin necesidad de paralelización',
          'Tareas que requieren el mejor modelo de razonamiento disponible',
          'Proyectos donde el ecosistema Anthropic es el estándar'
        ],
        valorPrincipal: 'Integración nativa con Anthropic, mejor modelo de razonamiento del mercado, ecosistema más maduro y estable',
        patrones: ['Hub-and-Spoke', 'Mesh (Agent Teams)', 'Secuencial con memoria']
      }
    },
    {
      id: 'roo',
      logo: '🦘',
      name: 'Roo / Kilo Code',
      type: 'Human-in-the-Loop Obligatorio',
      desc: 'Flujo <strong>secuencial con approval</strong> humano obligatorio. Visibilidad total de cada paso.',
      badges: ['Secuencial', 'Human-in-loop', 'Modos por rol'],
      modal: {
        arquitectura: [
          'Por defecto: HUMAN-IN-THE-LOOP obligatorio (approval para cada acción)',
          'Modos: Code (💻), Ask (❓), Architect (🏗️), Debug (🪲), Orchestrator (🪃)',
          'Orchestrator Mode: NO tiene tools directos, solo delega via `new_task`'
        ],
        casosUso: [
          'Cuando quieres CONTROL TOTAL sobre cada acción del agente',
          'Aprendizaje: ver exactamente qué hace el agente paso a paso',
          'Equipos junior: el approval obligatorio actúa como mentoría',
          'Código crítico donde cada cambio debe ser revisado'
        ],
        valorPrincipal: 'Visibilidad completa de cada paso, granularidad de permisos, open source y extensible',
        patrones: ['Secuencial con checkpoints', 'Delegación jerárquica', 'Modos especializados']
      }
    },
    {
      id: 'kiro',
      logo: '◈',
      name: 'Kiro',
      type: 'Spec-driven + Hooks System',
      desc: '<strong>Specs antes que código</strong>: defines el qué, Kiro implementa el cómo. Hooks para automatización.',
      badges: ['Spec-first', 'AWS native', 'Hooks system'],
      modal: {
        arquitectura: [
          'Por defecto: SPEC-DRIVEN (requirements.md → design.md → tasks.md)',
          'Hooks: 10 triggers event-driven (File Save, Post Tool Use, etc.)',
          'Powers: MCP con carga dinámica (no todo de golpe)',
          'Autonomous Agent: Hasta 10 tareas paralelas en sandboxes aislados'
        ],
        casosUso: [
          'Proyectos estructurados que necesitan documentación viva',
          'Equipos que quieren specs persistentes como fuente de verdad',
          'Integración con infraestructura AWS nativa',
          'Automatización avanzada con hooks personalizados'
        ],
        valorPrincipal: 'Specs persistentes que evolucionan con el proyecto, hooks para automatización, integración AWS nativa',
        patrones: ['Spec-to-implementation', 'Event-driven hooks', 'Autonomous parallel execution']
      }
    }
  ];
  
  function openModal(agentId: string) {
    activeModal = agentId;
  }
  
  function closeModal() {
    activeModal = null;
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
  
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
  
  function handleBackdropKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
  
  onMount(() => {
    animateSlideEntrance(slideElement);
    
    // Add keyboard listener
    window.addEventListener('keydown', handleKeydown);
    
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Casos Reales</span>
      <h2 class="title">Patrones del <span class="highlight">Mundo Real</span></h2>
      <p class="subtitle">Cómo se usan subagentes y skills en herramientas reales.</p>
    </div>

    <div class="main-layout">
      {#each agents as agent}
        <button 
          type="button"
          class="example-card card-glass clickable"
          onclick={() => openModal(agent.id)}
        >
          <div class="example-header">
            <div class="brand-logo {agent.id}">{agent.logo}</div>
            <div class="brand-info">
              <h3 class="brand-name">{agent.name}</h3>
              <span class="brand-type">{agent.type}</span>
            </div>
            <div class="click-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </div>
          <div class="example-body">
            <p class="example-desc">{@html agent.desc}</p>
            
            {#if agent.id === 'claude'}
              <div class="flow-visual">
                <div class="flow-source">
                  <span class="flow-icon">👤</span>
                  <span class="flow-label">Prompt</span>
                </div>
                <div class="flow-branch">
                  <div class="branch-line"></div>
                  <span class="branch-label">opt-in</span>
                </div>
                <div class="flow-parallel">
                  <div class="flow-item small">
                    <span class="flow-icon">🔍</span>
                    <span class="flow-label">Explore</span>
                  </div>
                  <div class="flow-item small">
                    <span class="flow-icon">📋</span>
                    <span class="flow-label">Plan</span>
                  </div>
                  <div class="flow-item small">
                    <span class="flow-icon">🔨</span>
                    <span class="flow-label">Build</span>
                  </div>
                </div>
                <div class="flow-merge">
                  <span class="merge-label">consolida</span>
                </div>
                <div class="flow-result">
                  <span class="flow-icon">✓</span>
                  <span class="flow-label">Resultado</span>
                </div>
              </div>
            {:else if agent.id === 'roo'}
              <div class="flow-visual">
                <div class="flow-seq">
                  <div class="flow-item">
                    <span class="flow-icon">🏗️</span>
                    <span class="flow-label">Architect</span>
                  </div>
                  <div class="flow-approval">
                    <span class="approval-icon">👤</span>
                    <span class="approval-label">approve</span>
                  </div>
                  <div class="flow-item">
                    <span class="flow-icon">⌨️</span>
                    <span class="flow-label">Code</span>
                  </div>
                  <div class="flow-approval">
                    <span class="approval-icon">👤</span>
                    <span class="approval-label">approve</span>
                  </div>
                  <div class="flow-item">
                    <span class="flow-icon">🧪</span>
                    <span class="flow-label">Test</span>
                  </div>
                </div>
              </div>
            {:else if agent.id === 'kiro'}
              <div class="flow-visual">
                <div class="flow-spec">
                  <div class="flow-item green">
                    <span class="flow-icon">📝</span>
                    <span class="flow-label">Spec</span>
                  </div>
                  <div class="flow-arrow-h">→</div>
                  <div class="flow-item">
                    <span class="flow-icon">👀</span>
                    <span class="flow-label">Review</span>
                  </div>
                  <div class="flow-arrow-h">→</div>
                  <div class="flow-item">
                    <span class="flow-icon">🔧</span>
                    <span class="flow-label">Implement</span>
                  </div>
                  <div class="flow-arrow-h">→</div>
                  <div class="flow-item">
                    <span class="flow-icon">🪝</span>
                    <span class="flow-label">Hooks</span>
                  </div>
                </div>
              </div>
            {/if}
            
            <div class="tech-badges">
              {#each agent.badges as badge, i}
                <span class="badge" class:badge-highlight={i === 0}>{badge}</span>
              {/each}
            </div>
          </div>
        </button>
      {/each}
    </div>

    <div class="bottom-takeaway">
      <span class="takeaway-icon">🎯</span>
      <p><strong>Patrón común:</strong> Todas estas herramientas combinan <span class="highlight-text">orquestación inteligente</span> + <span class="highlight-text">contexto especializado</span> + <span class="highlight-text">iteración con memoria</span>.</p>
    </div>
  </div>
</div>

{#if activeModal}
  {@const agent = agents.find(a => a.id === activeModal)}
  {#if agent}
    <div 
      class="modal-overlay" 
      onclick={handleBackdropClick} 
      onkeydown={handleBackdropKeydown}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-title"
      tabindex="-1"
    >
      <div class="modal-content">
        <button type="button" class="modal-close" onclick={closeModal} aria-label="Cerrar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="modal-header">
          <div class="modal-logo {agent.id}">{agent.logo}</div>
          <div class="modal-title-group">
            <h2 id="modal-title" class="modal-title">{agent.name}</h2>
            <span class="modal-type">{agent.type}</span>
          </div>
        </div>
        
        <div class="modal-body">
          <section class="modal-section">
            <h3 class="section-title">
              <span class="section-icon">⚙️</span>
              Cómo funciona
            </h3>
            <ul class="section-list">
              {#each agent.modal.arquitectura as item}
                <li>{@html item}</li>
              {/each}
            </ul>
          </section>
          
          <section class="modal-section">
            <h3 class="section-title">
              <span class="section-icon">🎯</span>
              Cuándo usarlo
            </h3>
            <ul class="section-list">
              {#each agent.modal.casosUso as item}
                <li>{@html item}</li>
              {/each}
            </ul>
          </section>
          
          <section class="modal-section">
            <h3 class="section-title">
              <span class="section-icon">💎</span>
              Valor principal
            </h3>
            <p class="section-value">{agent.modal.valorPrincipal}</p>
          </section>
          
          <section class="modal-section">
            <h3 class="section-title">
              <span class="section-icon">🔄</span>
              Patrones de orquestación
            </h3>
            <div class="pattern-chips">
              {#each agent.modal.patrones as pattern}
                <span class="pattern-chip">{pattern}</span>
              {/each}
            </div>
          </section>
        </div>
      </div>
    </div>
  {/if}
{/if}

<style>
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 75%, rgba(30, 58, 138, 0.1) 0%, transparent 50%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    width: 100%;
    padding: var(--spacing-2xl) var(--spacing-content);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  .slide-header { text-align: center; }

  .label {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-electric);
    margin-bottom: var(--spacing-sm);
  }

  .title {
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 800;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-sm);
    line-height: 1.15;
  }

  .highlight {
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--color-electric);
    opacity: 0.8;
    margin-bottom: 0;
    font-family: var(--font-mono);
  }

  .main-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
    align-items: stretch;
  }

  .example-card {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
    border-color: rgba(59, 130, 246, 0.25);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    text-align: left;
    border: none;
    background: none;
    width: 100%;
  }

  .example-card.clickable:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.4);
  }

  .example-card.clickable:focus {
    outline: 2px solid var(--color-electric);
    outline-offset: 2px;
  }

  .example-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.2);
    border-bottom: 1px solid rgba(59, 130, 246, 0.15);
    position: relative;
  }

  .click-hint {
    position: absolute;
    right: var(--spacing-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-electric);
    opacity: 0.4;
    transition: opacity 0.2s ease;
  }

  .example-card.clickable:hover .click-hint {
    opacity: 1;
  }

  .brand-logo {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    font-size: 1.4rem;
    font-weight: 800;
    flex-shrink: 0;
  }

  .brand-logo.claude {
    background: linear-gradient(135deg, #d97706, #f59e0b);
    color: white;
  }

  .brand-logo.roo {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    color: white;
    font-size: 1.5rem;
  }

  .brand-logo.kiro {
    background: linear-gradient(135deg, #ff9900 0%, #ffb84d 100%);
    color: #232f3e;
    font-size: 1.6rem;
    font-weight: 900;
  }

  .brand-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    padding-right: var(--spacing-xl);
  }

  .brand-name {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--color-neutral-light);
    margin: 0;
  }

  .brand-type {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--color-electric);
    opacity: 0.7;
  }

  .example-body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    flex: 1;
  }

  .example-desc {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.6;
    margin: 0;
  }

  .example-desc :global(strong) {
    color: var(--color-electric);
    font-weight: 700;
  }

  .flow-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-md);
    background: rgba(10, 22, 40, 0.4);
    border-radius: var(--radius-sm);
  }

  .flow-source, .flow-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(96, 165, 250, 0.15);
    border: 1px solid rgba(96, 165, 250, 0.3);
    border-radius: var(--radius-sm);
  }

  .flow-branch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .branch-line {
    width: 1px;
    height: 12px;
    background: var(--color-electric);
    opacity: 0.4;
  }

  .branch-label, .merge-label {
    font-family: var(--font-mono);
    font-size: 0.55rem;
    color: var(--color-accent-bright);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .flow-parallel {
    display: flex;
    gap: var(--spacing-xs);
  }

  .flow-merge {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flow-arrow-h {
    font-size: 0.8rem;
    color: var(--color-electric);
    opacity: 0.5;
  }

  .flow-seq {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
    justify-content: center;
  }

  .flow-approval {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 2px 6px;
    background: rgba(34, 197, 94, 0.15);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: var(--radius-sm);
  }

  .approval-icon {
    font-size: 0.7rem;
  }

  .approval-label {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: #22c55e;
    text-transform: uppercase;
  }

  .flow-spec {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
    justify-content: center;
  }

  .flow-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: var(--radius-sm);
  }

  .flow-item.green {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.2);
    box-shadow: 0 0 8px rgba(34, 197, 94, 0.3);
  }

  .flow-item.green .flow-label {
    color: #4ade80;
  }

  .flow-item.small {
    padding: var(--spacing-xs) var(--spacing-sm);
  }



  .flow-icon {
    font-size: 1rem;
  }

  .flow-item.small .flow-icon {
    font-size: 0.9rem;
  }

  .flow-label {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--color-electric);
    font-weight: 600;
  }

  .tech-badges {
    display: flex;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
  }

  .badge {
    display: inline-flex;
    padding: 4px var(--spacing-sm);
    font-family: var(--font-mono);
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: rgba(59, 130, 246, 0.15);
    color: var(--color-electric);
    border-radius: var(--radius-sm);
    border: 1px solid rgba(59, 130, 246, 0.2);
  }

  .badge-highlight {
    background: rgba(96, 165, 250, 0.25);
    border-color: rgba(96, 165, 250, 0.4);
    color: var(--color-neutral-light);
  }

  .bottom-takeaway {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.25);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: var(--radius-sm);
    margin-top: auto;
  }

  .takeaway-icon {
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .bottom-takeaway p {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    margin: 0;
    line-height: 1.6;
  }

  .bottom-takeaway strong {
    color: var(--color-electric);
  }

  .highlight-text {
    color: var(--color-accent-bright);
    font-weight: 600;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(10, 22, 40, 0.9);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: var(--spacing-lg);
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal-content {
    background: linear-gradient(145deg, rgba(30, 58, 138, 0.3), rgba(10, 22, 40, 0.95));
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: var(--radius-md);
    max-width: 700px;
    width: 100%;
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.3s ease-out;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .modal-close {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    background: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: var(--radius-sm);
    padding: var(--spacing-sm);
    cursor: pointer;
    color: var(--color-electric);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-close:hover {
    background: rgba(59, 130, 246, 0.25);
    border-color: rgba(59, 130, 246, 0.4);
  }

  .modal-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl);
    border-bottom: 1px solid rgba(59, 130, 246, 0.15);
  }

  .modal-logo {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    font-size: 2rem;
    font-weight: 800;
    flex-shrink: 0;
  }

  .modal-logo.claude {
    background: linear-gradient(135deg, #d97706, #f59e0b);
    color: white;
  }

  .modal-logo.roo {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    color: white;
    font-size: 2.2rem;
  }

  .modal-logo.kiro {
    background: linear-gradient(135deg, #ff9900 0%, #ffb84d 100%);
    color: #232f3e;
    font-size: 2.2rem;
    font-weight: 900;
  }

  .modal-title-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .modal-title {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--color-neutral-light);
    margin: 0;
  }

  .modal-type {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-electric);
    opacity: 0.7;
  }

  .modal-body {
    padding: var(--spacing-xl);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .modal-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-accent-bright);
    margin: 0;
  }

  .section-icon {
    font-size: 1.1rem;
  }

  .section-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .section-list li {
    position: relative;
    padding-left: var(--spacing-lg);
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    line-height: 1.6;
    opacity: 0.9;
  }

  .section-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-electric);
    opacity: 0.6;
  }

  .section-list li :global(strong) {
    color: var(--color-electric);
    font-weight: 600;
  }

  .section-value {
    font-size: 0.95rem;
    color: var(--color-neutral-light);
    line-height: 1.7;
    margin: 0;
    padding: var(--spacing-md);
    background: rgba(96, 165, 250, 0.1);
    border-left: 3px solid var(--color-electric);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }

  .pattern-chips {
    display: flex;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
  }

  .pattern-chip {
    display: inline-flex;
    padding: var(--spacing-sm) var(--spacing-md);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    background: rgba(59, 130, 246, 0.15);
    color: var(--color-electric);
    border: 1px solid rgba(59, 130, 246, 0.25);
    border-radius: var(--radius-sm);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .main-layout {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }

    .slide-content {
      padding: var(--spacing-lg) var(--spacing-md);
      gap: var(--spacing-lg);
    }

    .title {
      font-size: clamp(1.6rem, 5vw, 2.4rem);
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .brand-logo {
      width: 42px;
      height: 42px;
      font-size: 1.2rem;
    }

    .brand-name {
      font-size: 1rem;
    }

    .brand-type {
      font-size: 0.65rem;
    }

    .example-desc {
      font-size: 0.85rem;
    }

    .flow-item {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .flow-icon {
      font-size: 0.9rem;
    }

    .flow-label {
      font-size: 0.62rem;
    }

    .badge {
      font-size: 0.58rem;
      padding: 3px var(--spacing-xs);
    }

    .bottom-takeaway {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .takeaway-icon {
      font-size: 1.1rem;
    }

    .bottom-takeaway p {
      font-size: 0.82rem;
    }

    .modal-content {
      max-height: 90vh;
    }

    .modal-header {
      padding: var(--spacing-lg);
    }

    .modal-logo {
      width: 52px;
      height: 52px;
      font-size: 1.6rem;
    }

    .modal-title {
      font-size: 1.5rem;
    }

    .modal-body {
      padding: var(--spacing-lg);
      gap: var(--spacing-md);
    }
  }

  @media (max-width: 480px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-sm);
      gap: var(--spacing-md);
    }

    .slide-header {
      margin-bottom: var(--spacing-sm);
    }

    .label {
      font-size: 0.7rem;
      margin-bottom: var(--spacing-xs);
    }

    .title {
      font-size: clamp(1.4rem, 6vw, 1.8rem);
    }

    .subtitle {
      font-size: 0.8rem;
    }

    .example-header {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .brand-logo {
      width: 38px;
      height: 38px;
      font-size: 1.1rem;
    }

    .brand-name {
      font-size: 0.9rem;
    }

    .brand-type {
      font-size: 0.6rem;
    }

    .example-body {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .example-desc {
      font-size: 0.8rem;
    }

    .flow-visual {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .flow-item {
      padding: 4px var(--spacing-xs);
    }

    .flow-item.small {
      padding: 2px 6px;
    }

    .flow-icon {
      font-size: 0.85rem;
    }

    .flow-item.small .flow-icon {
      font-size: 0.8rem;
    }

    .flow-label {
      font-size: 0.58rem;
    }

    .badge {
      font-size: 0.55rem;
      padding: 2px 6px;
    }

    .bottom-takeaway {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .takeaway-icon {
      font-size: 1rem;
    }

    .bottom-takeaway p {
      font-size: 0.75rem;
      line-height: 1.5;
    }

    .modal-overlay {
      padding: var(--spacing-sm);
    }

    .modal-header {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .modal-logo {
      width: 44px;
      height: 44px;
      font-size: 1.3rem;
    }

    .modal-title {
      font-size: 1.2rem;
    }

    .modal-type {
      font-size: 0.7rem;
    }

    .modal-body {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .section-title {
      font-size: 0.9rem;
    }

    .section-list li {
      font-size: 0.85rem;
      padding-left: var(--spacing-md);
    }

    .section-value {
      font-size: 0.85rem;
      padding: var(--spacing-sm);
    }

    .pattern-chip {
      font-size: 0.7rem;
      padding: var(--spacing-xs) var(--spacing-sm);
    }
  }

  @media (max-width: 390px) {
    .slide-content {
      padding: var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .title {
      font-size: clamp(1.2rem, 6vw, 1.6rem);
    }

    .subtitle {
      font-size: 0.75rem;
    }

    .example-header {
      padding: var(--spacing-sm);
    }

    .brand-logo {
      width: 34px;
      height: 34px;
      font-size: 1rem;
    }

    .brand-name {
      font-size: 0.85rem;
    }

    .brand-type {
      font-size: 0.58rem;
    }

    .example-body {
      padding: var(--spacing-sm);
    }

    .example-desc {
      font-size: 0.75rem;
    }

    .flow-item {
      padding: 3px 6px;
    }

    .flow-icon {
      font-size: 0.8rem;
    }

    .flow-label {
      font-size: 0.55rem;
    }

    .badge {
      font-size: 0.52rem;
    }

    .bottom-takeaway {
      padding: var(--spacing-sm);
    }

    .bottom-takeaway p {
      font-size: 0.7rem;
    }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-content);
      gap: var(--spacing-md);
    }

    .main-layout {
      gap: var(--spacing-md);
    }

    .brand-logo {
      width: 44px;
      height: 44px;
      font-size: 1.3rem;
    }

    .brand-name {
      font-size: 1rem;
    }

    .brand-type {
      font-size: 0.68rem;
    }

    .example-body {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .example-desc {
      font-size: 0.85rem;
    }

    .flow-visual {
      padding: var(--spacing-sm);
    }

    .flow-item {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .flow-icon {
      font-size: 0.9rem;
    }

    .flow-label {
      font-size: 0.62rem;
    }

    .tech-badges {
      gap: 4px;
    }

    .badge {
      font-size: 0.58rem;
      padding: 3px var(--spacing-xs);
    }

    .bottom-takeaway {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .takeaway-icon {
      font-size: 1.1rem;
    }

    .bottom-takeaway p {
      font-size: 0.82rem;
    }
  }
</style>
