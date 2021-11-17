var configs = {
    style: 'mapbox://styles/marconasuto/ckw3jnish21cr14nqkzkob9wu',
    accessToken: config.token,
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: '\n\nA tomato to see the world',
    subtitle: '\nThis work is based on Kosmonauts, \na docufilm about national identity by Marco and Andrea Nasuto. \n----------------------------\nA farmer escapes from Nigeria 🇳🇬 \na drone saves him 🚀 \an astronaut dreams about space 🛰 \ntwo brothers come back home \nfour stories, same place: these fields',
    byline: 'Marco Nasuto\n\n\n\n',
    footer: 'Source: Kosmonauts - by Andrea and Marco Nasuto ',
    chapters: [
        {
            id: 'borgo',
            alignment: 'left',
            hidden: false,
            title: 'TOP GUN FOR MIGRANTS \nBorgo Mezzanone, Italy',
            image: 'http://www.felicitapubblica.it/wp-content/uploads/2016/02/Caporalato-679x350.jpg',
            description: 'A tiny rural village and former US airforce base, \n it hosts a centre for asylum seekers refugees but \n just outside the barbed wire fence, on the abandoned runaway \n there are rusty containers where people with dozens different nationality live. This is where Dina and Father Arcangelo ❤️ work as voluteers. Slums and illegal camps like "La Pista" are sperad all around il Foggiano providing a constantly growing exploitable workforce.',
            location: {
                center: [15.720, 41.4085],
                zoom: 15.5,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'amendola',
            alignment: 'left',
            hidden: false,
            title: 'ASTRONAUTS\' DREAMS \nAmendola Air base, Italy ',
            image: 'https://www.antimafiaduemila.com/images/stories/loghi_tm/drone-web2.jpg',
            description: 'Do you want to talk to the next astronaut? We got you covered. Nearby the tomato fields, there\'s "Amendola", the largest military airbase in Italy. Several Italian cosmonauts were trained here. Starting in 2013, Italian drones flying from this base have been used to spot refugee boats in the Mediterranean Sea between Libya and Europe. Ironically, a few months after being saved, their journey sometime ends in those fields next to their saviors. Future astronauts and African farmers share the same hot summers here.',
            location: {
                center: [15.6997,41.5493],
                zoom: 10.5,
                speed: 0.7,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'gargano',
            alignment: 'left',
            hidden: false,
            title: 'MARCO\'S HOMELAND, \nGargano, Italy',
            image: 'https://ecobnb.it/blog/app/uploads/sites/2/2015/03/baia-delle-zagare-photolupi-res-1170x490.jpg',
            description: 'My brother and I grew up only 30 minutes away from these fields. However, \'migrants\' and \'refugees\' were concepts we absorbed watching TV during lunch. Indeed, what happens in this countryside stays there. Nobody talks about it, nobody asks.',
            location: {
                center: [15.813, 41.594],
                zoom: 8.9,
                speed: 0.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'salerno',
            alignment: 'left',
            hidden: false,
            title: 'SAME MR. TOMATO, JUST A BRAND-NEW NAME, \nSalerno, Italy',
            image: 'https://images2.corriereobjects.it/methode_image/2018/09/11/Economia/Foto%20Economia%20-%20Trattate/pomodori-kRRD-U30201208130048vFD-1224x916@Corriere-Web-Sezioni-593x443.jpg?v=20180911210050',
            description: 'Once tomatoes are collected, they travel westwards to get processed in Salerno area. Any trace of their dirty origin gets lost there. There\'s no tracking system in place capable to point out where and how they were harvested. Once packaged and labeled, this symbol of \'Made in Italy\' will be part of the pizzas 🍕 eaten in Berlin 🇩🇪, London 🇬🇧 or Lagos 🇳🇬.',
            location: {
                center: [15.400,41.722],
                zoom: 7,
                speed: 0.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'new york',
            alignment: 'left',
            hidden: false,
            title: 'A GLOBAL TOMATO, \nNew York, USA',
            description: 'Ready for your Italian dinner? Look at these numbers: $0.008 vs $4.5, this could be the difference between what you pay and what migrants are paid for a tomato can, once you are in New York.  The Italian tomato revenues 💵 and exports 🌍 have been higher than ever. Italian pasta and wine export? Forget about them. In the last 10 years, tomato won the race with +88% in growth. Italian food at its best.',
            location: {
                center: [-74.012509, 40.710614],
                zoom: 15,
                speed: 0.8,
                pitch: 80,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'lampedusa',
            alignment: 'left',
            hidden: false,
            title: 'STILL A REFUGEE BUT NOT SYRIAN, \nLampedusa, Italy',
            description: 'Between January and May 2017, more than 70,000 people arrived in Italy by sea. Their main destination: the island of Lampedusa. Syrians? Not really, Nigerians are the most represented nationality. 8 out of the 10 most common nationalities among all refugees are African. Why is that?',
            location: {
                center: [12.576038, 35.510],
                zoom: 12.2,
                speed: 0.8,
                pitch: 0,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'nigeria',
            alignment: 'left',
            hidden: false,
            title: 'WHITE TOMATO, \nNigeria',
            image:'https://i.ibb.co/jrh2pLv/Screenshot-2021-11-17-at-18-55-45.png',
            description: 'Tomato is a big piece of Nigerian culture. There\'s an expression used to define a beautiful woman: \'tomato lady\'. Jollof rice is probably the most important Nigerian dish. Main ingredients: rice and tomatoes. Nigeria is the largest producer of tomatoes in Africa, after Egypt. A developing nation selling its cheap product to some rich western countries? Quite the opposite here. Nigeria is also the largest importer. Tomatoes perish quickly if they are not processed. The low-price imports and other factors keep the local industry underdeveloped. As a result, 75% of Nigerian production is wasted and farmers are left in debts. This problem is common to other African economies. Using the words of Prof. Zuma from Harvard University: "[EU] suppress technological innovation and industrial development among African countries".',
            location: {
                center: [9.859, 8.900],
                zoom: 5.3,
                speed: 0.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'boko haram',
            alignment: 'left',
            hidden: false,
            title: 'ISIS FOR TOMATOES, \nNorth Nigeria',
            image:'https://www.africarivista.it/wp-content/uploads/2020/08/la-fg-boko-haram-denies-truce-20141101.jpg',
            description: 'At the beginning of 2009, Boko Haram started its Islamist terrorist activities in North Nigeria. This is also where the majority of tomato production takes place. While Boko Haram has been usually confined as a religious extremist group, research has shown that "most of [Boko Haram fighters] could not give cogent reasons for doing what they are doing", they have been \'farmers and herdsmen [initially from Niger and Chad] facing starvation who they had to cross the border in search of a better life in Nigeria\'. What it seems exclusively a religious problem, in reality it is starving farmers looking for a way out.',
            location: {
                center: [10.186,11.49],
                zoom: 6,
                speed: 0.8,
                pitch: 0,
                bearing: -45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'west-africa',
            alignment: 'left',
            hidden: false,
            title: 'MASS MIGRATION, \nWestern Africa',
            image:'https://i.pinimg.com/originals/a5/40/4a/a5404a137d5430380d6f35d8dd0601e3.jpg',
            description: 'In 2017, the United Nations declared that Nigeria and other western African countries are facing the worst worldwide famine since 1945. This has been leading to massive immigration. Currently, 20mn people are facing starvation.',
            location: {
                center: [2.4604, 13.5317],
                zoom: 5,
                speed: 0.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'lybia',
            alignment: 'left',
            hidden: false,
            title: 'TOMATOES HARVESTED BY DAD, \nLybian coast',
            image:'https://i1.wp.com/muslimgirl.com/wp-content/uploads/2015/04/italy-migrants-refugees-asylum-seekers-1.jpg?fit=838%2C559&ssl=1',
            description: 'All the major migrants\' African routes lead to Lybia. In 2016, more than 180,000 people arrived by sea in Italy. Unfortunately, 4,581 of them didn\'t take any step on European soil. For those who made it through, their journey is not over. Many of them will end up working close to the pilots who saved them: in tomato fields. They will make one of the symbols of \'Made in Italy\'. The result of their work will travel the world. It will reach a worldwide audience including their wife and kids left in their homeland. They will probably never know it. The exploiting cycle is closed. It can start again.',
            location: {
                center: [13.938,33.829],
                zoom: 5.4,
                speed: 0.8,
                pitch: 20,
                bearing: 90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'tomato-to-see-the-world',
                //     opacity: 0
                // }
            ]
        },
    ]
};
