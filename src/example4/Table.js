import React, { Component } from 'react'

// Simple Component
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    )
}

// Simple Component
const TableBody = props => {
    const rows = props.characterData.map((row, index) =>{
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody> {rows} </tbody>
}

//class Component
class Table extends Component {
    render() {
        const {characterData} = this.props
        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData}/>
            </table>
        )
    }
}

export default Table