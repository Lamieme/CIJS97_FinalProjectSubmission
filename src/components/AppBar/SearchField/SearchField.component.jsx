import { Search, SearchIconWrapper, StyledInputBase } from './styled'
import SearchIcon from '@mui/icons-material/Search'

const SearchFieldComponent = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

export default SearchFieldComponent
