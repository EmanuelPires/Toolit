import React from 'react';

const Summary = props => (
    <div className="container">
        <section class="about-sec mt-180 mt-sm-120  mb-30">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mdl-card mdl-shadow--2dp">
                        <div class="row">
                            <div class="col-md-5 col-xs-12 mb-30">
                                <div class="candidate-img mb-35"></div>
                                <ul class="social-icons">
                                    <li>
                                        <a class="facebook-link" href="www.facebook.com">
                                            <i id="tt1" class="zmdi zmdi-facebook"></i>
                                            <div class="mdl-tooltip" data-mdl-for="tt1">
                                                facebook
															</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="twitter-link" href="www.twitter.com">
                                            <i id="tt2" class="zmdi zmdi-twitter"></i>
                                            <div class="mdl-tooltip" data-mdl-for="tt2">
                                                twitter
															</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="linkedin-link" href="www.linkedin.com">
                                            <i id="tt3" class="zmdi zmdi-linkedin"></i>
                                            <div class="mdl-tooltip" data-mdl-for="tt3">
                                                linkedin
															</div>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="instagram-link" href="www.instagram.com">
                                            <i id="tt5" class="zmdi zmdi-instagram"></i>
                                            <div class="mdl-tooltip" data-mdl-for="tt5">
                                                instagram
															</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-7 col-xs-12">
                                <div class="info-wrap">
                                    <h1>Anthony Lawson</h1>
                                    <h5 class="mt-20 font-grey">HandyMan</h5>

                                </div>
                                <ul class="profile-wrap mt-50">

                                    <li>
                                        <div class="profile-title">address</div>
                                        <div class="profile-desc">
                                            155 Fleet Street National Harbor, MD 20745
														</div>
                                    </li>
                                    <li>
                                        <div class="profile-title">email</div>
                                        <div class="profile-desc">
                                            anthony.lawson@mrtechnocrat.com
														</div>
                                    </li>
                                    <li>
                                        <div class="profile-title">phone</div>
                                        <div class="profile-desc">
                                            +1 202-246-3863
														</div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Summary;