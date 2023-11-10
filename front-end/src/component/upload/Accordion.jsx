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
    return(
        <>
<div className="container">
    <div>
        <span className="accordion__title">Frequently Asked  question</span>
        <h1>lets  answer  some  of  your  question</h1>
    </div>
    <div className="accordion__faq">
        {dataCollection.map((item,index)=>(
            <div key={index}>
            <div className="Accordion_-faq-heading">
            <h3>{item.question}</h3>
            </div>
            <div>
            <span className="verticle">-</span>
            </div>
            <div>
            <p>{item.answer}</p>
            </div>
            </div>
        ))}
    </div>
</div>
        </>
    )
}
export default Accordion;