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
          <card-offer v-bind="grabmallager" />
          <card-offer v-bind="grabmalreferenzen" />
          <card-offer v-bind="restaurierungen" />
        </div>
      </div>
    </div>
    <Wave color="var(--v-gray-base)" />
  </section>
</template>

<script>
import CardOffer from "@/components/CardOffer.vue";
import Wave from "@/components/Wave.vue";

export default {
  name: "Offer",
  components: {
    CardOffer,
    Wave,
  },
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
            color: "primary",
          },
          {
            text: "Mehr",
            url: "#",
            type: "text",
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
            color: "primary",
          },
          {
            text: "Mehr",
            url: "#",
            type: "text",
          },
        ],
        image: require("@/assets/restaurierungen.webp"),
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
</style>