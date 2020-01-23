import React from "react";
import "./MemeStyle.css";

// class based component, they are all the same but with fewer usability
class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      topText: "",
      botText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault(); // use to not let the page refresh
    this.setState({ isLoading: true });
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randImage = this.state.allMemeImgs[randomNum].url;
    this.setState({
      isLoading: false,
      randomImg: randImage
    });
  }

  render() {
    return (
      // <div>
      //   <form style={{ marginLeft: 10 }} onSubmit={this.handleClick}>
      //     <input
      //       type="text"
      //       placeholder="topText"
      //       name="topText"
      //       value={this.state.topText}
      //       onChange={this.handleChange}
      //     />
      //     <br />
      //     <input
      //       type="text"
      //       placeholder="botText"
      //       name="botText"
      //       value={this.state.botText}
      //       onChange={this.handleChange}
      //     />
      //     <button>Gen</button>
      //     <hr />
      //   </form>
      //   {this.state.isLoading ? (
      //     <h2>Loading...</h2>
      //   ) : (
      //     <div>
      //       <img src={this.state.randomImg} alt="" />
      //       <h2>{this.state.topText}</h2>
      //       <h2>{this.state.botText}</h2>
      //     </div>
      //   )}
      // </div>

      <div class="main">
        <div class="container">
          <div class="row">
            
            <div class="col-md-5">
              <div class="meme thumbnail">
                <img
                  src={this.state.randomImg}
                  alt=""
                />
                <h1 class="top-caption">{this.state.topText}</h1>
                <h1 class="bottom-caption">{this.state.botText}</h1>
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <div class="tool">
                <h2>Create a meme</h2>
                <form onSubmit={this.handleClick}>
                  <div class="form-group">
                    <label>Top text</label>
                    <input
                      id="top-text"
                      type="text"
                      class="form-control"
                      placeholder="topText"
                      name="topText"
                      value={this.state.topText}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div class="form-group">
                    <label>Bottom text</label>
                    <input
                      id="bottom-text"
                      type="text"
                      class="form-control"
                      placeholder="botText"
                      name="botText"
                      value={this.state.botText}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button>Change Image</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
