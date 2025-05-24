const SearchBar = ({ onSearch }) => (
  <input 
    type="text" 
    placeholder="Search books..." 
    onChange={(e) => onSearch(e.target.value)}
    className="search-input"
  />
);
export default SearchBar;