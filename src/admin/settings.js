import React from 'react'
import Headertwo from './Header2'
import Footer from '../components/Footer'

function Settings() {
  return (
   <>
   <Headertwo />
   <div className="container">
<div className="row flex-lg-nowrap mt-3">

  <div className="col">
    <div className="row">
      <div className="col mb-3">
        <div className="card">
          <div className="card-body">
            <div className="e-profile">
              <div className="row">
                <div className="col-12 col-sm-auto mb-3">
                  <div className="mx-auto" style={{width: '140px'}}>
                    <div className="d-flex justify-content-center align-items-center rounded" style={{height: '140px', backgroundColor: 'rgb(233, 236, 239)'}}>
                      <span style={{color: 'rgb(166, 168, 170)', font: 'bold 8pt Arial'}}>140x140</span>
                    </div>
                  </div>
                </div>
                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div className="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                    <p className="mb-0">@johnny.s</p>
                    <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                    <div className="mt-2">
                      <button className="btn btn-primary" type="button">
                        <i className="fa fa-fw fa-camera"></i>
                        <span>Change Photo</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-center text-sm-right">
                    <span className="badge badge-secondary">administrator</span>
                    <div className="text-muted"><small>Joined 09 Dec 2017</small></div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-tabs">
                <li className="nav-item"><a href="" className="active nav-link">Settings</a></li>
              </ul>
              <div className="tab-content pt-3">
                <div className="tab-pane active">
                  <form className="form" novalidate="">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Full Name</label>
                              <input className="form-control" type="text" name="name" placeholder="John Smith" value="John Smith" />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>Username</label>
                              <input className="form-control" type="text" name="username" placeholder="johnny.s" value="johnny.s" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Email</label>
                              <input className="form-control" type="text" placeholder="user@example.com" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mb-3">
                            <div className="form-group">
                              <label>About</label>
                              <textarea className="form-control" rows="5" placeholder="My Bio"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">Save Changes</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mb-3">
        <div className="card mb-3">
          <div className="card-body">
            <div className="px-xl-3">
              <button className="btn btn-block btn-secondary">
                <i className="fa fa-sign-out"></i>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="card-title font-weight-bold">Support</h6>
            <p className="card-text">Get fast, free help from our friendly assistants.</p>
            <button type="button" className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</div>
<Footer />
   </>
  )
}

export default Settings
