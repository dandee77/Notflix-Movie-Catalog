interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return <div className="text-white text-3xl">{searchTerm}</div>;
};

export default Search;
