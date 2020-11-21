import sw from "../assets/projects/sw.png"
import ss from "../assets/projects/ss.png"
import bt from "../assets/projects/bt1.png"
import ft from '../assets/projects/ft1.png'
import spotify from '../assets/projects/spotify.png'

let project_list = [
	{
		image:
			sw,
		title: 'Stock Watch',
		des:
			"An application that lets user learn and compare stock prices to get a better understanding of how the stock market operates.",
		tags: [ 'HTML', 'CSS', 'Bootstrap', 'Bulma','ExpressJS', 'JavaScript', 'API', 'MomentJS' ],
		links: {
			launch: 'https://github.com/misterjaykay/Stock-Watch',
			github: 'https://github.com/misterjaykay/Stock-Watch'
		}
	},
	{
		image:
			ss,
		title: 'Space Saverr',
		des:
			"A Full Stack Web Application that uses Ebay and Craigslist API to compare prices and provide the user with the best deals.",
		tags: [ 'ReactJS', 'MongoDB', 'Heroku','nodejs','ExpressJS', 'API'],
		links: {
			launch: 'https://space-saverr.herokuapp.com',
			github: 'https://github.com/ElhamFabe/Space-Saverr'
		}
	},
	{  /* -------------------------------- */
		image:
			bt,
		title: 'Budget Tracker',
		des:
			"A very simple Budget Tracker for your daily needs. Works Offline and Online!",
		tags: [ 'MongoDB', 'HTML', 'JavaScript', 'CSS', 'Heroku' ],
		links: {
			launch: 'agile-springs-64212.herokuapp.com/',
			github: 'https://github.com/maurya512/Expense-Tracker'
		}
	},
	{/* -------------------------------- */
		image:
			ft,
		title: 'Fitness Tracker',
		des:
			"Tracking workouts made a breeze with this easy to use App.",
		tags: [ 'React', 'MongoDB', 'JavaScript', 'NodeJS', 'ExpressJS' ],
		links: {
			launch: 'fitness-trackerr.herokuapp.com/?id=5f5da1ec7054cb0017bec71e',
			github: 'https://github.com/maurya512/Fitness-Tracker'
		}
	},
	{/* -------------------------------- need to take a screen shot of the page and update that here */
		image:
			'https://drive.google.com/uc?id=1CBW3KdvYrrCW7chC1o6EWlRm7IvnHz1h',
		title: 'Covid-19 Tracker',
		des:
			"A Full Stack Application that lets you track the number of COVID-19 cases, recoveries and deaths both Globally and by Countries. This App makes use of the MERN stack as well as a COVID-19 API that returns real time data to the app.",
		tags: [ 'React', 'HTML', 'CSS', 'JavaScript', 'API', 'MongoDB' ],
		links: {
			launch: 'https://github.com/maurya512/COVID19-Tracker',
			github: 'https://github.com/maurya512/COVID19-Tracker'
		}
	},
	{/* -------------------------------- won't have a screen shot of the page yet since the app is still a work in progress */
		image:
			spotify,
		title: 'Spotify Clone (Work in progress)',
		des:
			"A Full Stack (MERN) Application that is a clone of the famous music streaming app Spotify. This app strives to deliver the same functionalities as the original app!",
		tags: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Spotify API', 'Firebase' ],
		links: {
			launch: 'https://github.com/maurya512/spotify-clone-app',
			github: 'https://github.com/maurya512/spotify-clone-app'
		}
	}
];

export default project_list;
