import './card.css'

function Card({size = "small"}) {
  
    if (size === 'large') {
        return <div className="card large-card">Large Card</div>
    }else{
        return <div className=" card small-card">Small Card</div>
    }
    
  
}

export default Card