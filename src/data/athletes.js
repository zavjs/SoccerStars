const athletes = [
	{
		'id': 'neymar-jr',
		'known_as': 'Neymar',
		'name': 'Neymar Jr.',
		'country': 'bra',
		'birth': '1992',
		'height': 1.75,
		'active': true,
		'current_team': 'Barcelona',
		'position': 'Forward',
		'upvotes': 429,
		'image': 'neymar-jr.png',
		'cover': 'neymar-jr-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Neymar',
		'goals': 129,
		'honours': [
			{
				'team': 'Santos',
				'honours': [
					{ 'year': '2010', 'event': 'Campeonato Paulista' },
					{ 'year': '2011', 'event': 'Campeonato Paulista' },
					{ 'year': '2012', 'event': 'Campeonato Paulista' },
					{ 'year': '2011', 'event': 'Copa Libertadores' },
					{ 'year': '2012', 'event': 'Recopa Sudamericana 2012' }
				]
			},
			{
				'team': 'Barcelona',
				'honours': [
					{ 'year': '2014', 'event': 'La Liga' },
					{ 'year': '2015', 'event': 'La Liga' },
					{ 'year': '2013', 'event': 'Supercopa de España' },
					{ 'year': '2016', 'event': 'Supercopa de España' }
				]
			}

		],
		voted: false,
	},
	{
		'id': 'lionel-messi',
		'known_as': 'Messi',
		'name': 'Lionel Messi',
		'country': 'arg',
		'birth': '1987',
		'height': 1.70,
		'active': true,
		'current_team': 'Barcelona',
		'position': 'Forward',
		'upvotes': 698,
		'image': 'lionel-messi.jpg',
		'cover': 'lionel-messi-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Lionel_Messi',
		'goals': 723,
		'honours': [
			{
				'team': 'Barcelona',
				'honours': [
					{ 'year': '2005', 'event': 'Supercopa de España' },
					{ 'year': '2006', 'event': 'Supercopa de España' },
					{ 'year': '2009', 'event': 'Supercopa de España' },
					{ 'year': '2009', 'event': 'FIFA WorldCup' },
					{ 'year': '2010', 'event': 'Supercopa de España' },
					{ 'year': '2013', 'event': 'Supercopa de España' },
					{ 'year': '2014', 'event': 'La Liga' },
					{ 'year': '2015', 'event': 'La Liga' },
					{ 'year': '2016', 'event': 'Supercopa de España' }
				]
			}

		],
		voted: false
	},
	{
		'id': 'zlatan-ibrahimovic',
		'known_as': 'Ibrahimović',
		'name': 'Zlatan Ibrahimović',
		'country': 'swt',
		'birth': '1981',
		'height': 1.95,
		'active': true,
		'current_team': 'Manchester United Football Club',
		'position': 'Forward',
		'upvotes': 476,
		'image': 'zlatan-ibrahimovic.jpg',
		'cover': 'zlatan-ibrahimovic-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Zlatan_Ibrahimović',
		'goals': 528,
		'honours': [
			{
				'team': 'Barcelona',
				'honours': [
					{ 'year': '2001-02', 'event': 'Eredivise' },
					{ 'year': '2001-02', 'event': 'KNVB Cup' },
					{ 'year': '2002', 'event': 'Johan Cruyff Shielf' },
					{ 'year': '2004', 'event': 'Serie A' },
					{ 'year': '2006-07', 'event': 'Serie A' },
					{ 'year': '2007-08', 'event': 'Serie A' },
					{ 'year': '2008-09', 'event': 'Serie A' },
					{ 'year': '2008', 'event': 'Supercopa Italiana' },
					{ 'year': '2009-10', 'event': 'La Liga'},
					{ 'year': '2009', 'event': 'Supercopa de España' },
					{ 'year': '2010', 'event': 'Supercopa de España' },
					{ 'year': '2010-11', 'event': 'Serie A' },
					{ 'year': '2011', 'event': 'Supercoppa Italiana' }
				]
			}

		],
		voted: false
	},
	{
		'id': 'carlito-tevez',
		'known_as': 'Tevez',
		'name': 'Carlos Alberto Tevez',
		'country': 'arg',
		'birth': '1984',
		'height': 1.73,
		'active': true,
		'current_team': 'Shanghai Shenhua',
		'position': 'Forward',
		'upvotes': 321,
		'image': 'carlos-tevez.jpg',
		'cover': 'carlos-tevez-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Carlos_Tevez',
		'goals': 243,
		'honours': [
			{
				'team': 'Boca Júniors',
				'honours': [
					{ 'year': '2003', 'event': 'Primeira División' },
					{ 'year': '2003', 'event': 'Copa Libertadores' },
					{ 'year': '2004', 'event': 'Copa Sudamericana' },
					{ 'year': '2003', 'event': 'Intercontinental Cup' },
					{ 'year': '2014-15', 'event': 'Copa Argentina' }
				]
			},
			{
				'team': 'Corinthians',
				'honours': [
					{ 'year': '2005', 'event': 'Campeonato Brasileiro Série A' }
				]
			},
			{
				'team': 'Manchester United',
				'honours': [
					{ 'year': ['2007-08', '2008-09'], 'event': 'Premier League' },
					{ 'year': '2008-09', 'event': 'Football League Cup' },
					{ 'year': '2007-08', 'event': 'UEFA Champions League' },
					{ 'year': '2008', 'event': 'FIFA World Cup' }
				]
			}

		],
		voted: false
	},
	{
		'id': 'pierre-aubameyang',
		'known_as': 'Aubameyang',
		'name': 'Pierre-Emerick Aubameyang',
		'country': 'fra',
		'birth': '1989',
		'height': 1.87,
		'active': true,
		'current_team': 'Borussia Dortmund',
		'position': 'Forward',
		'description': 'Pierre-Emerick Emiliano François Aubameyang born 18 June 1989 ' + 
			'is a French-born Gabonese professional footballer who plays for German club Borussia Dortmund and the Gabon national football team.',
		'upvotes': 387,
		'image': 'pierre-aubameyang.jpg',
		'cover': 'pierre-aubameyang-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Pierre-Emerick_Aubameyang',
		'goals': 161,
		'honours': [
			{
				'team': 'AS Saint-Étienne',
				'honours': [
					{ 'year': '2012-13', 'event': 'Coupe de La Ligue' }
				]
			},
			{
				'team': 'Borussia Dortmund',
				'honours': [
					{ 'year': ['2013', '2014'], 'event': 'DFL-SuperCup' },
				]
			}

		],
		voted: false
	},
	,
	{
		'id': 'thierry-henry',
		'known_as': 'Thierry Henry',
		'name': 'Thierry Daniel Henry',
		'country': 'fra',
		'birth': '1977',
		'height': 1.88,
		'active': false,
		'current_team': 'Inactive',
		'position': 'Forward',
		'upvotes': 174,
		'image': 'thierry-henry.png',
		'cover': 'thierry-henry-cover.jpg',
		'link': 'https://en.wikipedia.org/wiki/Thierry_Henry',
		'goals': 161,
		'honours': [
			{
				'team': 'Arsenal',
				'honours': [
					{ 
						'year': ['2001-02', '2003-04'], 
						'event': 'Premier League' 
					},
					{ 
						'year': ['2001-02', '2002-03'], 
						'event': 'FA Cup' 
					}
				]
			},
			{
				'team': 'Barcelona',
				'honours': [
					{ 
						'year': ['2008-2009', '2009-10'], 
						'event': 'La Liga' 
					},
					{ 'year': '2008-09', 'event': 'Copa del Rey' },
					{ 'year': '2009', 'event': 'Supercopa de España' },
					{ 'year': '2008-09', 'event': 'UEFA Champions League' },
					{ 'year': '2009', 'event': 'FIFA World Cup' }
				]
			}

		],
		voted: false
	}
];

export default athletes;