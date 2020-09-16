<template>
  <main>
    <section>
      <div class="panel">
        <div class="container" id="home">
          <div class="leading">
            <h1>Herzlich Willkommen!</h1>
            <p>
              Wir bieten einen umfassenden Service rund um den Naturstoff Stein:
              <br />Die Pflege und Restauration von Gebäuden, Sandsteinfassaden,
              Fenstern, Treppen, Geländern, Ornamentent, Denkmälern und
              Grabsteinen.
              <br />
              <br />
              <b>
                Zum Grabmalkatalog:
                <a
                  href="https://www.graef-granit.de/content/produkte"
                  target="_blank"
                >Gräf GmbH</a>
              </b>
            </p>
          </div>
          <div class="hero-image" v-if="$route.name == 'index'" />
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 720 32" style="display: block;">
        <path
          fill="var(--color-background-panel)"
          d="M0 25.576c89.5 6.3147 201.941 10.18 338.75.8675 220.639-15.0187 381.25 0 381.25 0V0H0v25.576z"
        />
      </svg>
    </section>
    <section>
      <div class="container" id="offer">
        <h2>Unser Angebot</h2>
        <p>Eine kleine Übersicht unserer bisherigen Leistungen finden Sie hier.</p>
        <card-offer v-bind="grabmallager" />
        <card-offer v-bind="grabmalreferenzen" />
        <card-offer v-bind="restaurierungen" />
      </div>
    </section>
  </main>
</template>

<script>
import CardOffer from "@/components/CardOffer.vue";
// fill-opacity="0.2"
export default {
  data() {
    return {
      grabmallager: {
        title: "Grabmallager",
        text:
          "Ein sichtbares und individuelles Andenken an einen geliebten Menschen.",
        buttons: [
          {
            text: "Galerie",
            url: "#",
            color: "primary"
          },
          {
            text: "Mehr",
            url: "#",
            type: "text"
          },
        ],
        image: require("@/assets/grabmallager.webp"),
      },
      grabmalreferenzen: {
        title: "Grabmalreferenzen",
        text:
          "Wir erarbeiten mit Ihnen gemeinsam die ganz persönliche Erinnerung an Ihren verstorbenen Verwandten.",
        buttons: [
          {
            text: "Galerie",
            url: "#",
            color: "primary"
          },
          {
            text: "Mehr",
            url: "#",
            type: "text"
          },
        ],
        image: require("@/assets/grabmalreferenzen.webp"),
      },
      restaurierungen: {
        title: "Restaurierungen",
        text:
          "Ein Schwerpunkt unserer Arbeit ist die komplette und fachgemäße Restaurierung historischer Gebäude, Baudenkmale und Bildhauerarbeiten.",
        buttons: [
          {
            text: "Galerie",
            url: "#",
            color: "primary"
          },
          {
            text: "Mehr",
            url: "#",
            type: "text"
          },
        ],
        image: require("@/assets/restaurierungen.webp"),
      },
    };
  },
  components: {
    CardOffer,
  },
};
</script>

<style scoped>
main {
  background: var(--color-background);
}

.panel {
  background: #d9d9da33;
  background: var(--color-background-panel);
}

#home {
  display: flex;
  flex-direction: column;
}

.leading {
  order: 2;
  line-height: 1.625;
}

h1 {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
}

h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.25rem 0 1rem 0;
}

.hero-image {
  background: url("../assets/banner.webp") center 35% no-repeat;
  background-size: cover;
  height: 48vw;
  width: 100%;
  background-position-y: 100%;
}

@media (max-width: 599px) {
  #home {
    padding: 0;
  }

  .leading {
    padding: 0 16px;
  }
}

@media (min-width: 600px) {
  main {
    padding-top: 112px;
  }

  .hero-image {
    order: 1;
    height: 256px;
    border-radius: 4px;
    max-width: 42%;
  }

  .shadow {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.11);
  }

  #home {
    justify-content: space-between;
    padding-top: 96px;
    padding-bottom: 96px;
    flex-direction: row-reverse;
  }

  .leading {
    width: 50%;
  }

  h1 {
    margin-top: 0;
  }

  p {
    font-size: 1.125rem;
  }
}
</style>
