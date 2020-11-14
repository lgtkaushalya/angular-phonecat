import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'

class PhoneListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      phones: [],
      orderProp: 'age',
      query: ''
    };

    this.props.Phone.query(function(phones) {
      this.setState({phones: phones});
    }.bind(this)); 

  }

  updateQueryState(query) {
    this.setState({query: query})
  }

  updateOrderByState(oder) {
    this.setState({orderProp: oder})
  }
 

  render() {
    let phones = this.state.phones;
    if (phones !== undefined) {
      phones = this.props.$filter('filter')(phones, this.state.query);
      phones = this.props.$filter('orderBy')(phones, this.state.orderProp);
    }
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            {/*Sidebar content*/}
            <p>
              Search:
              <input onChange={(e) => this.updateQueryState(e.target.value)} />
            </p>
            <p>
              Sort by:
              <select value={this.state.orderProp} onChange={(e) => this.updateOrderByState(e.target.value)}>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </div>
          <div className="col-md-10">
            {/*Body content*/}
            <ul className="phones">
              {
                phones !== undefined && phones.map((phone, i) => {
                  
                  return (
                    <li key={i} className="thumbnail phone-list-item">
                      <a href={"#!/phones/"+phone.id} className="thumb">
                        <img src={phone.imageUrl} alt={phone.name} />
                      </a>
                      <a href={"#!/phones/"+phone.id}>{phone.name}</a>
                      <p>{phone.snippet}</p>
                    </li>
                  )
                })
              }
              
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

PhoneListComponent.propTypes = {
  $filter: PropTypes.func,
  Phone: PropTypes.func
};

export default PhoneListComponent;