

// eslint-disable-next-line react/prop-types
function Button({variant , hover , text , icon  }) {
  return (
    <div>
      <button className={` w-[150px] gap-[1rem] items-center justify-center h-[40px]  ${variant} ${hover} px-[1rem] py-1 font-bold rounded-[5px] `}>
      <div> {text}</div>
      <div>
       {
        icon && <img src={icon} alt={icon} width={20} height={20} /> 
       }
       </div>
      </button>
    </div>
  )
}

export default Button
