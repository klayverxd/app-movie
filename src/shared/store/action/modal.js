// ACTIONS
export function setModalVisible({
  visible,
  title,
  image,
  release_date,
  vote_average,
  overview,
}) {
  return {
    type: 'SET_VISIBLE',
    visible: visible,
    title: title,
    image: image,
    release_date: release_date,
    vote_average: vote_average,
    overview: overview,
  }
}
