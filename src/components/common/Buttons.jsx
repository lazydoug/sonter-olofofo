'use client'

export const FilledButton = ({ label, onClick, width, icon, darkMode }) => {
  const buttonWidth = width || '',
    buttonMode = darkMode
      ? 'bg-white text-black hover:text-white hover:bg-primary'
      : 'bg-primary hover:bg-primary-hover'

  return (
    <button
      className={`${buttonWidth} ${buttonMode} pl-[18px] pr-4 pt-2 pb-[7px] text-btn-sm rounded-[3px] hover:rounded-none transition-all duration-[400ms] md:text-btn-md lg:text-btn-lg md:px-6 md:pb-3 md:pt-[15px] lg:px-7 lg:pt-[17px] lg:pb-[15px]`}
      onClick={() => onClick}>
      {icon}
      {label}
    </button>
  )
}

export const OutlinedButton = ({ label, onClick, width, icon, darkMode }) => {
  const buttonWidth = width || '',
    buttonMode = darkMode
      ? 'border-white/40 text-white hover:bg-white  hover:text-black hover:border-white'
      : 'border-grey-400 text-black hover:bg-black hover:text-white hover:border-black'

  return (
    <button
      className={`${buttonWidth} ${buttonMode} pl-[18px] pr-4 pt-2 pb-[7px] text-btn-sm border rounded-[3px] hover:rounded-none transition-all duration-[400ms] md:text-btn-md lg:text-btn-lg md:px-6 md:pb-3 md:pt-[15px] lg:px-7 lg:pt-[17px] lg:pb-[15px]`}
      onClick={() => onClick}>
      {icon}
      {label}
    </button>
  )
}
