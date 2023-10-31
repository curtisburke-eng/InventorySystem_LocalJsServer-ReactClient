// Get assets & CSS
import '../css/main.css'

export default function BadgeCard({id, size_mm, model,color,count_onHand,count_onOrder, onDecreaseOnHand,onIncreaseOnHand,onDecreaseOnOrder,onIncreaseOnOrder}) {
    const handleDecreaseOnHand = () => {
        onDecreaseOnHand(id)
    }
    const handleIncreaseOnHand = () => {
        onIncreaseOnHand(id)
    }
    const handleDecreaseOnOrder = () => {
        onDecreaseOnOrder(id)
    }
    const handleIncreaseOnOrder = () => {
        onIncreaseOnOrder(id)
    }
    const handleSave = () => {
        console.log("Save ")
    }

    return (
        <div className="card brand-blue">
            <div className="card-content white-text" key={id}>
                <h3 className="center"> {size_mm} MM </h3>
                <h4 className="center">{model} {color} </h4>

                <div className='row'>
                    <h4 className="center">Inventory Counts</h4>
                    <div className="col s6 m6 l6">
                        <h5 className="center">On Hand:</h5>
                        <h5 className="center"> {count_onHand} </h5>
                        
                        {/* Create + - buttons for ON HAND counts */}
                        <div className="row">
                            <div className="col s2 m2 l2"></div>
                            <div className="col center s8 m8 l8">
                                <button className="left waves-effect waves-light btn-floating brand"
                                onClick={handleDecreaseOnHand}>-</button>
                                <button className="right waves-effect waves-light btn-floating brand"
                                onClick={handleIncreaseOnHand}>+</button>
                            </div>
                            <div className="col s2 m2 l2"></div>
                        </div>
                        
                    </div>
                    <div className="col s6 m6 l6">
                        <h5 className="center">On Order:</h5>
                        <h5 className="center"> {count_onOrder} </h5>
                        
                        {/* Create + - buttons for ON ORDER counts */}
                        <div className="row">
                            <div className="col s2 m2 l2"></div>
                            <div className="col center s8 m8 l8">
                            <button className="left waves-effect waves-light btn-floating brand"
                                onClick={handleDecreaseOnOrder}>-</button>
                                <button className="right waves-effect waves-light btn-floating brand"
                                onClick={handleIncreaseOnOrder}>+</button>
                            </div>
                            <div className="col s2 m2 l2"></div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col s5 m5 l5"></div>
                    <div className="col s2 m2 l2">
                        <button className="waves-effect waves-light btn brand"
                        onClick={handleSave}>Save</button>
                    </div>
                    <div className="col s5 m5 l5"></div>
                    
                </div>
                
            </div>
        </div>
    )
}