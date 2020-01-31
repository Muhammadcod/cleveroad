import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    parsedUsers: "",
    open: false
  };

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };

  componentDidMount() {
    // Make a request for a user with a given ID
    axios
      .get("https://api.github.com/users?per_page=6")
      .then(resp => {
        // handle success
        this.setState({ users: resp.data });

        this.setState({
          parsedUsers: resp.data.map(v => {
            return (
              <div
                className="col border align-items-center align-content-center profile"
                key={v.id}
              >
                <div className="d-flex justify-content-between">
                  <img
                    src={v.avatar_url}
                    alt="FG"
                    className="font-weight-bold mr-2 round text-center"
                    style={{
                      fontSize: "1.5em",
                      width: "60px"
                    }}
                  />
                  <i className="fas fa-ellipsis-h small"></i>
                </div>

                <div className="user-name">
                  <strong className="font-weight-bold">{v.login}</strong>
                  <br />
                  <span className="text-muted small">fdtfy</span>
                </div>

                <div className="small details">
                  <div className="col d-inline border">Full Item</div>
                  <div className="col d-inline border">Sketch</div>
                  <div className="col d-inline border">IOS</div>
                  <div className="w-100"></div>
                  <div className="col d-inline border">Senior</div>
                  <div className="col d-inline border">Figma</div>
                </div>

                <div>
                  <button type="button" className="btn mr-2 text-white">
                    Connect
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    style={{
                      color: "#3143ff"
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            );
          })
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Braxston">
        <div className="container-fluid">
          <section className="row">
            <div className="col-md-3 sideBar">
              <h4>Filter</h4>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div
                    className="card-header panel-heading bg-white padding"
                    id="headingOne"
                  >
                    <span class="d-inline-block py-1">Profession</span>
                    <div
                      className="btn float-right accordion-toggle py-1 px-2"
                      type=""
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    ></div>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Java
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Designer
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          QA
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          PHP
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          IOS/macOS
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          C++
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Project Manager
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          DevOps
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Front End Developer
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div
                    className="card-header panel-heading bg-white"
                    id="headingTwo"
                  >
                    <span className="d-inline-block py-1">Platform</span>
                    <div
                      class="btn collapsed float-right px-2 py-1 accordion-toggle"
                      type=""
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    ></div>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Sketch
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Figma
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Illustrator
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Photoshop
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          After Effect
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Framer
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header panel-heading" id="headingThree">
                    <span class="d-inline-block py-2">Profession</span>
                    <div
                      class="btn collapsed float-right px-2 accordion-toggle"
                      type=""
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    ></div>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <li className="checkbox form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label class="form-check-label" for="defaultCheck1">
                          Java
                        </label>
                        <span className="badge badge-light float-right border">
                          28
                        </span>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header panel-heading" id="headingFour">
                    <span class="d-inline-block py-1">Profession</span>
                    <div
                      class="btn collapsed float-right px-2 py-1 accordion-toggle"
                      type=""
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    ></div>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header panel-heading" id="headingFive">
                    <span class="d-inline-block py-1">Profession</span>

                    <div
                      class="btn collapsed float-right px-2 py-1 accordion-toggle"
                      type=""
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    ></div>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <nav className="navbar navbar-expand-lg leftBottom">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Jobs <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Network
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Company
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="d-flex align-items-center align-content-center">
                  <div
                    className="align-middle text-center"
                    style={{
                      backgroundColor: "rgb(174, 171, 200, 0.5)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px"
                    }}
                  >
                    <i className="fas fa-search align-self-lg-center icons" />
                  </div>

                  <img
                    src=""
                    alt="FG"
                    className="font-weight-bold mr-2 rounded-circle text-center"
                    style={{
                      fontSize: "1.5em",
                      width: "55px"
                    }}
                  />

                  <div className="user">
                    <span className="small">fdtfy</span>
                    <br />
                    <strong className="font-weight-bold">Save</strong>
                  </div>
                </div>
              </nav>

              <section className="d-flex staff">
                <div className="col d-flex align-items-center align-content-center">
                  <div className="align-middle text-center iconsWrap">
                    <i className="far fa-bookmark align-self-lg-center icons" />
                  </div>

                  <div className="user">
                    <span className="small">fdtfy</span>
                    <br />
                    <strong className="font-weight-bold">Saved</strong>
                  </div>
                </div>
                <div className="col d-flex align-items-center align-content-center">
                  <div className="align-middle text-center iconsWrap">
                    <i className="fas fa-award align-self-lg-center icons" />
                  </div>

                  <div className="user">
                    <span className="small">fdtfy</span>
                    <br />
                    <strong className="font-weight-bold">Recommended</strong>
                  </div>
                </div>
                <div className="col d-flex align-items-center align-content-center">
                  <div className="align-middle text-center iconsWrap">
                    <i className="fas fa-location-arrow align-self-lg-center icons" />
                  </div>

                  <div className="user">
                    <span className="small">fdtfy</span>
                    <br />
                    <strong className="font-weight-bold">Remote</strong>
                  </div>
                </div>
                <div className="col d-flex align-items-center align-content-center">
                  <div className="align-middle text-center iconsWrap">
                    <i className="fas fa-sync align-self-lg-center icons" />
                  </div>

                  <div className="user">
                    <span className="small">fdtfy</span>
                    <br />
                    <strong className="font-weight-bold">Outstaff</strong>
                  </div>
                </div>
              </section>
              <div className="font-weight-bold border tip ">Recommended</div>

              <section className="d-flex flex-lg-wrap" id="profile">
                {this.state.parsedUsers}
              </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
