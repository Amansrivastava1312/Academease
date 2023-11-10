import React ,{useState} from 'react';
import "./Accordian.css";

const dataCollection=[{
    question:'what is  your  name?',
    answer:'my  name  is  vinod1'
},
{
    question:'what is  your  name?',
    answer:'my  name  is  vinod2'
},
{
    question:'what is  your  name?',
    answer:'my  name  is  vinod3'
},
{
    question:'what is  your  name?',
    answer:'my  name  is  vinod4'
}
];

function Accordion(){
    const [accordion,setActiveAccordion]=useState(-1);
    function toggleAccordion(index){
        if(index===accordion){
            setActiveAccordion(-1);
            return
        }
        setActiveAccordion(index);
    }
    return(
        <>
<div className="container">
    <div>
        <span className="accordion__title">Frequently Asked  question</span>
        <h1>lets  answer  some  of  your  question</h1>
    </div>
    <div className="accordion__faq">
        {dataCollection.map((item,index)=>(
            <div key={index} onClick={()=> toggleAccordion(index)} >
            <div className="Accordion__faq-heading">
            <h3 className={accordion===index ? "active":""}>
                {item.question}
            </h3>
            </div>
            <div>{
                accordion===index ?(

               
                <>
                    {" "}
                    <span className='verticle'>-</span>
                </>
            ):(
                <>
                    {" "}
                    <span className='verticle'>+</span>
                </>
            )}
           
            </div>
            <div>
            <p className={accordion===index ? "active" : "inactive"}>{item.answer}</p>
            </div>
            </div>
        ))}
    </div>
</div>
        </>
    )
}
export default Accordion;