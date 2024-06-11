import React from 'react';

const ShowResults = ({ data }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md mt-6">
      <h2 className="text-2xl mb-6">Results</h2>
      <div className="p-4 bg-gray-700 rounded-md">
        <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ShowResults;
