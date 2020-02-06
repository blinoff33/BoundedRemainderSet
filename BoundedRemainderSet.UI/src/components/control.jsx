/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Common = require('../utils/common');
var CONSTANTS = require('../utils/constants');
var ControlItem = require('./control-items');
var Displaying = require('../utils/displaying');

var Control = React.createClass({
  getInitialState: function () {
    return {
      count: CONSTANTS.DEFAULT_CONFIG.COUNT,
      b1: CONSTANTS.DEFAULT_CONFIG.B1,
      b2: CONSTANTS.DEFAULT_CONFIG.B2,
      p1: CONSTANTS.DEFAULT_CONFIG.P1,
      p2: CONSTANTS.DEFAULT_CONFIG.P2,
      t: CONSTANTS.DEFAULT_CONFIG.T,
      delay: CONSTANTS.DEFAULT_CONFIG.DELAY
    }
  },
  handleChange: function (stateFieldName, value) {
    this.setState({ [stateFieldName]: value });
  },
  init: function () {
    this.setState(this.getInitialState());
  },
  run: function () {
    this.props.run(this.state);
  },
  controlItems:
    [{
      stateField: "count",
      title: "Количество точек",
      step: 1000,
      invalidFieldMessage: "Значение должно быть целым и больше 0",
      isValid: function (value) {
        return Number.isInteger(+value) && value > 0;
      }
    },
    {
      stateField: "b1",
      title: "Вектор b (X)",
      invalidFieldMessage: CONSTANTS.WARNING_NOT_POSITIVE_FIELD_MESSAGE,
      isValid: Common.checkIsPositiveNumber
    },
    {
      stateField: "b2",
      title: "Вектор b (Y)",
      invalidFieldMessage: CONSTANTS.WARNING_NOT_POSITIVE_FIELD_MESSAGE,
      isValid: Common.checkIsPositiveNumber
    },
    {
      stateField: "t",
      title: "Параметр t",
      min: 0,
      max: 0,
      invalidFieldMessage: "Значение должно быть больше 0 и меньше 1",
      isValid: function (value) {
        return value > 0 && value < 1;
      }
    },
    {
      stateField: "p1",
      title: "Начальная точка (X)",
      invalidFieldMessage: CONSTANTS.WARNING_NOT_POSITIVE_FIELD_MESSAGE,
      isValid: Common.checkIsPositiveNumber
    },
    {
      stateField: "p2",
      title: "Начальная точка (Y)",
      invalidFieldMessage: CONSTANTS.WARNING_NOT_POSITIVE_FIELD_MESSAGE,
      isValid: Common.checkIsPositiveNumber
    },
    {
      stateField: "delay",
      title: "Задержка (сек.)",
      invalidFieldMessage: CONSTANTS.WARNING_IS_NEGATIVE_FIELD_MESSAGE,
      isValid: Common.checkIsNotNegative
    }
    ],
  render() {
    var formValid = true;

    return (
      <div className="control-board">
        <form className="was-validated">
          {this.controlItems && this.controlItems.map((control, i) => {
            var value = this.state[control.stateField];
            var isValid = !control.isValid || control.isValid(value);
            formValid = formValid && isValid;

            return (<ControlItem
              key={i}
              stateField={control.stateField}
              title={control.title}
              min={control.min}
              max={control.max}
              isValid={isValid}
              invalidFieldMessage={control.invalidFieldMessage ? control.invalidFieldMessage : CONSTANTS.DEFAULT_INVALID_FIELD_MESSAGE}
              value={value}
              step={control.step}
              handleChange={this.handleChange}
              disabled={this.props.isBusy} />)
          })}

          <button type="button" onClick={() => this.run()} className="btn btn-primary mb-2" disabled={!formValid || this.props.isBusy}>Start</button>
          <button type="button" onClick={() => { this.props.reset(); this.init(); }} className="btn btn-danger mb-2 btn-reload">Reset</button>
          <button type="button" onClick={() => Displaying.stop = true} className="btn btn-danger mb-2 btn-reload" disabled={!formValid}>STOP</button>

        </form>
      </div>
    );
  }
});

module.exports = Control;
