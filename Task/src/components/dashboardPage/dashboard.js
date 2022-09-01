import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCloudscale } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'; 
import Draggable from 'react-draggable';
import 'bootstrap/dist/css/bootstrap.css';
import './dashboard.css';

export function Dashboard(){
    return(
        <>
            <div className='container-fluid bg_container'>
                <div className='row'>
                    {/* vertical Nav start*/}
                    <div className='col-lg-1 v_nav_bg'>
                        <div className='row'>
                            <div className='col-lg-12 user_icon_container mb-2'>
                                <div className='row'>
                                    <div className='col-lg-6 user_icon_card'>
                                        <FontAwesomeIcon icon={faUser} className='user_icon w-100'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 other_icon_container'>
                                <div className='row'>
                                    <div className='col-lg-6 other_icon_card'>
                                        <FontAwesomeIcon icon={faCloudscale} className='other_icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 other_icon_container'>
                                <div className='row'>
                                    <div className='col-lg-6 other_icon_card'>
                                        <FontAwesomeIcon icon={faCloudscale} className='other_icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 other_icon_container'>
                                <div className='row'>
                                    <div className='col-lg-6 other_icon_card'>
                                        <FontAwesomeIcon icon={faCloudscale} className='other_icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 other_icon_container'>
                                <div className='row'>
                                    <div className='col-lg-6 other_icon_card'>
                                        <FontAwesomeIcon icon={faCloudscale} className='other_icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 other_icon_container'>
                                <div className='row'>
                                    <div className='col-lg-6 other_icon_card'>
                                        <FontAwesomeIcon icon={faCloudscale} className='other_icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-12 other_icon_container'>
                                <div className='row'>
                                    <div className='col-lg-6 other_icon_card'>
                                        <FontAwesomeIcon icon={faCloudscale} className='other_icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 other_icon_container'>
                                <div className='row'>
                                    <div className='col-lg-6 other_icon_card'>
                                        <FontAwesomeIcon icon={faCloudscale} className='other_icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12 other_icon_container'>
                                <div className='row'>
                                    <div className='col-lg-6 other_icon_card'>
                                        <FontAwesomeIcon icon={faCloudscale} className='other_icon'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*vertival Nav end*/}
                    <div className='col-lg-11'>
                        {/*Top Nav Start*/}
                        <div className='row'>
                            <div className='col-lg-12 page_top_nav_bg'>
                                <div className='row m-0'>
                                    <div className='col-lg-4'>
                                        <div className='row m-0'>
                                            <div className='top_nav_icon_card'>
                                                <FontAwesomeIcon icon={faUser} className='top_nav_icon w-100'/>
                                            </div>
                                            <div className='mt-2 ml-3'>
                                                <h5>iamneo.ai Talent Center</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-8'>
                                        <div className='row m-0'>
                                            <div className='col-lg-3 w-100 p-0 ml-auto'>
                                                <input className="search_box_card w-100" type="text" placeholder="Search"/>
                                                <FontAwesomeIcon icon={faMagnifyingGlass} className='search_icon'/>
                                            </div>
                                            <div className='col-lg-1'>
                                                <div className='profile_logo_card'>
                                                    <h2 className='logo_text'>S</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Top Nav end*/}

                        {/*Content card Start*/}
                        <div className='row'>
                        {/*Column 1 start*/}
                            <div className='col-lg-3 column_border'>
                                <Draggable>
                                <div className='row m-0'>
                                    <div className='col-lg-12 mb-4'>
                                        <div className='content_head_card content_head_card1_lborder'>
                                            <h6>Open - 11</h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 mb-3'>
                                        <div className='row m-0'>
                                        <Draggable>
                                            <div className='content_para_card'>
                                                <div className='content_para_card_content'>
                                                    <p><span>Amirdharshan A</span></p>
                                                    <p>Intellectyx Data science private limited</p>
                                                </div>
                                                <div className='content_para_card_bottom'>
                                                    <div className='row'>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </Draggable>
                                        </div>
                                    </div>
                                    <Draggable>
                                    <div className='col-lg-12'>
                                        <div className='row m-0'>
                                            <Draggable>
                                            <div className='content_para_card'>
                                                <div className='content_para_card_content'>
                                                    <p><span>Amirdharshan A</span></p>
                                                    <p>Intellectyx Data science private limited</p>
                                                </div>
                                                <div className='content_para_card_bottom'>
                                                    <div className='row'>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            </Draggable>
                                        </div>
                                    </div>
                                    </Draggable>
                                </div>
                                </Draggable>
                            </div>
                        {/*Column 1 end*/}

                        {/*Column 2 start*/}
                            <div className='col-lg-3 column_border'>
                                <Draggable>
                                <div className='row m-0'>
                                    <div className='col-lg-12 mb-4'>
                                        <div className='content_head_card content_head_card2_3_lborder'>
                                            <h6>Contacted - 6</h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='row m-0'>
                                            <Draggable>
                                            <div className='content_para_card'>
                                                <div className='content_para_card_content'>
                                                    <p><span>Amirdharshan A</span></p>
                                                    <p>Intellectyx Data science private limited</p>
                                                </div>
                                                <div className='content_para_card_bottom'>
                                                    <div className='row'>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            </Draggable>
                                        </div>
                                    </div>
                                </div>
                                </Draggable>
                            </div>
                        {/*Column 2 end*/}

                        {/*Column 3 start*/}
                            <div className='col-lg-3 column_border'>
                                <Draggable>
                                <div className='row m-0'>
                                    <div className='col-lg-12 mb-4'>
                                        <div className='content_head_card content_head_card2_3_lborder'>
                                            <h6>Written test - 24</h6>
                                        </div>
                                    </div>
                                    <Draggable>
                                    <div className='col-lg-12 mb-3'>
                                        <div className='row m-0'>
                                            <Draggable>
                                            <div className='content_para_card'>
                                                <div className='content_para_card_content'>
                                                    <p><span>Amirdharshan A</span></p>
                                                    <p>Intellectyx Data science private limited</p>
                                                </div>
                                                <div className='content_para_card_bottom'>
                                                    <div className='row'>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>   
                                                    </div>
                                                </div>
                                            </div>
                                            </Draggable>
                                        </div>
                                    </div>
                                    </Draggable>
                                    <Draggable>
                                    <div className='col-lg-12'>
                                        <div className='row m-0'>
                                            <Draggable>
                                            <div className='content_para_card'>
                                                <div className='content_para_card_content'>
                                                    <p><span>Amirdharshan A</span></p>
                                                    <p>Intellectyx Data science private limited</p>
                                                </div>
                                                <div className='content_para_card_bottom'>
                                                    <div className='row'>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            </Draggable>
                                        </div>
                                    </div>
                                    </Draggable>
                                </div>
                                </Draggable>
                            </div>
                    {/*Column 3 end*/}

                    {/*Column 4 start*/}
                            <div className='col-lg-3 column_border'>
                            <Draggable>
                                <div className='row m-0'>
                                    <div className='col-lg-12 mb-4'>
                                        <div className='content_head_card content_head_card4_lborder'>
                                            <h6>Technical round - 3</h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='row m-0'>
                                            <Draggable>
                                            <div className='content_para_card'>
                                                <div className='content_para_card_content'>
                                                    <p><span>Amirdharshan A</span></p>
                                                    <p>Intellectyx Data science private limited</p>
                                                </div>
                                                <div className='content_para_card_bottom'>
                                                    <div className='row'>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>
                                                        <FontAwesomeIcon icon={faStar}/>   
                                                    </div>
                                                </div>
                                            </div>
                                            </Draggable>
                                        </div>
                                    </div>
                                </div>
                                </Draggable>
                            </div>
                    {/*Column 4 end*/}
                        </div>
                {/*Content card end*/}
                    </div>
                </div>
            </div> 
        </>
    );
}
{/* <FontAwesomeIcon icon={faUser} className='icon_style'/> */}
{/* <FontAwesomeIcon icon={faCloudscale} className='other_icon'/> */}