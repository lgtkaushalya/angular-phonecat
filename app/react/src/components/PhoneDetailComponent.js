import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

class PhoneDetailComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.phoneId && this.props.Phone.get({phoneId: this.props.phoneId}, function(phone) {
        this.setState({
            phone: phone,
            mainImageUrl: phone.images[0]
        });
    }.bind(this));  
  }

  setImage(img) {
    this.setState({mainImageUrl: img})
  }

  render() {
    return (
      this.state !== undefined && this.state.phone !== undefined && (
      <div>
        <div className="phone-images">
          {
            this.state.phone.images.map((img, i) => { 
              return this.state.mainImageUrl === img && <img src={img} key={i} className={this.state.mainImageUrl === img ? 'phone selected': 'phone'} />
            })
          }
        </div>
        <h1>{this.state.phone.name}</h1>
        <p>{this.state.phone.description}</p>
        <ul className="phone-thumbs">
          {
            this.state.phone.images.map((img, i) => { 
              return (<li>
                        <img src={img} key={i} onClick={() => this.setImage(img)} />
                      </li>)
            })
          }
        </ul>
        <ul className="specs">
          <li>
            <span>Availability and Networks</span>
            <dl>
              <dt>Availability</dt>
              {
                this.state.phone.availability.map(function(availability, i) { 
                  return <dd key={i}>{availability}</dd>
                })
              }
              
            </dl>
          </li>
          <li>
            <span>Battery</span>
            <dl>
              <dt>Type</dt>
              <dd>{this.state.phone.battery.type}</dd>
              <dt>Talk Time</dt>
              <dd>{this.state.phone.battery.talkTime}</dd>
              <dt>Standby time (max)</dt>
              <dd>{this.state.phone.battery.standbyTime}</dd>
            </dl>
          </li>
          <li>
            <span>Storage and Memory</span>
            <dl>
              <dt>RAM</dt>
              <dd>{this.state.phone.storage.ram}</dd>
              <dt>Internal Storage</dt>
              <dd>{this.state.phone.storage.flash}</dd>
            </dl>
          </li>
          <li>
            <span>Connectivity</span>
            <dl>
              <dt>Network Support</dt>
              <dd>{this.state.phone.connectivity.cell}</dd>
              <dt>WiFi</dt>
              <dd>{this.state.phone.connectivity.wifi}</dd>
              <dt>Bluetooth</dt>
              <dd>{this.state.phone.connectivity.bluetooth}</dd>
              <dt>Infrared</dt>
              <dd>{this.props.$filter('checkmark')(this.state.phone.connectivity.infrared)}</dd>
              <dt>GPS</dt>
              <dd>{this.props.$filter('checkmark')(this.state.phone.connectivity.gps)}</dd>
            </dl>
          </li>
          <li>
            <span>Android</span>
            <dl>
              <dt>OS Version</dt>
              <dd>{this.state.phone.android.os}</dd>
              <dt>UI</dt>
              <dd>{this.state.phone.android.ui}</dd>
            </dl>
          </li>
          <li>
            <span>Size and Weight</span>
            <dl>
              <dt>Dimensions</dt>
              {
                this.state.phone.sizeAndWeight.dimensions.map(function(dim, i) { 
                  return <dd key={i}>{dim}</dd>
                })
              }
              <dt>Weight</dt>
              <dd>{this.state.phone.sizeAndWeight.weight}</dd>
            </dl>
          </li>
          <li>
            <span>Display</span>
            <dl>
              <dt>Screen size</dt>
              <dd>{this.state.phone.display.screenSize}</dd>
              <dt>Screen resolution</dt>
              <dd>{this.state.phone.display.screenResolution}</dd>
              <dt>Touch screen</dt>
              <dd>{this.props.$filter('checkmark')(this.state.phone.display.touchScreen)}</dd>
            </dl>
          </li>
          <li>
            <span>Hardware</span>
            <dl>
              <dt>CPU</dt>
              <dd>{this.state.phone.hardware.cpu}</dd>
              <dt>USB</dt>
              <dd>{this.state.phone.hardware.usb}</dd>
              <dt>Audio / headphone jack</dt>
              <dd>{this.state.phone.hardware.audioJack}</dd>
              <dt>FM Radio</dt>
              <dd>{this.props.$filter('checkmark')(this.state.phone.hardware.fmRadio)}</dd>
              <dt>Accelerometer</dt>
              <dd>{this.props.$filter('checkmark')(this.state.phone.hardware.accelerometer)}</dd>
            </dl>
          </li>
          <li>
            <span>Camera</span>
            <dl>
              <dt>Primary</dt>
              <dd>{this.state.phone.camera.primary}</dd>
              <dt>Features</dt>
              <dd>{this.state.phone.camera.features.join(', ')}</dd>
            </dl>
          </li>
          <li>
            <span>Additional Features</span>
            <dd>{this.state.phone.additionalFeatures}</dd>
          </li>
        </ul> 
      </div>
      )
    );
  }
}

PhoneDetailComponent.propTypes = {
  phoneId: PropTypes.string,
  $filter: PropTypes.func,
  Phone: PropTypes.func
};

export default PhoneDetailComponent;