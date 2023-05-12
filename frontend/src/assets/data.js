const monuments = [
  {
    id: 1,
    name: "Big Ben",
    description:
      "Situé à Londres, Big Ben est le surnom donné à la grande cloche de 13,5 tonnes qui se trouve dans le clocher du Palais de Westminster. La tour qui la surmonte, haute de 96 mètres, est devenue un symbole de la ville de Londres depuis son achèvement en 1858. Big Ben est l'une des horloges les plus célèbres au monde, et son carillon distinctif sonne régulièrement pour marquer les heures et les événements importants.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160061383966760/BigBen.jpg?width=1224&height=817",
    country: "England",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ENGLAND.svg",
    tong_url: "src/assets/english.png",
  },
  {
    id: 2,
    name: "Christ Rédempteur",
    description:
      "Érigée au sommet du mont Corcovado, la statue du Christ Rédempteur est un monument emblématique de Rio de Janeiro au Brésil. La statue, qui mesure 30 mètres de haut, a été construite en béton armé et en pierre entre 1922 et 1931. Elle est considérée comme l'une des sept merveilles du monde moderne. De nombreux visiteurs viennent à Rio pour voir cette statue emblématique, qui est devenue un symbole de la ville et de la foi chrétienne.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160061706948638/ChrisRedempteur.jpg?width=1305&height=720",
    country: "Brazil",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg",
    tong_url: "src/assets/brazil.png",
  },
  {
    id: 3,
    name: "Statue de la liberté",
    description:
      "Située sur l'île de Liberty Island, au sud de Manhattan à New York, la Statue de la Liberté est un monument emblématique des États-Unis. Offerte par la France en 1886 pour célébrer le centenaire de la Déclaration d'indépendance américaine, la statue mesure 46 mètres de haut. Elle représente Libertas, la déesse romaine de la liberté, tenant une torche et une tablette inscrite de la date de la Déclaration d'indépendance.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160064332582912/StatueLiberty.jpg?width=1079&height=719",
    country: "United States",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
    tong_url: "src/assets/usa.png",
  },
  {
    id: 4,
    name: "Tour Eiffel",
    description:
      "Construite pour l'Exposition universelle de Paris de 1889, la Tour Eiffel est un symbole emblématique de la France et l'un des monuments les plus célèbres du monde. La tour, qui mesure 324 mètres de haut, était à l'époque la plus haute structure jamais construite. Elle est aujourd'hui l'une des attractions touristiques les plus populaires au monde, avec plus de 7 millions de visiteurs chaque année.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160061383966760/BigBen.jpg?width=1224&height=817",
    country: "France",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg",
    tong_url: "src/assets/french.png",
  },
  {
    id: 5,
    name: "Opéra de Sydney",
    description:
      "Situé dans le port de Sydney, en Australie, l'Opéra de Sydney est un chef-d'œuvre architectural célèbre pour son toit en forme de coquille. Conçu par l'architecte danois Jørn Utzon, le bâtiment a été inauguré en 1973. Il accueille chaque année des centaines de représentations de musique, de danse et de théâtre.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160063237857280/OperaSydney.jpg?width=1290&height=817",
    country: "Australia",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg",
    tong_url: "src/assets/french.png",
  },
  {
    id: 6,
    name: "Pyramides de Gizeh",
    description:
      "Situées à environ 20 kilomètres au sud-ouest du Caire en Égypte, les Pyramides de Gizeh sont l'un des ensembles de monuments les plus célèbres et les plus mystérieux du monde. Les trois pyramides principales ont été construites il y a plus de 4500 ans comme tombeaux pour les pharaons Khéops, Khéphren et Mykérinos. Le Sphinx, une statue monumentale avec la tête d'un pharaon et le corps d'un lion, se trouve également à proximité.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160064055738469/PyramidesGizeh.jpg?width=1305&height=734",
    country: "Egypt",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg",
    tong_url: "src/assets/egyptian.png",
  },

  {
    id: 7,
    name: "Mont Rushmore",
    description:
      "Situé dans les Black Hills du Dakota du Sud aux États-Unis, le Mont Rushmore est un monument sculpté dans la pierre qui honore quatre présidents américains : George Washington, Thomas Jefferson, Theodore Roosevelt et Abraham Lincoln. Les sculptures ont été réalisées entre 1927 et 1941 par le sculpteur Gutzon Borglum et son fils. Le monument est situé dans le parc national de Mount Rushmore et attire des millions de visiteurs chaque année.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160062604529715/MountRushmore.jpg?width=1190&height=817",
    country: "United States",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
    tong_url: "src/assets/usa.png",
  },
  {
    id: 8,
    name: "Tour de Pise",
    description:
      " La Tour de Pise est une tour inclinée de 56 mètres de haut située dans la ville de Pise en Italie. La tour a été construite au XIIe siècle et est célèbre pour son inclinaison distinctive, qui est due à des problèmes de fondation pendant sa construction. La tour a été fermée au public pendant plusieurs années dans les années 1990 pour des travaux de restauration visant à stabiliser son inclinaison.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160974408466442/TourDePise.jpg?width=1089&height=817",
    country: "Italy",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg",
    tong_url: "src/assets/italian.png",
  },
  {
    id: 9,
    name: "Taj Mahal",
    description:
      "Situé à Agra, en Inde, le Taj Mahal est un mausolée en marbre blanc construit par l'empereur moghol Shah Jahan en mémoire de son épouse bien-aimée, Mumtaz Mahal. La construction du Taj Mahal a commencé en 1632 et a été achevée en 1653. Le monument est célèbre pour sa beauté architecturale et sa richesse décorative, notamment les mosaïques en pierres précieuses et les motifs floraux gravés dans le marbre. Le Taj Mahal est considéré comme l'un des plus beaux bâtiments du monde et est un symbole de l'Inde.",
    image_url:
      "https://media.discordapp.net/attachments/1106113841487691776/1106160064680697929/tajmahal.jpg?width=1225&height=817",
    country: "India",
    flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg",
    tong_url: "src/assets/indian.png",
  },
];

export default monuments;
