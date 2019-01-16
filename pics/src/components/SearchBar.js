import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form className="ui form">
         <div className="field">
         <label>Image Search</label>
          <input type="text" value={term} onChange={e => this.setState({ term: e.target.value})}/>
         </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;