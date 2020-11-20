import React from 'react';
import CreateCardForm from '../createCard/CreateCardForm'

import {connect} from 'react-redux'

import './collections.css'

const AddToCollection = (props) => {
  return(
    <div className="add-card-page">
      <div>
        <h1>Add Cards to the Collection</h1>
        <CreateCardForm/>
      </div>
      <div><h2>Cards to Add:</h2></div>
    </div>
  )
}

export default connect()(AddToCollection)