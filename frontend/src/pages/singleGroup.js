import React from 'react';
import Navbar from '../components/navbar';
import Rightbar from '../components/rightbar';
import Sidebar from '../components/sidebar';
import Nav from '../components/nav';

const SingleGroup = () => {
   
    return (
      <div>
        <div className="theme-layout">
        
         <Navbar/>
          <section>
            <div className="feature-photo">
              <figure><img src="images/resources/timeline-4.jpg" alt="" /></figure>
              <div className="add-btn">
                <span>1.3k followers</span>
                <a href="#" title data-ripple>Add button</a>
              </div>
              <form className="edit-phto">
                <i className="fa fa-camera-retro" />
                <label className="fileContainer">
                  Edit Cover Photo
                  <input type="file" />
                </label>
              </form>
              <div className="container-fluid">
                <div className="row merged">
                  <div className="col-lg-2 col-sm-3">
                    <div className="user-avatar">
                      <figure>
                        <img src="images/resources/user-avatar2.jpg" alt="" />
                        <form className="edit-phto">
                          <i className="fa fa-camera-retro" />
                          <label className="fileContainer">
                            Edit Display Photo
                            <input type="file" />
                          </label>
                        </form>
                      </figure>
                    </div>
                  </div>
                  <div className="col-lg-10 col-sm-9">
                    <div className="timeline-info">
                      <ul>
                        <li className="admin-name">
                          <h5>Amazon Shop</h5>
                          <span>@amazonshop</span>
                        </li>
                        <li>
                          <a className="active" href="fav-page.html" title data-ripple>Page</a>
                          <a className href="notifications.html" title data-ripple>Notifications</a>
                          <a className href="inbox.html" title data-ripple>inbox</a>
                          <a className href="insights.html" title data-ripple>insights</a>
                          <a className href="fav-page.html" title data-ripple>posts</a>
                          <a className href="page-likers.html" title data-ripple>likers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="gap gray-bg">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row" id="page-contents">
                     <Sidebar/>
                      <div className="col-lg-6">
                        <div className="central-meta">
                          <div className="new-postbox">
                            <figure>
                              <img src="images/resources/admin3.jpg" alt="" />
                            </figure>
                            <div className="newpst-input">
                              <form method="post">
                                <textarea rows={3} placeholder="write something" defaultValue={""} />
                                <div className="attachments">
                                  <ul>
                                    <li>
                                      <i className="fa fa-music" />
                                      <label className="fileContainer">
                                        <input type="file" />
                                      </label>
                                    </li>
                                    <li>
                                      <i className="fa fa-image" />
                                      <label className="fileContainer">
                                        <input type="file" />
                                      </label>
                                    </li>
                                    <li>
                                      <i className="fa fa-video-camera" />
                                      <label className="fileContainer">
                                        <input type="file" />
                                      </label>
                                    </li>
                                    <li>
                                      <i className="fa fa-camera" />
                                      <label className="fileContainer">
                                        <input type="file" />
                                      </label>
                                    </li>
                                    <li>
                                      <button type="submit">Publish</button>
                                    </li>
                                  </ul>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>{/* add post new box */}
                        <div className="loadMore">
                          <div className="central-meta item">
                            <div className="user-post">
                              <div className="friend-info">
                                <figure>
                                  <img src="images/resources/friend-avatar11.jpg" alt="" />
                                </figure>
                                <div className="friend-name">
                                  <ins><a href="time-line.html" title>Natti Natasha</a></ins>
                                  <span>published: june,2 2018 19:PM</span>
                                </div>
                                <div className="post-meta">
                                  <img src="images/resources/user-post6.jpg" alt="" />
                                  <div className="we-video-info">
                                    <ul>
                                      <li>
                                        <span className="views" data-toggle="tooltip" title="views">
                                          <i className="fa fa-eye" />
                                          <ins>1.2k</ins>
                                        </span>
                                      </li>
                                      <li>
                                        <span className="comment" data-toggle="tooltip" title="Comments">
                                          <i className="fa fa-comments-o" />
                                          <ins>52</ins>
                                        </span>
                                      </li>
                                      <li>
                                        <span className="like" data-toggle="tooltip" title="like">
                                          <i className="ti-heart" />
                                          <ins>2.2k</ins>
                                        </span>
                                      </li>
                                      <li>
                                        <span className="dislike" data-toggle="tooltip" title="dislike">
                                          <i className="ti-heart-broken" />
                                          <ins>200</ins>
                                        </span>
                                      </li>
                                      <li className="social-media">
                                        <div className="menu">
                                          <div className="btn trigger"><i className="fa fa-share-alt" /></div>
                                          <div className="rotater">
                                            <div className="btn btn-icon"><a href="#" title><i className="fa fa-html5" /></a></div>
                                          </div>
                                          <div className="rotater">
                                            <div className="btn btn-icon"><a href="#" title><i className="fa fa-facebook" /></a></div>
                                          </div>
                                          <div className="rotater">
                                            <div className="btn btn-icon"><a href="#" title><i className="fa fa-google-plus" /></a></div>
                                          </div>
                                          <div className="rotater">
                                            <div className="btn btn-icon"><a href="#" title><i className="fa fa-twitter" /></a></div>
                                          </div>
                                          <div className="rotater">
                                            <div className="btn btn-icon"><a href="#" title><i className="fa fa-css3" /></a></div>
                                          </div>
                                          <div className="rotater">
                                            <div className="btn btn-icon"><a href="#" title><i className="fa fa-instagram" /></a>
                                            </div>
                                          </div>
                                          <div className="rotater">
                                            <div className="btn btn-icon"><a href="#" title><i className="fa fa-dribbble" /></a>
                                            </div>
                                          </div>
                                          <div className="rotater">
                                            <div className="btn btn-icon"><a href="#" title><i className="fa fa-pinterest" /></a>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="description">
                                    <span>beautiful lamp on discount 50%</span>
                                    <p>
                                      Amazon <a href="#" title>#amazonee</a> the most beatuiful lamp available in america and the saudia arabia, you can purchase for the home and shop for increase the room beauty
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="coment-area">
                                <ul className="we-comet">
                                  <li>
                                    <div className="comet-avatar">
                                      <img src="images/resources/comet-1.jpg" alt="" />
                                    </div>
                                    <div className="we-comment">
                                      <div className="coment-head">
                                        <h5><a href="time-line.html" title>Donald Trump</a></h5>
                                        <span>1 week ago</span>
                                        <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
                                      </div>
                                      <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                        <i className="em em-smiley" />
                                      </p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="comet-avatar">
                                      <img src="images/resources/comet-3.jpg" alt="" />
                                    </div>
                                    <div className="we-comment">
                                      <div className="coment-head">
                                        <h5><a href="time-line.html" title>Jason borne</a></h5>
                                        <span>1 year ago</span>
                                        <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
                                      </div>
                                      <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                    </div>
                                    <ul>
                                      <li>
                                        <div className="comet-avatar">
                                          <img src="images/resources/comet-2.jpg" alt="" />
                                        </div>
                                        <div className="we-comment">
                                          <div className="coment-head">
                                            <h5><a href="time-line.html" title>alexendra dadrio</a></h5>
                                            <span>1 month ago</span>
                                            <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
                                          </div>
                                          <p>yes, really very awesome car i see the features of this car in the official website of <a href="#" title>#Mercedes-Benz</a> and really impressed :-)</p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="comet-avatar">
                                          <img src="images/resources/comet-3.jpg" alt="" />
                                        </div>
                                        <div className="we-comment">
                                          <div className="coment-head">
                                            <h5><a href="time-line.html" title>Olivia</a></h5>
                                            <span>16 days ago</span>
                                            <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply" /></a>
                                          </div>
                                          <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#" title className="showmore underline">more comments</a>
                                  </li>
                                  <li className="post-comment">
                                    <div className="comet-avatar">
                                      <img src="images/resources/comet-4.jpg" alt="" />
                                    </div>
                                    <div className="post-comt-box">
                                      <form method="post">
                                        <textarea placeholder="Post your comment" defaultValue={""} />
                                        <div className="add-smiles">
                                          <span className="em em-expressionless" title="add icon" />
                                        </div>
                                        <div className="smiles-bunch">
                                          <i className="em em---1" />
                                          <i className="em em-smiley" />
                                          <i className="em em-anguished" />
                                          <i className="em em-laughing" />
                                          <i className="em em-angry" />
                                          <i className="em em-astonished" />
                                          <i className="em em-blush" />
                                          <i className="em em-disappointed" />
                                          <i className="em em-worried" />
                                          <i className="em em-kissing_heart" />
                                          <i className="em em-rage" />
                                          <i className="em em-stuck_out_tongue" />
                                        </div>
                                        <button type="submit" />
                                      </form>	
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                         
                          
                        </div>
                      </div>{/* centerl meta */}
                      <Rightbar/>
                    </div>	
                  </div>
                </div>
              </div>
            </div>	
          </section>
         
          <div className="bottombar">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                  <i><img src="images/credit-cards.png" alt="" /></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          </div>
    );
  
   
}

export default SingleGroup;