import React, { useState } from "react";
import FilterModal from "./FilterModal"; // Import the modal component
import { FiFilter, FiHeart, FiMessageSquare, FiMusic } from "react-icons/fi";
import Logo from "../assets/TMWLogo.png";
import { PiPlayCircleFill } from "react-icons/pi";
const SongSearchPage = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const toggleModal = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  return (
    <>
      <div className="bg-white text-black px-2 py-2">
  {/* Header with Logo, Search Bar, and Tabs */}
  <div className="flex justify-between items-center mb-6">
    {/* Logo */}
    <div className="flex items-center space-x-3 px-4 ml-4">
      <img src={Logo} alt="Logo" className="w-24 h-24 rounded-full" />
    </div>

    {/* Search Bar */}
    <div className="flex-1 flex justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-400 w-full max-w-lg p-2 rounded-lg text-black placeholder-black"
      />
    </div>

    {/* Tabs */}
    <div className="flex items-center space-x-6 mr-4">
      <button className="text-black font-semibold hover:text-gray-600">
        Tab 1
      </button>
      <button className="text-black font-semibold hover:text-gray-600">
        Tab 2
      </button>
      <button className="text-black font-semibold hover:text-gray-600">
        Tab 3
      </button>
    </div>
  </div>
</div>

      <div className="flex justify-center items-center w-full ">
        {/* Header Section */}
        <div className="flex flex-col w-full p-10 ">
        <div className="flex flex-col gap-2">
  <h1 className="text-xl font-bold">860 Song Results for 'tommy'</h1>

  <div className="flex justify-between items-center mb-4">
    {/* Filters Button */}
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleModal}
        className="bg-gray-400 text-black px-4 py-2 flex items-center space-x-2 rounded-full border-gray-700"
      >
        <FiFilter color="black" />
        <span>Filters</span>
      </button>
    </div>

    {/* Sort By Dropdown */}
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 text-md">Sort by</span>
      <select className="bg-gray-400 shadow text-black p-2 rounded-full border text-sm border-gray-700">
        <option>Most Relevant</option>
        <option>Popularity</option>
        <option>CCLI Rank</option>
        <option>Date Added</option>
        <option>Title</option>
      </select>
    </div>
  </div>
</div>
 

          <div className="bg-conic-270 p-8 rounded-lg space-y-4 space-x-0 shadow-lg">
          <div className="flex flex-row justify-between items-center w-full border-b border-b-gray-400 p-4">
  {/* Left Section (Play Icon + Song Info) */}
  <div className="flex flex-row items-center gap-3 w-full">
    <PiPlayCircleFill className="h-9 w-9 text-gray-600" />

    <div className="flex flex-col">
      <h2 className="font-semibold">
        All Hail The Power Of Jesus' Name
      </h2>
      <p className="text-gray-500 text-sm">
        Edward Perronet, John Rippon, Oliver Holden, Tommy Walker
      </p>
    </div>
  </div>

  {/* Right Section (Icons) */}
  <div className="flex space-x-4 text-gray-400">
    <FiMessageSquare className="cursor-pointer hover:text-gray-300" />
    <FiMusic className="cursor-pointer hover:text-gray-300" />
    <FiHeart className="cursor-pointer hover:text-gray-300" />
  </div>
</div>


            <div className="flex flex-row justify-between items-center border-b p-4 border-b-gray-400 w-full">
  {/* Left Section (Play Icon + Song Info) */}
  <div className="flex flex-row items-center gap-3 w-full">
    <PiPlayCircleFill className="h-9 w-9 text-gray-600" />

    <div className="flex flex-col">
      <h2 className="font-semibold">
        All Hail The Power Of Jesus' Name
      </h2>
      <p className="text-gray-500 text-sm">
        Edward Perronet, John Rippon, Oliver Holden, Tommy Walker
      </p>
    </div>
  </div>

  {/* Right Section (Icons) */}
  <div className="flex space-x-4 text-gray-400">
    <FiMessageSquare className="cursor-pointer hover:text-gray-300" />
    <FiMusic className="cursor-pointer hover:text-gray-300" />
    <FiHeart className="cursor-pointer hover:text-gray-300" />
  </div>
</div>


            <div className="flex flex-row justify-between items-center  p-4 border-b-gray-400 w-full">
  {/* Left Section (Play Icon + Song Info) */}
  <div className="flex flex-row items-center gap-3 w-full">
    <PiPlayCircleFill className="h-9 w-9 text-gray-600" />

    <div className="flex flex-col">
      <h2 className="font-semibold">
        All Hail The Power Of Jesus' Name
      </h2>
      <p className="text-gray-500 text-sm">
        Edward Perronet, John Rippon, Oliver Holden, Tommy Walker
      </p>
    </div>
  </div>

  {/* Right Section (Icons) */}
  <div className="flex space-x-4 text-gray-400">
    <FiMessageSquare className="cursor-pointer hover:text-gray-300" />
    <FiMusic className="cursor-pointer hover:text-gray-300" />
    <FiHeart className="cursor-pointer hover:text-gray-300" />
  </div>
</div>

          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 text-gray-400">
            <span>Showing 1 to 10 of 860 items</span>
            <div className="flex space-x-2">
              <button className="bg-gray-700 text-white px-3 py-2 rounded">
                1
              </button>
              <button className="bg-gray-700 text-white px-3 py-2 rounded">
                2
              </button>
              <button className="bg-gray-700 text-white px-3 py-2 rounded">
                3
              </button>
              <span>...</span>
              <button className="bg-gray-700 text-white px-3 py-2 rounded">
                Next
              </button>
            </div>
            <span>10 per page</span>
          </div>
        </div>

        {/* Filter Modal */}
        {showModal && (
          <FilterModal toggleModal={toggleModal} isOpen={showModal} />
        )}
      </div>
    </>
  );
};

export default SongSearchPage;
