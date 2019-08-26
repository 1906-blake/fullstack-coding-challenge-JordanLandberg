import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import GroceryList from '../../models/GroceryList';
import { IGroceryListState, IState } from '../../reducers';
import { updateSelectedList } from '../../actions/grocery-list.actions';

interface IGroceryState {
    lists: GroceryList[],
    selectedList: GroceryList,
    name: string,
    description: string,
    createdList?: GroceryList,
    message?: string
}

export interface IGroceryListItemsProps extends RouteComponentProps {
    selectedList: IGroceryListState,
    updateSelectedList: (selectedList: GroceryList) => any
}

export class GroceryListAllComponent extends Component<IGroceryListItemsProps, IGroceryState> {

    constructor(props: any) {
        super(props);
        this.state = {
            lists: [],
            selectedList: {
                groceryListId: 0,
                name: '',
                description: ''
            },
            name: '',
            description: ''
        };
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8012/grocery-lists', {
            method: 'GET',
            credentials: 'include'
        });
        const lists = await response.json();
        this.setState({
            lists
        })
    }

    createList = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const body = {
            name: this.state.name,
            description: this.state.description
        }
        await fetch('http://localhost:8012/grocery-lists', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json'
            }
        });
        this.setState({
            message: 'Created New List'
        })
    }
    deleteList = async (list: GroceryList) => {
        
        await fetch(`http://localhost:8012/grocery-lists/${list.groceryListId}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        this.setState({
            message: `Deleted list ${list.name}`
        })
    }

    checkList(list: GroceryList) {
       this.props.updateSelectedList(list);
       this.props.history.push('/groceries/items')
    }

    updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        this.setState({
            name: name
        });
    }
    updateDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            description: event.target.value
        });
    }

    render() {
        const lists = this.state.lists && this.state.lists;
        return (

            <div>
                <div className="updateGroceryListWithoutItems">
                    <h1>Grocery Lists</h1>
                    <br />
                    <br />
                    <table className="showAllTable">
                        <thead>
                            <tr>
                                <th>Grocery ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lists.map(list =>
                                    <tr key={'listId-' + list.groceryListId} className="clickable">
                                        <td onClick={() => this.checkList(list)}>{list.groceryListId}</td>
                                        <td onClick={() => this.checkList(list)}>{list.name}</td>
                                        <td onClick={() => this.checkList(list)}>{list.description}</td>
                                        <td onClick={() => this.deleteList(list)}>X</td>
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
                                        <label htmlFor="inputDescription">Description:</label>
                                    </td>
                                    <td>
                                        <input type="text" onChange={this.updateDesc}
                                            value={this.state.description}></input>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <br />
                        
                        <br />
                        <button className="btn btn-lg btn-success" onClick={(e) => this.createList(e)}>Create New List</button>
                    </form>
                    <br />
                    {this.state.message}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: IState) => {
    return {
        selectedList: state.selectedList
    }
}

const mapDispatchToProps = {
    updateSelectedList
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListAllComponent);
