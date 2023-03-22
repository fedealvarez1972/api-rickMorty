
const Location = ({fedeyenny}) => {

  return (
    <div className='container-in-location'>
        <div className='container-over-information'>
            <h2>Name:</h2>
            <p>{fedeyenny.name}</p> 
         </div>

        <div className='container-over-information' >
            <h2>Type:</h2>
            <p>{fedeyenny.type}</p> 

        </div>
        <div className='container-over-information'>
            <h2>Dimension:</h2>
            <p>{fedeyenny.dimension}</p> 

        </div>
        <div className='container-over-information'>
            <h2>Residents:</h2>
            <p>{fedeyenny.residents?.length}</p> 
        </div>

    </div>
  )
}

export default Location;



