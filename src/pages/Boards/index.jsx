import { Container } from '@mui/material'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={'xl'} sx={{ height: '100vh' }}>
      <BoardContent />
    </Container>
  )
}

export default Board
