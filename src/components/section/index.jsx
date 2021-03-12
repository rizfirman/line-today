import Cardsection from "../card";
import {Container} from 'react-bootstrap'
import Aos from 'aos'
import{useEffect} from 'react'

const Section = ({ template, result }) => {
  
  return (
    
      <div className="section " >
      
    <div key={result} className="mb-24 mt-2 pt-4">
      {template.sections && (
        <h1
          className="text-dark bg-white  border border-dark p-3"
          data-aos="fade-left"
        >
          {template.title}
        </h1>
      )}
      <div className="box">
        <div className="grid">
        {template.sections &&
          template.sections.map((section) => {
            if (section.articles) {
              return section.articles.slice(0, 6).map((article) => {
                return <Container >
                  <div data-aos="fade-right">
                  <Cardsection article={article} key={article.id}  />
                  </div>
                  
                  </Container>
                 
              });
            }
          })}
          </div>
      </div>
    </div>
   
    </div>
    
  );
}

export default Section
