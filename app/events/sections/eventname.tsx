"use client";

import Image from 'next/image';

export default function EventName() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="max-w-4xl mx-auto p-6 bg-black rounded-lg flex items-center border border-white">
        <Image
          src="/" // Replace with your image path
          alt="Event Image"
          className="w-1/2 h-auto rounded-lg mr-4"
          width={500} // Set a width for the image
          height={300} // Set a height for the image
        />
        <div className="w-1/2">
          <p className="text-gray-600 mb-2">28 Oct - 29 Oct Online</p>
          {/* Header */}
          <h1 className="text-4xl font-bold text-white-800 mb-4">
            SUI MeetUp
          </h1>

          {/* Subheader */}
          <h2 className="text-2xl font-semibold text-white/50 mb-6">
            Capture Your Smile - Whose Will Shine the Brightest?
          </h2>
        </div>
      </div>

      <div className="mt-4"> {/* Added gap from top */}
          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white transition-all"
          >
            Enter Event
          </button>
        </div>

      {/* Event Description */}
      <div className="mt-10 space-y-8 text-white-600">
        <h1 className="text-3xl font-bold">
          Participants
        </h1>
      </div>


      <div className="max-w-1xl mx-auto p-6 bg-white rounded-lg flex items-center">
        <Image
          src="/" // Replace with your image path
          alt="Event Image"
          className="w-1/2 h-auto rounded-full mr-4"
          width={-10} // Set a width for the image
          height={-10} // Set a height for the image
        />
        <div className="w-1/2 ">
          <p className="text-gray-600 mb-2">0x5d1b5....790f</p>
        </div>
      </div>

    </div>
  );
}
