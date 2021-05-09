<template>
  <section
    id="offer"
    ref="offer"
  >
    <div class="gray">
      <div class="container pv-md-d">
        <div class="box">
          <h2>Unser Angebot</h2>
          <p>
            Eine kleine Übersicht unserer bisherigen Leistungen finden Sie hier.
          </p>
          <div class="offers">
            <offer-card v-bind="grabmallager" />
            <offer-card v-bind="grabmalreferenzen" />
            <offer-card v-bind="restaurierungen" />
          </div>
        </div>
      </div>
    </div>
    <Wave color="var(--v-gray-base)" />
  </section>
</template>

<script>
export default {
  name: "Offer",
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
            color: "primary",
          },
          {
            text: "Mehr",
            url: "#",
            type: "text",
          },
        ],
        image: require("@/assets/img/grabmallager.webp"),
      },
      grabmalreferenzen: {
        title: "Grabmalreferenzen",
        text:
          "Wir erarbeiten mit Ihnen gemeinsam die ganz persönliche Erinnerung an Ihren verstorbenen Verwandten.",
        buttons: [
          {
            text: "Galerie",
            url: "#",
            color: "primary",
          },
          {
            text: "Mehr",
            url: "#",
            type: "text",
          },
        ],
        image: require("@/assets/img/grabmalreferenzen.webp"),
      },
      restaurierungen: {
        title: "Restaurierungen",
        text:
          "Ein Schwerpunkt unserer Arbeit ist die komplette und fachgemäße Restaurierung historischer Gebäude, Baudenkmale und Bildhauerarbeiten.",
        buttons: [
          {
            text: "Galerie",
            url: "#",
            color: "primary",
          },
          {
            text: "Mehr",
            url: "#",
            type: "text",
          },
        ],
        image: require("@/assets/img/restaurierungen.webp"),
      },
    };
  },
};
</script>

<style scoped>
@media (min-width: 600px) {
  .box {
    padding-top: 8px;
  }
}

@media (min-width: 992px) {
  .offers {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
  }
}
</style>