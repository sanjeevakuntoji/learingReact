import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Unpslash from '../api/Unpslash'
class App extends Component {
    state = { images: [] };

 onSearchSubmit = async (term) =>{

    console.log(term);
       const response = await Unpslash.get('/search/photos',{
            params: {query: term},
            // headers:{
            //     Authorization:'Client-ID 9065256078390021181a8e85c22daaf8ca105c458fde6d9cb1913b02c4f3fe7c'
            // }
        })
        // .then((response)=> {
        //     console.log(response.data.results);
        // })
        console.log(response.data.results);
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
               Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
            
        )
    }
}

export default App;