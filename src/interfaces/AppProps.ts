import Person from './Person'

export default interface AppProps {
  filtredItems: Array<Person>
  onInputChange(e: React.ChangeEvent<HTMLInputElement>): void
  apiError: string
  onPaginationItemClick(selectedItem: { selected: number }): void
  everyPeopleThatMatchesFilter: Array<Person>
}