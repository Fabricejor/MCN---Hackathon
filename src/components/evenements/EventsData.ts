export type EventData = {
  id: string
  title: string
  date: string
  time: string
  description: string
  fullDescription: string
  image: string
  location: string
  price: string
  duration: string
  capacity: string
  category: string
  highlights: string[]
}

export const upcomingEvents: EventData[] = [
  {
    id: "exposition-art-contemporain-africain",
    title: "Exposition temporaire : Art contemporain africain",
    date: "15 Décembre 2024",
    time: "18h00",
    description: "Découvrez les œuvres d'artistes contemporains africains émergents.",
    fullDescription: "Plongez dans l'univers fascinant de l'art contemporain africain à travers une exposition exceptionnelle mettant en lumière le talent d'artistes émergents du continent. Cette exposition présente une collection diversifiée d'œuvres allant de la peinture à la sculpture, en passant par les installations multimédias. Chaque œuvre raconte une histoire unique, reflétant les réalités sociales, culturelles et politiques de l'Afrique moderne. Rencontrez les artistes lors de visites guidées spéciales et découvrez les inspirations derrière leurs créations.",
    image: "/images/exposition peinture.png",
    location: "Galerie principale - 2ème étage",
    price: "Gratuit avec le billet d'entrée",
    duration: "3 mois",
    capacity: "50 personnes par visite guidée",
    category: "Exposition",
    highlights: [
      "Plus de 40 œuvres d'artistes de 15 pays africains",
      "Visites guidées avec les artistes les samedis",
      "Ateliers de création artistique pour enfants",
      "Catalogue d'exposition disponible à la boutique"
    ]
  },
  {
    id: "concert-musique-traditionnelle",
    title: "Concert de musique traditionnelle",
    date: "20 Décembre 2024",
    time: "20h00",
    description: "Une soirée musicale exceptionnelle avec des artistes renommés.",
    fullDescription: "Vibrez au rythme des sonorités traditionnelles africaines lors d'une soirée musicale inoubliable. Ce concert mettra en vedette des musiciens renommés qui perpétuent les traditions musicales ancestrales tout en y apportant une touche contemporaine. Du kora malien au balafon sénégalais, en passant par les percussions sabar, laissez-vous emporter par la richesse et la diversité des instruments traditionnels. Une occasion unique de célébrer le patrimoine musical africain dans toute sa splendeur.",
    image: "/images/exposition music.png",
    location: "Auditorium principal",
    price: "5000 FCFA / 3000 FCFA (tarif réduit)",
    duration: "2h30",
    capacity: "200 places",
    category: "Concert",
    highlights: [
      "Ensemble de 12 musiciens traditionnels",
      "Instruments authentiques de 8 pays africains",
      "Initiation aux danses traditionnelles",
      "Dégustation de spécialités sénégalaises à l'entracte"
    ]
  },
  {
    id: "atelier-ceramique",
    title: "Atelier céramique",
    date: "22 Décembre 2024",
    time: "18h00",
    description: "Apprenez les techniques ancestrales de poterie.",
    fullDescription: "Participez à un atelier pratique de céramique et découvrez les techniques ancestrales de poterie transmises de génération en génération. Sous la guidance d'artisans expérimentés, vous apprendrez à façonner l'argile selon les méthodes traditionnelles utilisées depuis des siècles dans diverses régions d'Afrique. Créez votre propre pièce unique que vous pourrez emporter chez vous. Cet atelier est ouvert à tous les niveaux, débutants comme confirmés, et promet une expérience enrichissante et relaxante.",
    image: "/images/exposition sculture.png",
    location: "Salle d'ateliers créatifs - Rez-de-chaussée",
    price: "8000 FCFA (matériel inclus)",
    duration: "3 heures",
    capacity: "15 participants",
    category: "Atelier",
    highlights: [
      "Apprentissage des techniques de modelage traditionnelles",
      "Tout le matériel fourni (argile, outils, tablier)",
      "Emportez votre création chez vous",
      "Certificat de participation remis en fin d'atelier"
    ]
  },
]

