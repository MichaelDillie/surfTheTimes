import React from "react";

class Search extends React.Component {

  state = {
    topic: "",
    startYear: "",
    endYear: ""
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmission = event => {
    event.preventDefault();
    if(this.state.topic && this.state.startYear && this.state.endYear) {
      console.log("ALL INPUTS FILLED OUT");
    } else {
      console.log("NOT ALL INPUTS FILLED");
    }
  }

  render() {
    return(
      <div className="search-wrapper">
        <h2>Search Area</h2>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupTopic">Topic (Required)</label>
            <input 
              value={this.state.topic}
              onChange={this.handleOnChange}
              name="topic"
              type="text" 
              className="form-control" 
              id="formGroupTopic" 
              placeholder="Flat Earth" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupStartYear">Start Year (Required)</label>
            <input 
              value={this.state.startYear}
              onChange={this.handleOnChange}
              name="startYear"
              type="text" 
              className="form-control" 
              id="formGroupStartYear" 
              placeholder="2016" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupEndYear">End Year (Required)</label>
            <input 
              value={this.state.endYear}
              onChange={this.handleOnChange}
              name="endYear"
              type="text" 
              className="form-control" 
              id="formGroupEndYear" 
              placeholder="2017" 
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmission}>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;