import React  from 'react';

class CalcDisplay extends React.Component {

    // Visualitzar el display de la calculadora
    render() {
      return (
        <div className="calcDisplay">
          {this.props.displayNumber}
        </div>
      );
    }
};

// Props per defecte
CalcDisplay.defaultProps = {
  displayNumber: 100
}

export default CalcDisplay;