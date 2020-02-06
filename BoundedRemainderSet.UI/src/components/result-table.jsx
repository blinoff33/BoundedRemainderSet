/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var ResultTable = React.createClass({
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Разбиение <br/>развертки</th>
                        <th scope="col">Ожидаемое <br/>кол-во точек</th>
                        <th scope="col">Фактическое <br/>кол-во точек</th>
                        <th scope="col">Отклонение</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.result && Object.keys(this.props.result).map((keyName, i) => {
                        var res = this.props.result[keyName];
                        return (<tr key={i}>
                            <th scope="row" style={{color: keyName}}>{keyName}</th>
                            <td>{res.planCount}</td>
                            <td>{res.factCount}</td>
                            <td>{res.difference}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        );
    }
});

module.exports = ResultTable;
