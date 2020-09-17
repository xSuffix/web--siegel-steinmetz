<template>
  <section>
    <div class="container" id="offer">
      <h2>Unser Angebot</h2>
      <p>Eine kleine Übersicht unserer bisherigen Leistungen finden Sie hier.</p>
      <card-offer v-bind="grabmallager" />
      <card-offer v-bind="grabmalreferenzen" />
      <card-offer v-bind="restaurierungen" />
    </div>
  </section>
</template>

<script>
import CardOffer from "@/components/CardOffer.vue";

export default {
  name: "offer",
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
  components: {
    CardOffer,
  },
};
</script>

<style scoped>
</style>