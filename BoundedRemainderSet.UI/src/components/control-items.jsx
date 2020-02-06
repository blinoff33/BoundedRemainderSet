/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var ControlItem = React.createClass({
    getControlInputId: function (stateField) {
        return "ControlInput" + stateField;
    },
    render() {
        return (
            <div className="form-group row">
                <label for={this.getControlInputId(this.props.stateField)} className="col-sm-7">{this.props.title}</label>
                <div className="col-sm-5">
                    <input type="number"
                        className={"form-control " + (this.props.isValid ? "is-valid" : "is-invalid")}
                        value={this.props.value}
                        onChange={e => this.props.handleChange(this.props.stateField, e.target.value)}
                        id={this.getControlInputId(this.props.stateField)}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        disabled={this.props.disabled} />
                    {!this.props.isValid && <div className="invalid-feedback">
                        {this.props.invalidFieldMessage}
                    </div>}
                </div>

            </div>
        );
    }
});

module.exports = ControlItem;
