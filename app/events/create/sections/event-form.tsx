'use client'

import { useState } from "react";

export default function EventForm() {
  const [image, setImage] = useState<string | null>(null); // State for uploaded image
  const [name, setName] = useState(""); // State for event name
  const [minVotingAmount, setMinVotingAmount] = useState<number | null>(null); // State for minimum voting amount
  const [description, setDescription] = useState(""); // State for event description
  const [eventType, setEventType] = useState(""); // State for event type

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Optional chaining to handle null
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Cast to string
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      image,
      name,
      minVotingAmount,
      description,
      eventType,
    });
    // Add your form submission logic here
  };

  return (
    <section className="mx-auto w-full max-w-[1000px] pt-4 md:pt-12 flex flex-col gap-4 px-4">
        <h2 className="text-xl font-bold">Create Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload Section */}
        <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center">
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload" className="cursor-pointer">
            {image ? (
              <img
                src={image}
                alt="Event Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            ) : (
              <div className="space-y-2">
                <p className="text-gray-600">Drag & drop an image here</p>
                <p className="text-gray-400 text-sm">or click to upload</p>
              </div>
            )}
          </label>
        </div>

         {/* Event Type Dropdown */}
         <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
            Event Type
          </label>
          <select
            id="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="mt-1 block w-full p-2 border  border-gray-300 rounded-md bg-black text-white"
            required
          >
            <option value="" disabled>
              Select event type
            </option>
            <option value="hackathon">Hackathon</option>
            <option value="meetup">Meetup</option>
            <option value="workshop">Workshop</option>
            <option value="conference">Conference</option>
          </select>
        </div>

        {/* Event Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-black text-white"
            placeholder="Enter event name"
            required
          />
        </div>

        {/* Minimum Voting Amount Field */}
        <div>
          <label htmlFor="minVotingAmount" className="block text-sm font-medium text-gray-700">
            Minimum Voting Amount
          </label>
          <input
            type="number"
            id="minVotingAmount"
            value={minVotingAmount || ''} // Convert null to empty string for controlled input
            onChange={(e) => setMinVotingAmount(parseFloat(e.target.value) || null)} // Convert string to number
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-black text-white"
            placeholder="Enter minimum voting amount"
            required
          />
        </div>

        {/* Event Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border  border-gray-300 rounded-md bg-black text-white"
            placeholder="Enter event description"
            // rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white transition-all"
          >
            Create Event
          </button>
        </div>
      </form>
    </section>
  );
}
