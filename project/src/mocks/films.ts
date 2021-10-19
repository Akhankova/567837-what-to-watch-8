import {SmallCards, SmallFilmCard} from '../types/small-film-card';

export const smallCardFilmPromo: SmallFilmCard = {
  id: 1,
  title: 'The Grand Budapest Hotel',
  imgSrc: './img/the-grand-budapest-hotel-poster.jpg',
  previewImage: './img/bg-the-grand-budapest-hotel.jpg',
  backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#ffccff',
  videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 7,
  scoresCount: 240,
  director: 'Wes Anderson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runTime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
  comments: [ {
    id: 45434,
    user: {
      id: 1,
      name: 'Oleg Muir',
    },
    rating: 4,
    value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
    date : '2021-01-08T14:13:56.569Z',
  }],
};

export const smallCardFilm: SmallCards = [
  {
    id: 2,
    title: 'The Grand Budapest Hotel',
    imgSrc: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffccff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 2,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
    comments: [ {
      id: 45434,
      user: {
        id: 1,
        name: 'Oleg Muir',
      },
      rating: 4,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2021-01-08T14:13:56.569Z',
    },
    {
      id: 18,
      user: {
        id: 667746,
        name: 'Kate Muir',
      },
      rating: 4.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-01-08T14:13:56.569Z',
    },
    {
      id: 19,
      user: {
        id: 3345,
        name: 'Irina Solovei',
      },
      rating: 6.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-02-08T14:13:56.569Z',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'I have not had chance to see this film yet, but from the trailer and review, it seems like a perfect tonic for this terrible times.',
      date : '2018-01-06T14:13:56.569Z',
    },
    {
      id: 32,
      user: {
        id: 44563,
        name: 'Olga Petrova',
      },
      rating: 7.1,
      value: 'It sounds very similar to the Flight of the Doves, which was on the vintage film channel recently.',
      date : '2020-11-16T14:13:56.569Z',
    }],
  },
  {
    id: 3,
    title: 'Macbeth',
    imgSrc: 'img/macbeth.jpg',
    previewImage: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Fantasy',
    released: 2014,
    isFavorite: false,
    comments: [ {
      id: 1,
      user: {
        id: 1,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-04-08T14:13:56.569Z',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'I have not had chance to see this film yet, but from the trailer and review, it seems like a perfect tonic for this terrible times.',
      date : '2018-01-06T14:13:56.569Z',
    },
    {
      id: 32,
      user: {
        id: 44563,
        name: 'Olga Petrova',
      },
      rating: 7.1,
      value: 'It sounds very similar to the Flight of the Doves, which was on the vintage film channel recently.',
      date : '2020-11-16T14:13:56.569Z',
    }],
  },
  {
    id: 4,
    title: 'Aviator',
    imgSrc: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 143,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 120,
    genre: 'Comedy',
    released: 2000,
    isFavorite: true,
    comments: [ {
      id: 3,
      user: {
        id: 1,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-01-01T14:13:56.569Z',
    },
    {
      id: 4,
      user: {
        id: 12,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-04-04T14:13:56.569Z',
    },
    {
      id: 5,
      user: {
        id: 22,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-07-09T14:13:56.569Z',
    }],
  },
  {
    id: 5,
    title: 'We need to talk about Kevin',
    imgSrc: 'img/we-need-to-talk-about-kevin.jpg',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 300,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 110,
    genre: 'Fantasy',
    released: 1999,
    isFavorite: true,
    comments: [ {
      id: 7,
      user: {
        id: 143,
        name: 'Kate Muir',
      },
      rating: 9.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-12-11T14:13:56.569Z',
    },
    {
      id: 8,
      user: {
        id: 434,
        name: 'Irina Solovei',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-11-22T14:13:56.569Z',
    }],
  },
  {
    id: 6,
    title: 'What We Do in the Shadows',
    imgSrc: 'img/what-we-do-in-the-shadows.jpg',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 7,
    scoresCount: 210,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Horror',
    released: 2005,
    isFavorite: true,
    comments: [ {
      id: 10,
      user: {
        id: 4554,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-07-09T14:13:56.569Z',
    },
    {
      id: 11,
      user: {
        id: 111,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2021-01-01T14:13:56.569Z',
    }],
  },
  {
    id: 7,
    title: 'Revenant',
    imgSrc: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 220,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Drama',
    released: 1989,
    isFavorite: true,
    comments: [ {
      id: 12,
      user: {
        id: 11347,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-09-08T14:13:56.569Z',
    },
    {
      id: 13,
      user: {
        id: 3784,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-05-11T14:13:56.569Z',
    }],
  },
  {
    id: 8,
    title: 'Johnny English',
    imgSrc: 'img/johnny-english.jpg',
    previewImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/johnny-english.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 118,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Fantasy',
    released: 2001,
    isFavorite: false,
    comments: [ {
      id: 14,
      user: {
        id: 9574,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-09-08T14:13:56.569Z',
    },
    {
      id: 15,
      user: {
        id: 1873,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-03-08T14:13:56.569Z',
    },
    {
      id: 20,
      user: {
        id: 118899,
        name: 'Viktoria',
      },
      rating: 10,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-05-08T14:13:56.569Z',
    }],
  },
  {
    id: 9,
    title: 'Shutter Island',
    imgSrc: 'img/shutter-island.jpg',
    previewImage: 'img/shutter-island.jpg',
    backgroundImage: 'img/shutter-island.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 150,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Animation',
    released: 2018,
    isFavorite: true,
    comments: [ {
      id: 16,
      user: {
        id: 968,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-02-08T14:13:56.569Z',
    },
    {
      id: 17,
      user: {
        id: 768,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-03-08T14:13:56.569Z',
    }],
  },
  {
    id: 10,
    title: 'The Grand Budapest Hotel',
    imgSrc: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffccff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Horror',
    released: 2014,
    isFavorite: false,
    comments: [ {
      id: 45434,
      user: {
        id: 1,
        name: 'Oleg Muir',
      },
      rating: 4,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2021-01-08T14:13:56.569Z',
    },
    {
      id: 18,
      user: {
        id: 667746,
        name: 'Kate Muir',
      },
      rating: 4.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-01-08T14:13:56.569Z',
    },
    {
      id: 19,
      user: {
        id: 3345,
        name: 'Irina Solovei',
      },
      rating: 6.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-02-08T14:13:56.569Z',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'I have not had chance to see this film yet, but from the trailer and review, it seems like a perfect tonic for this terrible times.',
      date : '2018-01-06T14:13:56.569Z',
    },
    {
      id: 32,
      user: {
        id: 44563,
        name: 'Olga Petrova',
      },
      rating: 7.1,
      value: 'It sounds very similar to the Flight of the Doves, which was on the vintage film channel recently.',
      date : '2020-11-16T14:13:56.569Z',
    }],
  },
  {
    id: 11,
    title: 'Macbeth',
    imgSrc: 'img/macbeth.jpg',
    previewImage: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Drama',
    released: 2014,
    isFavorite: false,
    comments: [ {
      id: 1,
      user: {
        id: 1,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-04-08T14:13:56.569Z',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'I have not had chance to see this film yet, but from the trailer and review, it seems like a perfect tonic for this terrible times.',
      date : '2018-01-06T14:13:56.569Z',
    },
    {
      id: 32,
      user: {
        id: 44563,
        name: 'Olga Petrova',
      },
      rating: 7.1,
      value: 'It sounds very similar to the Flight of the Doves, which was on the vintage film channel recently.',
      date : '2020-11-16T14:13:56.569Z',
    }],
  },
  {
    id: 12,
    title: 'The Grand Budapest Hotel',
    imgSrc: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffccff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 2,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
    comments: [ {
      id: 45434,
      user: {
        id: 1,
        name: 'Oleg Muir',
      },
      rating: 4,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2021-01-08T14:13:56.569Z',
    },
    {
      id: 18,
      user: {
        id: 667746,
        name: 'Kate Muir',
      },
      rating: 4.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-01-08T14:13:56.569Z',
    },
    {
      id: 19,
      user: {
        id: 3345,
        name: 'Irina Solovei',
      },
      rating: 6.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-02-08T14:13:56.569Z',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'I have not had chance to see this film yet, but from the trailer and review, it seems like a perfect tonic for this terrible times.',
      date : '2018-01-06T14:13:56.569Z',
    },
    {
      id: 32,
      user: {
        id: 44563,
        name: 'Olga Petrova',
      },
      rating: 7.1,
      value: 'It sounds very similar to the Flight of the Doves, which was on the vintage film channel recently.',
      date : '2020-11-16T14:13:56.569Z',
    }],
  },
  {
    id: 13,
    title: 'Macbeth',
    imgSrc: 'img/macbeth.jpg',
    previewImage: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Fantasy',
    released: 2014,
    isFavorite: false,
    comments: [ {
      id: 1,
      user: {
        id: 1,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-04-08T14:13:56.569Z',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'I have not had chance to see this film yet, but from the trailer and review, it seems like a perfect tonic for this terrible times.',
      date : '2018-01-06T14:13:56.569Z',
    },
    {
      id: 32,
      user: {
        id: 44563,
        name: 'Olga Petrova',
      },
      rating: 7.1,
      value: 'It sounds very similar to the Flight of the Doves, which was on the vintage film channel recently.',
      date : '2020-11-16T14:13:56.569Z',
    }],
  },
  {
    id: 14,
    title: 'Aviator',
    imgSrc: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 143,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 120,
    genre: 'Comedy',
    released: 2000,
    isFavorite: true,
    comments: [ {
      id: 3,
      user: {
        id: 1,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-01-01T14:13:56.569Z',
    },
    {
      id: 4,
      user: {
        id: 12,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-04-04T14:13:56.569Z',
    },
    {
      id: 5,
      user: {
        id: 22,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-07-09T14:13:56.569Z',
    }],
  },
  {
    id: 15,
    title: 'We need to talk about Kevin',
    imgSrc: 'img/we-need-to-talk-about-kevin.jpg',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 300,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 110,
    genre: 'Fantasy',
    released: 1999,
    isFavorite: true,
    comments: [ {
      id: 7,
      user: {
        id: 143,
        name: 'Kate Muir',
      },
      rating: 9.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-12-11T14:13:56.569Z',
    },
    {
      id: 8,
      user: {
        id: 434,
        name: 'Irina Solovei',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-11-22T14:13:56.569Z',
    }],
  },
  {
    id: 16,
    title: 'What We Do in the Shadows',
    imgSrc: 'img/what-we-do-in-the-shadows.jpg',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'img/what-we-do-in-the-shadows.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 7,
    scoresCount: 210,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Horror',
    released: 2005,
    isFavorite: true,
    comments: [ {
      id: 10,
      user: {
        id: 4554,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-07-09T14:13:56.569Z',
    },
    {
      id: 11,
      user: {
        id: 111,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2021-01-01T14:13:56.569Z',
    }],
  },
  {
    id: 17,
    title: 'Revenant',
    imgSrc: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 220,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Drama',
    released: 1989,
    isFavorite: true,
    comments: [ {
      id: 12,
      user: {
        id: 11347,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-09-08T14:13:56.569Z',
    },
    {
      id: 13,
      user: {
        id: 3784,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-05-11T14:13:56.569Z',
    }],
  },
  {
    id: 18,
    title: 'Johnny English',
    imgSrc: 'img/johnny-english.jpg',
    previewImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/johnny-english.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 118,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Fantasy',
    released: 2001,
    isFavorite: false,
    comments: [ {
      id: 14,
      user: {
        id: 9574,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-09-08T14:13:56.569Z',
    },
    {
      id: 15,
      user: {
        id: 1873,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-03-08T14:13:56.569Z',
    },
    {
      id: 20,
      user: {
        id: 118899,
        name: 'Viktoria',
      },
      rating: 10,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-05-08T14:13:56.569Z',
    }],
  },
  {
    id: 19,
    title: 'Shutter Island',
    imgSrc: 'img/shutter-island.jpg',
    previewImage: 'img/shutter-island.jpg',
    backgroundImage: 'img/shutter-island.jpg',
    backgroundColor: '#ffe6cc',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    rating: 8.9,
    scoresCount: 150,
    director: 'Wes Anderson',
    starring: ['Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Animation',
    released: 2018,
    isFavorite: true,
    comments: [ {
      id: 16,
      user: {
        id: 968,
        name: 'Kate Muir',
      },
      rating: 8.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-02-08T14:13:56.569Z',
    },
    {
      id: 17,
      user: {
        id: 768,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-03-08T14:13:56.569Z',
    }],
  },
  {
    id: 20,
    title: 'The Grand Budapest Hotel',
    imgSrc: './img/the-grand-budapest-hotel-poster.jpg',
    previewImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: './img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffccff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Horror',
    released: 2014,
    isFavorite: false,
    comments: [ {
      id: 45434,
      user: {
        id: 1,
        name: 'Oleg Muir',
      },
      rating: 4,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2021-01-08T14:13:56.569Z',
    },
    {
      id: 18,
      user: {
        id: 667746,
        name: 'Kate Muir',
      },
      rating: 4.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-01-08T14:13:56.569Z',
    },
    {
      id: 19,
      user: {
        id: 3345,
        name: 'Irina Solovei',
      },
      rating: 6.9,
      value: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.',
      date : '2019-02-08T14:13:56.569Z',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Irina Solovei',
      },
      rating: 5.9,
      value: 'I have not had chance to see this film yet, but from the trailer and review, it seems like a perfect tonic for this terrible times.',
      date : '2018-01-06T14:13:56.569Z',
    },
    {
      id: 32,
      user: {
        id: 44563,
        name: 'Olga Petrova',
      },
      rating: 7.1,
      value: 'It sounds very similar to the Flight of the Doves, which was on the vintage film channel recently.',
      date : '2020-11-16T14:13:56.569Z',
    }],
  },
];


