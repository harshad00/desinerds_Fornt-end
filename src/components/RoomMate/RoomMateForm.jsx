import { useState } from "react";


const RoommateForm = () => {
  const [formState, setFormState] = useState({
    about: '',
    lifestyleHabits: '',
    dailyRoutines: '',
    smokingHabits: 'Non Smoker',
    petPreferences: 'Cats',
    sleepSchedule: '',
    cleanliness: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Your Perfect Roommate</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="about">About</label>
          <textarea
            id="about"
            name="about"
            value={formState.about}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="lifestyleHabits">Lifestyle Habits</label>
            <textarea
              id="lifestyleHabits"
              name="lifestyleHabits"
              value={formState.lifestyleHabits}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="dailyRoutines">Daily Routines</label>
            <textarea
              id="dailyRoutines"
              name="dailyRoutines"
              value={formState.dailyRoutines}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Smoking Habits</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="smokingHabits"
                value="Smoker"
                checked={formState.smokingHabits === 'Smoker'}
                onChange={handleChange}
                className="mr-2"
              />
              Smoker
            </label>
            <label>
              <input
                type="radio"
                name="smokingHabits"
                value="Non Smoker"
                checked={formState.smokingHabits === 'Non Smoker'}
                onChange={handleChange}
                className="mr-2"
              />
              Non Smoker
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Pet Preferences</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="petPreferences"
                value="Cats"
                checked={formState.petPreferences === 'Cats'}
                onChange={handleChange}
                className="mr-2"
              />
              Cats
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="petPreferences"
                value="Dogs"
                checked={formState.petPreferences === 'Dogs'}
                onChange={handleChange}
                className="mr-2"
              />
              Dogs
            </label>
            <label>
              <input
                type="radio"
                name="petPreferences"
                value="No Pets"
                checked={formState.petPreferences === 'No Pets'}
                onChange={handleChange}
                className="mr-2"
              />
              No Pets
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="sleepSchedule">Sleep Schedule</label>
          <select
            id="sleepSchedule"
            name="sleepSchedule"
            value={formState.sleepSchedule}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Early Riser">Early Riser</option>
            <option value="Night Owl">Night Owl</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="cleanliness">Describe your ideal level of cleanliness in a shared space</label>
          <textarea
            id="cleanliness"
            name="cleanliness"
            value={formState.cleanliness}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-purple-500 text-white py-2 px-4 rounded mr-2"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoommateForm;
