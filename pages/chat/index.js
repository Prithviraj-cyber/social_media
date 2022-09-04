import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Chat.module.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// tab
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';

// form
import Form from 'react-bootstrap/Form';


export default function Chat() {

   
    return (
        

        <div className={styles.chat_container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Container>
                <Row>
                    <Col md={3} sm={12} lg={3}>
                        <div className={styles.chat}>
                            <div className={styles.chat_box}>
                                <Row>
                                    <Col md={4} sm={4} xs={4}>
                                        <div className={styles.chat_img}>
                                            <Image src="/aa.png" width={100} height={100} alt='img2'/>
                                        </div>
                                    </Col>
                                    <Col md={8} sm={8} xs={8}>
                                        <div className={styles.chat_name}>
                                            <h3>Anand 2308</h3>
                                            <p>Get access to exclusive information and interect with fellow auto lovers.</p>
                                            <h4><Image src="/medal.png" width={12} height={12} alt='img3'/> <span> Newbie</span></h4>
                                            <div className={styles.edit}>
                                                <p>Joined in Jul 2022</p>
                                                <p><a href="#">Edit</a></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.chat_box2}>
                                <div className={styles.add}>
                                    <p><span>My Garage</span></p>
                                    <p><a href="#">Add/Edit</a></p>
                                </div>
                                <p className={styles.maruti}><span>&#9679;</span> Maruti Suzuki Swift 2014-2021</p>
                                <Row>
                                    <Col md={4} sm={4} xs={4}>
                                        <div className={styles.chat_img2}>
                                            <Image src="/chat.png" width={100} height={100} alt='img1'/>
                                        </div>
                                    </Col>
                                    <Col md={8} sm={8} xs={8}>
                                        <div className={styles.chat_name}>
                                            <p>Help fellow auto lovers by review and answering questions & become a Zigwheels Legend</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className={styles.extra_page}>
                            <a href='chat/answers'>Answer Page</a>
                            <a href='chat/answers2'>Answer Page 2</a>
                        </div>
                    </Col>
                    <Col md={9} sm={12} lg={9}>
                        <div className={styles.chat2}>
                            <h1>My Activity</h1>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant="pills" className={styles.tab_nav}>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="first">25+<br/><span>Questions For You</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="second">3<br/><span>Answers</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="third">0<br/><span>Questions Asked</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="four"> 1<br/><span>Questions Followed</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="five">0<br/><span>Your Reviews</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.tab_item}>
                                        <Nav.Link className={styles.tab_link} eventKey="six">0<br/><span>Shortlist</span></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className={styles.tab_content}>
                                    <Tab.Pane className={styles.tab_pane} eventKey="first">
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                                <p className={styles.cancle_btn} >&#x2715;</p>
                                            </div>
                                            <h3>Q. This car CNG variant or not - Swift ?</h3>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <h5>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                        </div>
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                                <p className={styles.cancle_btn}>&#x2715;</p>
                                            </div>
                                            <h3>Q. This car CNG variant or not - Swift ?</h3>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <h5>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>

                                        </div>
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                                <p className={styles.cancle_btn}>&#x2715;</p>
                                            </div>
                                            <h3>Q. This car CNG variant or not - Swift ?</h3>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <h5>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>

                                        </div>
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Lovkush </span> asked about  Maruti Suzuki Swift 2014-2021</p>
                                                <p className={styles.cancle_btn}>&#x2715;</p>
                                            </div>
                                            <h3>Q. This car CNG variant or not - Swift ?</h3>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <h5>View 4 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>

                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="second"> 
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Prabhat </span> asked about  Royal Enfield Classic 350 (2012-2021)</p>
                                            </div>
                                            <h3>Q. Whats the Minimum height of a person required to drive a classic 350 ?</h3>
                                            <p className={styles.follow}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/></svg>
                                                 Follow Question 
                                                  <span>|</span> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chat-left-text-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/></svg>
                                                 Add Answer
                                            </p>
                                            <div className={styles.answers}>
                                                <Row>
                                                    <Col sm={1} md={1} xs={2}>
                                                        <div className={styles.ans_box}>
                                                            <Image src="/aa.png" width={100} height={100} alt='img4' />
                                                        </div>
                                                    </Col>
                                                    <Col sm={11} md={11} xs={10}>
                                                        <div className={styles.ans_box}>
                                                            <h5><span>Anand </span> | 1 month ago</h5>
                                                            <div className={styles.trapezoid}></div>
                                                            <div className={styles.ans_details}>
                                                                <p><span>@ Jatav </span> | Are you mad bro if you were riding bullet with 1 or 2 guy.. being leg not touches the ground you are gonna suffer too much... If there will be some holes like dig on the road.. You are gone.. 5.8 is enough.. Read More</p>
                                                                <h6>Hi</h6>
                                                            </div>
                                                            <div className={styles.reply}>
                                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <h5>View 3 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                        </div>
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Prabhat </span> asked about  Royal Enfield Classic 350 (2012-2021)</p>
                                            </div>
                                            <h3>Q. Whats the Minimum height of a person required to drive a classic 350 ?</h3>
                                            <p className={styles.follow}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/></svg>
                                                 Follow Question 
                                                  <span>|</span> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chat-left-text-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/></svg>
                                                 Add Answer
                                            </p>
                                            <div className={styles.answers}>
                                                <Row>
                                                    <Col sm={1} md={1} xs={2}>
                                                        <div className={styles.ans_box}>
                                                            <Image src="/aa.png" width={100} height={100} alt='img5' />
                                                        </div>
                                                    </Col>
                                                    <Col sm={11} md={11} xs={10}>
                                                        <div className={styles.ans_box}>
                                                            <h5><span>Anand </span> | 1 month ago</h5>
                                                            <div className={styles.trapezoid}></div>
                                                            <div className={styles.ans_details}>
                                                                <p><span>@ Jatav </span> | Are you mad bro if you were riding bullet with 1 or 2 guy.. being leg not touches the ground you are gonna suffer too much... If there will be some holes like dig on the road.. You are gone.. 5.8 is enough.. Read More</p>
                                                                <h6>Hi</h6>
                                                            </div>
                                                            <div className={styles.reply}>
                                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <h5>View 3 More Answers <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="third">
                                        <h1>Ram3</h1>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="four">
                                        <div className={styles.tab_box}>
                                            <div className={styles.cancle}>
                                                <p><span>Plabon </span> asked about  Hyundai Venue 2019-2022</p>
                                            </div>
                                            <h3>Q. Should I go for Hyundai Venue S 1.2 L variant or ford Freestyle Titanium, as both comes in near about similar price range ? Will I miss out too much in the Venue S variant ?</h3>
                                            <p className={styles.follow}>
                                                <svg style={{color: "#0040ff"}} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/></svg>
                                                 Unfollow Question 
                                                  <span>|</span> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chat-left-text-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/></svg>
                                                 Add Answer
                                            </p>
                                            <Form className={styles.form}>
                                                <Form.Group className={styles.form_boxes} controlId="formBasicEmail">
                                                    <Form.Control className={styles.form_box} type="text" placeholder="Add your answer" />
                                                </Form.Group> 
                                            </Form>
                                            <br/>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="five">
                                        <h1>Ram5</h1>
                                    </Tab.Pane>
                                    <Tab.Pane className={styles.tab_pane} eventKey="six">
                                        <h1>Ram6</h1>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
        

    )

}