import { SITE_TITLE, SITE_DESCRIPTION } from '@consts';

export const info = {
	owner: 'Stéphane Férey',
	shortName: 'Stéphane F.',
	intro: 'Barbu et codeur, découvrez les projets d’un papa développeur web.',
	shortDescription: [
		"Développeur backend avec 14 ans d’expérience, spécialisé en  <a class='font-bold text-[#82e83f] hover:underline' href='https://symfony.com/'>Symfony</a>",
		'Passionné par les nouvelles technologies et le machine learning. Grimpeur, joueur et motard dans mes temps libres. Toujours prêt à relever de nouveaux défis.',
	],
	about: [
		'J’aime travailler le code et le peaufiner pour qu’il soit le plus clair et propre possible. Actuellement, je construis des projets avec Symfony, Astro, Go, Tailwind CSS et Node.js.',
		'Issu d’une formation en développement web, j’ai rapidement développé une passion pour le code propre. Cette passion m’a conduit à devenir formateur pour un temps, où j’ai eu l’opportunité de partager mes connaissances et d’enseigner les bonnes pratiques de développement. Transmettre ces compétences et voir mes étudiants progresser a été une expérience extrêmement enrichissante.',
	],
	contact: {
		email: 'sferey.pro@gmail.com',
		address: 'Lyon, France',
	},
	socials: {
		github: {
			name: 'Siniliote',
			href: 'https://github.com/sferey-pro',
		},
		linkedin: {
			name: 'sferey',
			href: 'https://www.linkedin.com/in/sferey/',
		},
	},
};

export const site = {
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	pages: [
		{
			title: 'Accueil',
			href: '/',
			visible: true,
		},
		{
			title: 'Blog',
			href: '/blog',
			visible: false,
		},
		{
			title: 'Parcours',
			href: '/work',
			visible: true,
		},
	],
};
