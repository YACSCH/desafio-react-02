
export const Alert = ({ msg, color }) => {
  
  return (
    <>
    <p className={ color } >{ msg }</p>
    </>
  )
}
export default Alert;