export const CHANGE_TYPES = {
  NEXT: 'next',
  PLAY: 'play',
  SHUFFLE: 'shuffle',
};

export const GENRES = [
  'chill',
  'deep',
  'rap',
  'house',
  'hip-hop',
  'progressive',
  'tech',
  'trance',
  'tropical',
];

export const GENRES_MAP = GENRES.reduce((obj, genre) =>
  Object.assign({}, obj, {
    [genre]: 1,
  }), {});

export const IMAGE_SIZES = {
  LARGE: 't300x300',
  XLARGE: 't500x500',
};
