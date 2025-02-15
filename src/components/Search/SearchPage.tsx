import React, { useState } from "react";

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    genre: "",
    artist: "",
    year: "",
  });
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    // Simulated search results (replace this with API calls)
    const dummyResults = [
      "Amazing Grace - John Newton",
      "How Great Is Our God - Chris Tomlin",
      "10,000 Reasons - Matt Redman",
    ];
    setResults(dummyResults.filter((song) => song.toLowerCase().includes(searchQuery.toLowerCase())));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilters({ ...selectedFilters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-20">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">Search Songs</h1>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by song title, lyrics, or artist..."
            className="flex-1 p-2 border border-gray-300 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Filter Section */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Genre</label>
            <select
              name="genre"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={selectedFilters.genre}
              onChange={handleFilterChange}
            >
              <option value="">All Genres</option>
              <option value="worship">Worship</option>
              <option value="hymn">Hymn</option>
              <option value="contemporary">Contemporary</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Artist</label>
            <select
              name="artist"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={selectedFilters.artist}
              onChange={handleFilterChange}
            >
              <option value="">All Artists</option>
              <option value="chris-tomlin">Chris Tomlin</option>
              <option value="matt-redman">Matt Redman</option>
              <option value="john-newton">John Newton</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <select
              name="year"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={selectedFilters.year}
              onChange={handleFilterChange}
            >
              <option value="">All Years</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-lg font-bold mb-4">Results</h2>
        {results.length > 0 ? (
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="p-2 bg-gray-50 border border-gray-300 rounded-lg">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results found. Try adjusting your search or filters.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
