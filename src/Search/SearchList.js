import ListItem from "./SearchListItem"
import './SearchList.css';
import { array, string } from 'prop-types';

const List = ({list, order, direction}) => {
    var apiResults = [];
    if (list.length > 0) {
        var sortedList = []; 
        if (order === "title") {
            if (direction === "ascending") {
                sortedList = list[0].sort((a, b) => {
                    if (a.title > b.title) return 1;
                    if (a.title < b.title) return -1;
                    return 0;
                });
            }  else {
                sortedList = list[0].sort((a, b) => {
                    if (a.title > b.title) return -1;
                    if (a.title < b.title) return 1;
                    return 0;
                });
            }
        } else {
            if (direction === "ascending") {
                sortedList = list[0].sort((a, b) => {
                    if (a.popularity > b.popularity) return 1;
                    if (a.popularity < b.popularity) return -1;
                    return 0;
                });
            }  else {
                sortedList = list[0].sort((a, b) => {
                    if (a.popularity > b.popularity) return -1;
                    if (a.popularity < b.popularity) return 1;
                    return 0;
                });
            }
        }
        apiResults = sortedList.map((item, index) => <ListItem key={item.id} movie={item} props={list} index={index}/>)
        
    }

    const content = apiResults?.length ? apiResults: <h1>No matching movies</h1>
    return (
        <main>{content}</main>
    )

}
List.propTypes = {
    list: array, 
    order: string,
    direction: string
};
export default List