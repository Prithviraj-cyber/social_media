import Head from 'next/head'
import Image from 'next/image'
import React, {useState, useEffect} from 'react';
import styles from '../../styles/Chat.module.css'
import styles2 from '../../styles/Answers.module.css'
import axios from 'axios';

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
import Button from 'react-bootstrap/Button';

// owlcarousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};


// accordian
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );
  
    return (
        <button className={styles2.reply_btn2} onClick={decoratedOnClick}>
            {children}
        </button>
    );
}




export default function Answers2() {

     // add answer reply
     const [reply, setReply] = useState('');
     const [answers, setAnswers] = useState('');
     const [data, setData] = useState([]);
     const [id, setId] = useState('');

    // linke count
    const [likes, setLikes] = React.useState(0);
    const [answer,setAnswer] = useState("")
    function handleClick() {
        setLikes(likes + 1);
    }
    // linke count end

    // read more 
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
            commodi officia aliquam! Maxime.
        </p>
    </div>
    const linkName=readMore?'Read Less <<':'Read More >>'


    
    // add answer reply

    const handleSubmitReply = async (e) => {
        e.preventDefault();
        const url = 'https://63089b2046372013f581b61d.mockapi.io/User/1/Answer/1/Reply';
        try{
            const resp = await axios.post(url, {Replydes: reply});
            if(resp.status == 201){
                setReply("");
            }
        }
        catch(error){
            console.log(error.response);
        }
    };

    // answer add

    const handleSubmitAnswer = async (e) => {
        e.preventDefault();
        const url2 = 'https://63089b2046372013f581b61d.mockapi.io/User/1/Answer';
        try{
            const resp = await axios.post(url2, {Answerdes: answers});
            if(resp.status == 201){
                setAnswers("");
                setId()
            }
        }
        catch(error){
            console.log(error.response);
        }
    };

    // display answers
    useEffect(() => {
        async function getData() {
        await axios
            .get("https://63089b2046372013f581b61d.mockapi.io/User/1/Answer/1/Reply")
            .then((res) => setData(res.data));
        }
        getData();
    }, []);

    console.log(data);


    // delete data
     const deleteRow = async (id,e) => {  
        await axios.delete(`https://63089b2046372013f581b61d.mockapi.io/User/1/Answer/1/Reply/${id}`)  
          .then(res => {  
            let newData = data.filter(element=>element.id != id);
            setData(newData)
          })  
        
      }

      //   data update
    function editRow(id, e){
        let element = data[id-1];
        console.log(id)
        setReply(reply)
        setId(id);
    }

    const handleUpdate = async (id, e) => {
        e.preventDefault();
        const url = `https://63089b2046372013f581b61d.mockapi.io/User/1/Answer/1/Reply/${id}`;
        try{
            const resp = await axios.put(url, {Replydes: reply});
        }
        catch(error){
            console.log(error.response);
        }
    };



    return (
        
        
            <div className={styles2.answers}>
                <Container>
                    <Row>
                        <Col md={9} sm={12} xs={12}>
                            <div className={styles2.answers_left}>
                                <div className={styles2.up}>
                                    <p>Baleno (2015-2022)</p>
                                    <p>Safety</p>
                                </div>
                                <div className={styles.tab_box}>
                                    <h3>Q. How safe is Baleno Zeta on highways ?</h3>
                                    <p className={styles.follow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                                            2.1K Views 
                                        <span>|</span> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chat-left-text-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/></svg>
                                             Add Answer
                                    </p>
                                </div>
                              
                                <div className={styles2.answers_box}>
                                    <p>7 Answers</p>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <Image src="/aa.png" width={100} height={100} alt='img20'/> 
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h5><span>Anand </span> | 1 month ago</h5>
                                                <h6>Are you mad bro if you were riding bullet with 1 or 2 guy.. being leg not touches the ground you are gonna suffer too much... If there will be some holes like dig on the road.. You are gone.. 5.8 is enough
                                                Are you mad bro if you were riding bullet with 1 or 2 guy.. being leg not touches 
                                                the ground you are gonna suffer too much... If there will be some holes like dig on 
                                                the road.. You are gone.. 5.8 is enough.. {readMore && extraContent} <a onClick={()=>{setReadMore(!readMore)}} href="#">{linkName}</a>
                                               </h6>
                                                <div className={styles.reply}>
                                                    <Accordion defaultActiveKey="0">
                                                        <p><Button className={styles2.like_btn} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg></Button>
                                                        {likes} <span> | </span>
                                                        <CustomToggle className={styles2.reply_btn} eventKey="1">Reply</CustomToggle></p>
                                                        <Accordion.Collapse className={styles2.accordion} eventKey="1">
                                                            <div className={styles2.reply_form}>
                                                                <Form>
                                                                    <Form.Group className={styles2.reply_box} controlId="exampleForm.ControlTextarea1">
                                                                        <Form.Control type="text" className={styles2.reply_box_form} as="textarea" value={reply} onChange={(e) => setReply(e.target.value)} rows={3} placeholder="Add your Reply" />
                                                                    </Form.Group>
                                                                    <div className={styles2.reply_btn_box}>
                                                                        <Button className={styles2.reply_btn} variant="primary">Cancle</Button>
                                                                        <Button className={styles2.reply_btn} variant="primary" onClick={handleSubmitReply}>Submit</Button>
                                                                    </div>
                                                                </Form>
                                                            </div>
                                                        </Accordion.Collapse>
                                                    </Accordion>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>


                                {data.length > 0 && data.map((element, index) => (
                                    <div className={styles2.answers_box2} key={index}>
                                        <Row>
                                            <Col sm={1} md={1} xs={2}>
                                                <div className={styles.ans_box}>
                                                    <Image src="/aa.png" width={100} height={100} alt='img21'/>
                                                </div>
                                            </Col>
                                            <Col sm={11} md={11} xs={10}>
                                                <div className={styles.ans_box}>
                                                    <h5><span>Anand4 </span> | 1 month ago</h5>
                                                    <h6>{element.Replydes}</h6>
                                                    <div className={styles.reply}>
                                                        <Accordion defaultActiveKey="0">
                                                            <p><Button className={styles2.like_btn} onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg></Button>
                                                            {likes} <span> | </span>
                                                            <CustomToggle className={styles2.reply_btn} eventKey="1"><Button className={styles.edit_btn} onClick={(e) => editRow(element.id, e)}>Edit</Button></CustomToggle></p>
                                                            <Accordion.Collapse className={styles2.accordion} eventKey="1">
                                                                <div className={styles2.reply_form}>
                                                                    <Form>
                                                                        <Form.Group className={styles2.reply_box} controlId="exampleForm.ControlTextarea1">
                                                                            <Form.Control type="text" className={styles2.reply_box_form} as="textarea" value={reply} onChange={(e) => setReply(e.target.value)} rows={3} placeholder="Add your Reply" />
                                                                        </Form.Group>
                                                                        <div className={styles2.reply_btn_box}>
                                                                            <Button className={styles2.reply_btn} variant="primary" onClick={(e) => handleUpdate(id, e)}>Submit</Button>
                                                                        </div>
                                                                    </Form>
                                                                </div>
                                                            </Accordion.Collapse>
                                                        </Accordion>
                                                        <p><Button className={styles.delete_btn} onClick={(e) => deleteRow(element.id, e)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg></Button></p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}


                                
                                <h5 className={styles2.view}>View More Answers <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></h5>
                                <div className={styles2.add_ans}>
                                    <h3><Image className={styles2.add_ans_img} src="/chat2.png" width={20} height={30} alt='img23' /> <span> Add your Answer</span></h3>
                                    <Form>
                                        <Form.Group className={styles2.add_ans_form} controlId="exampleForm.ControlTextarea1">
                                            <Form.Control className={styles2.add_ans_form2} as="textarea" rows={3} value={answers} onChange={(e) => setAnswers(e.target.value)} placeholder="Have something to say ..." />
                                        </Form.Group>
                                        <Button className={styles2.add_ans_btn} variant="primary" onClick={handleSubmitAnswer}>Submit Answer</Button>
                                    </Form>
                                </div>
                            </div> 
                            <div className={styles2.ans_left2}>
                                <h2>From The Community</h2>
                                <div className={styles2.left_owl}>
                                    <Carousel responsive={responsive}>
                                        <div className={styles2.owl_box}>
                                            <h3>Q. What is the difference between 2018 Petrol Baleno ...</h3>
                                            <div className={styles2.owl_flex}>
                                                <h4>H</h4>
                                                <p>Asked by Hanumant Thapa <br/><span>4 Answes</span></p>
                                            </div>
                                        </div>
                                        <div className={styles2.owl_box}>
                                            <h3>Q. What is the difference between 2018 Petrol Baleno ...</h3>
                                            <div className={styles2.owl_flex}>
                                                <h4>H</h4>
                                                <p>Asked by Hanumant Thapa <br/><span>4 Answes</span></p>
                                            </div>
                                        </div>
                                        <div className={styles2.owl_box}>
                                            <h3>Q. What is the difference between 2018 Petrol Baleno ...</h3>
                                            <div className={styles2.owl_flex}>
                                                <h4>H</h4>
                                                <p>Asked by Hanumant Thapa <br/><span>4 Answes</span></p>
                                            </div>
                                        </div>
                                        <div className={styles2.owl_box}>
                                            <h3>Q. What is the difference between 2018 Petrol Baleno ...</h3>
                                            <div className={styles2.owl_flex}>
                                                <h4>H</h4>
                                                <p>Asked by Hanumant Thapa <br/><span>4 Answes</span></p>
                                            </div>
                                        </div>
                                        <div className={styles2.owl_box}>
                                            <h3>Q. What is the difference between 2018 Petrol Baleno ...</h3>
                                            <div className={styles2.owl_flex}>
                                                <h4>H</h4>
                                                <p>Asked by Hanumant Thapa <br/><span>4 Answes</span></p>
                                            </div>
                                        </div>
                                        <div className={styles2.owl_box}>
                                            <h3>Q. What is the difference between 2018 Petrol Baleno ...</h3>
                                            <div className={styles2.owl_flex}>
                                                <h4>H</h4>
                                                <p>Asked by Hanumant Thapa <br/><span>4 Answes</span></p>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </div> 
                            <div className={styles2.community}>
                                <h3>Community Discussions</h3>
                            </div>
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                            <div className={styles2.answers_right}>
                                <div className={styles2.trending}>
                                    <h3>Trending Maruti Suzuki Cars</h3>
                                    <h3><a href="#">View All</a></h3>
                                </div>
                                <div className={styles2.trending_box}>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <Image src="/breeza.png" width={100} height={70} alt='img24' />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4> Brezza</h4>
                                                    <p>Rs. 7.99 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <Image src="/swift.png" width={100} height={70} alt='img25' />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Swift</h4>
                                                    <p>Rs. 5.91 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <Image src="/alto.png"  width={100} height={70} alt='img26' />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Alto K10</h4>
                                                    <p>Rs. 3.99 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <Image src="/baleno.png"  width={100} height={70} alt='img27' />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Baleno</h4>
                                                    <p>Rs. 6.49 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <Image src="/eritga.png"  width={100} height={70} alt='img28' />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Ertiga</h4>
                                                    <p>Rs. 8.35 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <Image src="/alto.png"  width={100} height={70} alt='img29' />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Alto K10</h4>
                                                    <p>Rs. 3.99 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <Image src="/baleno.png"  width={100} height={70} alt='img30' />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Baleno</h4>
                                                    <p>Rs. 6.49 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <Image src="/alto.png"  width={100} height={70} alt='img31'/>
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Alto K10</h4>
                                                    <p>Rs. 3.99 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


    )
}