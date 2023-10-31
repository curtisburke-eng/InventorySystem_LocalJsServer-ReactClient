// Get assets & CSS
import '../css/main.css'

export default function BadgeCard(badge) {

    return (
        <div className="card brand-blue">
            <div className="card-content white-text" key={badge.id}>
                <h3 className="center"> {badge.size_mm} MM </h3>
                <h4 className="center">{badge.model} {badge.color} </h4>

                <div className='row'>
                    <h4 className="center">Inventory Counts</h4>
                    <div className="col s6 m6 l6">
                        <h5 className="center">On Hand:</h5>
                        <h5 className="center"> {badge.count_onHand} </h5>
                        
                        <div className="row">
                            <div className="col s2 m2 l2"></div>
                            <div className="col center s8 m8 l8">
                                <a class="left waves-effect waves-light btn-floating brand">-</a>
                                <a class="right waves-effect waves-light btn-floating brand">+</a>
                            </div>
                            <div className="col s2 m2 l2"></div>
                        </div>
                        
                    </div>
                    <div className="col s6 m6 l6">
                        <h5 className="center">On Order:</h5>
                        <h5 className="center"> {badge.count_onOrder} </h5>
                        <div className="row">
                            <div className="col s2 m2 l2"></div>
                            <div className="col center s8 m8 l8">
                                <a class="left waves-effect waves-light btn-floating brand">-</a>
                                <a class="right waves-effect waves-light btn-floating brand">+</a>
                            </div>
                            <div className="col s2 m2 l2"></div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col s5 m5 l5"></div>
                    <div className="col s2 m2 l2">
                        <a class="center waves-effect waves-light btn-large brand">Save</a>
                    </div>
                    <div className="col s5 m5 l5"></div>
                    
                </div>
                
            </div>
        </div>
    )
}