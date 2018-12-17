import React, { Component } from 'react';
import MyButton from '../util/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        position: ['Silver', 'Gold', 'Platinum'],
        desc: [
            'Reprehenderit omnis dolorem nam voluptatem quae natus nisi laudantium sapiente sunt deserunt, doloremque sequi',
            'quas officia. Neque, excepturi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur commodi eligendi ut.',
            'incidunt molestiae veritatis repellendus eaque quod excepturi, harum, velit quasi.'
        ],
        linkto: ['http://sales/s', 'http://sales/g', 'http://sales/p'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.position[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                bck="#ffa900"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                
                </div>
            </div>
        );
    }
}

export default Pricing;
