import React, { useState } from "react";
import ReactModal from "react-modal";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Collapse } from "react-collapse";

ReactModal.setAppElement("#root");

const FilterModal = ({ isOpen, toggleModal }) => {
  const [openSections, setOpenSections] = useState({
    songContent: false,
    primaryLanguage: false,
    themes: false,
    keys: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => {
      const newSections = { songContent: false, primaryLanguage: false, themes: false, keys: false };
      newSections[section] = !prev[section]; // Toggle the clicked section
      return newSections;
    });
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      overlayClassName="fixed inset-0 bg-transparent bg-opacity-25 backdrop-blur-md flex items-center justify-center"
      className="bg-white text-black rounded-lg w-96 p-6 shadow-lg focus:outline-none"
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-black">Refine Results</h2>
        <button
          onClick={toggleModal}
          className="text-black  transition duration-200"
        >
          ✕
        </button>
      </div>

      {/* Modal Content */}
      <div className="space-y-4">
        {/* Song Content */}
        <div className="bg-gray-400 p-4 rounded">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("songContent")}
          >
            <h3 className="font-semibold text-sm text-black">Song Content</h3>
            {openSections.songContent ? (
              <FiChevronUp className="text-gray-600" />
            ) : (
              <FiChevronDown className="text-gray-600" />
            )}
          </div>
          <Collapse isOpened={openSections.songContent}>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500 rounded" />
                  <span>Chord Sheet</span>
                </div>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">182</span>
              </label>
              <label className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500 rounded" />
                  <span>Sound Sample</span>
                </div>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">305</span>
              </label>
              <label className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500 rounded" />
                  <span>Vocal Sheet</span>
                </div>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">86</span>
              </label>
              <label className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500 rounded" />
                  <span>Lead Sheet</span>
                </div>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">186</span>
              </label>
            </div>
          </Collapse>
        </div>

        {/* Primary Language */}
        <div className="bg-gray-400 p-4 rounded">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("primaryLanguage")}
          >
            <h3 className="font-semibold text-sm text-black">Primary Language</h3>
            {openSections.primaryLanguage ? (
              <FiChevronUp className="text-gray-600" />
            ) : (
              <FiChevronDown className="text-gray-600" />
            )}
          </div>
          <Collapse isOpened={openSections.primaryLanguage}>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500 rounded" />
                  <span>English</span>
                </div>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">751</span>
              </label>
              <label className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500 rounded" />
                  <span>Spanish</span>
                </div>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">39</span>
              </label>
            </div>
          </Collapse>
        </div>

        {/* Themes */}
        <div className="bg-gray-400 p-4 rounded">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("themes")}
          >
            <h3 className="font-semibold text-sm text-black">Themes</h3>
            {openSections.themes ? (
              <FiChevronUp className="text-gray-500" />
            ) : (
              <FiChevronDown className="text-gray-500" />
            )}
          </div>
          <Collapse isOpened={openSections.themes}>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-blue-500 rounded" />
                  <span>Praise</span>
                </div>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">83</span>
              </label>
            </div>
          </Collapse>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={toggleModal}
          className="bg-transparent text-black px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
        >
          Cancel
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
          Apply
        </button>
      </div>
    </ReactModal>
  );
};

export default FilterModal;
