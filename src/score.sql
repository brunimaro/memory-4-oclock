/*
-- Structure de la table `score`
*/

CREATE TABLE `score` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `score` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `score` (`id`, `nom`, `score`) VALUES
(1, 'bruno', 50);