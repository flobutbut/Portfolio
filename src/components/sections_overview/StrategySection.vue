<template>
  <section class="strategy-section">
    <div class="strategy-block">
      <h3 class="h3">Vision & flexibilité</h3>
      <div class="strategy-grid">
        <div class="strategy-item">
          <h4 class="md-bold">Environnement agile</h4>
          <p class="md-regular">
            Chaque itération de sprint est une opportunité d'ajuster, tester et livrer des solutions alignées sur les objectifs stratégiques et les besoins des utilisateurs.
          </p>
        </div>
        <div class="strategy-item">
          <h4 class="md-bold">Stratégie produit</h4>
          <p class="md-regular">
            J'intègre la vision stratégique et les objectifs business dans la roadmap design afin d'assurer une évolution cohérente et alignée avec votre entreprise.
          </p>
        </div>
      </div>
    </div>

    <div class="strategy-block">
      <h3 class="h3">Écosystème & cohérence</h3>
      <div class="strategy-grid">
        <div class="strategy-item">
          <h4 class="md-bold">Écosysteme produits</h4>
          <p class="md-regular">
            Je conçois des écosystèmes produits harmonieux, assurant une cohérence graphique et ergonomique, ainsi qu'une interopérabilité optimale pour une expérience utilisateur fluide et évolutive.
          </p>
        </div>
        <div class="strategy-item">
          <h4 class="md-bold">Design system</h4>
          <p class="md-regular">
            Je mets en place des Design Systems pour garantir une unité visuelle et ergonomique entre vos produits. J’optimise également les processus de conception et de développement afin de vous faire gagner du temps.
          </p>
        </div>
      </div>
    </div>

    <div class="strategy-block">
      <h3 class="h3">Optimisation & adaptation</h3>
      <div class="strategy-grid">
        <div class="strategy-item">
          <h4 class="md-bold">Outils d’analyse</h4>
          <p class="md-regular">
            J’analyse les données utilisateurs pour extraire des insights pertinents qui orientent les décisions stratégiques et optimisent la performance des produits
          </p>
        </div>
        <div class="strategy-item">
          <h4 class="md-bold">Indicateurs de performance</h4>
          <p class="md-regular">
            J'intègre des KPIs pour évaluer l'efficacité des interfaces et ajuster les choix de conception en fonction des besoins réels des utilisateurs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.strategy-section {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-md) * 10);
  color: var(--text-front);

  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);

  padding-left: calc(var(--space-md) * 30);
  padding-right: calc(var(--space-md) * 10);

}

/* Tablettes */
@media (max-width: 1024px) {
  .strategy-section {
    padding-left: calc(var(--space-md) * 20);
    padding-right: calc(var(--space-md) * 5);

    gap: calc(var(--space-md) * 8);
  }
}

/* Mobile */
@media (max-width: 512px) {
  .strategy-section {
    padding-left: calc(var(--space-md) * 6 );
    padding-right: calc(var(--space-md) * 3 );

    padding-top: calc(var(--space-md) * 4);
    padding-bottom: calc(var(--space-md) * 4);
    
    gap: calc(var(--space-md) * 6);
  }

  .strategy-grid {
    grid-template-columns: 1fr;
    gap: calc(var(--space-md) * 3);
  }
}

.strategy-block {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-md) * 2);
}

.strategy-block h3 {
  max-width: 512px;
}

.strategy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--space-md) * 4);
}

.strategy-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-none);
}

.strategy-item h3 {
  color: var(--text-front);
}

.strategy-item p {
  color: var(--text-medium);
}

@media (max-width: 768px) {
  .strategy-grid {
    grid-template-columns: 1fr;
    gap: calc(var(--space-md) * 4);
  }

  .strategy-section {
    gap: calc(var(--space-md) * 8);
  }
}
</style>
