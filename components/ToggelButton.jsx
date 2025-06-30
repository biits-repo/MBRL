'use client'

const ToggleButton = ({ enabled, setEnabled }) => {
  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className="sr-only peer"
        />
        <div className="block w-14 h-8 rounded-full bg-gray-300 peer-checked:bg-orange-500 transition-colors duration-300"></div>
        <div className="dot absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-all duration-300 peer-checked:translate-x-6"></div>
      </div>

      <span className="ml-3 text-md font-medium text-slate-600">Remember Me</span>
    </label>
  )
}

export default ToggleButton
