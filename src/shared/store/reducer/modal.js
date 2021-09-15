export const types = {
  SET_VISIBLE: 'SET_VISIBLE',
}

export const INITIAL_STATE = {
  visible: false,
  title: '',
  image: '',
  release_date: 0,
  vote_average: 0,
  overview: '',
}

export default function modalReducer(
  state = INITIAL_STATE,
  { type, visible, title, image, release_date, vote_average, overview }
) {
  switch (type) {
    case types.SET_VISIBLE:
      return {
        visible: visible,
        title: title,
        image: image,
        release_date: release_date,
        vote_average: vote_average,
        overview: overview,
      }

    default:
      return state
  }
}
