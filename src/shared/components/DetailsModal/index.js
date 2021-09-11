import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Alert, Modal } from 'react-native'

import { setModalVisible } from '../../store/action/modal'

import * as S from './styles'

export default function DetailsModal() {
  const dispatch = useDispatch()

  const modalVisible = useSelector(state => state.modalReducer.visible)
  const title = useSelector(state => state.modalReducer.title)
  const image = useSelector(state => state.modalReducer.image)
  const release_date = useSelector(state => state.modalReducer.release_date)
  const vote_average = useSelector(state => state.modalReducer.vote_average)
  const overview = useSelector(state => state.modalReducer.overview)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
        setModalVisible(!modalVisible)
      }}
    >
      <S.ContainerModal>
        <S.ContentModal>
          <S.ContainerHeader>
            <S.MovieImage
              source={{
                uri: `https://image.tmdb.org/t/p/w200${image}`,
              }}
            />
            <S.ContentHeader>
              <S.MovieTitle numberOfLines={3}>Title: {title}</S.MovieTitle>
              <S.Details>Release date: {release_date}</S.Details>
              <S.Details>Vote average: {vote_average}</S.Details>
            </S.ContentHeader>
          </S.ContainerHeader>
          <S.OverviewText>Overview: {overview}</S.OverviewText>
          <S.ButtonClose
            onPress={() => dispatch(setModalVisible({ visible: false }))}
          >
            <S.ButtonText>Close</S.ButtonText>
          </S.ButtonClose>
        </S.ContentModal>
      </S.ContainerModal>
    </Modal>
  )
}
