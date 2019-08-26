import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import GroceryItem from '../../models/GroceryItem';
import GroceryList from '../../models/GroceryList';
import { IGroceryListState, IState } from '../../reducers';

interface IGroceryItemState {
    items: GroceryItem[],
    currentList?: GroceryList,
    name?: string,
    type?: string,
    message?: string
}
export interface IGroceryListItemsProps extends RouteComponentProps {
    selectedList: IGroceryListState
}

export class GroceryListWithItemsComponent extends Component<IGroceryListItemsProps, IGroceryItemState> {

    constructor(props: any) {
        super(props);
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        const resp = await fetch(`http://localhost:8012/grocery-items/grocery-list/${this.props.selectedList.selectedList.groceryListId}`, {
            method: 'GET',
            credentials: 'include'
        });
        const items = await resp.json();
        console.log(items);
        this.setState({
            items
        });
    }

    deleteItem = async (item: GroceryItem) => {

        await fetch(`http://localhost:8012/grocery-lists/${this.props.selectedList.selectedList.groceryListId}/items/${item.groceryItemId}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        this.setState({
            message: 'Deleted Item'
        })
    }

    updateName(event: React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.value;
        this.setState({
            name
        });
    }

    updateType(event: React.ChangeEvent<HTMLInputElement>) {
        const type = event.target.value;
        this.setState({
            type
        });
    }

    createItem = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const body = {
            groceryItemName: this.state.name,
            groceryItemType: this.state.type
        }
        await fetch(`http://localhost:8012/grocery-lists/${this.props.selectedList.selectedList.groceryListId}/items`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json'
            }
        });
        this.setState({
            message: 'Created New Item'
        })
    }

    render() {
        const items = this.state.items;
        return (
            <div>
                <h1>{this.props.selectedList.selectedList.name}</h1>
                <table className="showAllTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Delete?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item =>
                                <tr key={'itemId-' + item.groceryItemId}>
                                    <td>{item.groceryItemId}</td>
                                    <td>{item.groceryItemName}</td>
                                    <td>{item.groceryItemType}</td>
                                    <td onClick={() => this.deleteItem(item)}>X</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <br />
                <form className="form-update">
                    <table className="createList">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="inputName"> Name: </label>
                                </td>
                                <td>
                                    <input type="text" onChange={this.updateName}
                                        value={this.state.name}></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="inputDescription">Type:</label>
                                </td>
                                <td>
                                    <input type="text" onChange={this.updateType}
                                        value={this.state.type}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br />

                    <br />
                    <button className="btn btn-lg btn-success" onClick={(e) => this.createItem(e)}>Create New Item</button>
                </form>
                {this.state.message}

            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        selectedList: state.selectedList
    }
}

export default connect(mapStateToProps)(GroceryListWithItemsComponent);