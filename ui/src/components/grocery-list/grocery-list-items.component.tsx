import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import GroceryItem from '../../models/GroceryItem';
import GroceryList from '../../models/GroceryList';
import { IGroceryListState, IState } from '../../reducers';

interface IGroceryItemState {
    items: GroceryItem[],
    currentList?: GroceryList,

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

    // updateName(event: React.ChangeEvent<HTMLInputElement>) {
    //     const name = event.target.value;
    //     console.log(name)
    //     this.setState({
    //         name: name
    //     });
    // }

    // updateType(event: React.ChangeEvent<HTMLInputElement>) {
    //     this.setState({
    //         description: event.target.value
    //     });
    // }

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item =>
                                <tr key={'itemId-' + item.groceryItemId}>
                                    <td>{item.groceryItemId}</td>
                                    <td>{item.groceryItemName}</td>
                                    <td>{item.groceryItemType}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
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