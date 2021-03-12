import { Tab, Tabs, Container } from "react-bootstrap";
import Section from "../section";

const Groups = ({ categories }) => {
 
  return (
    <div className="main-menu">
      <Container  style={{paddingTop:"200px" }}>
        
        <Tabs
        className="border border-dark tabs"
        
        >

          {categories.map((category) => {
            return (
              <Tab
                key={category?.id}
                eventKey={category?.name.toLowerCase()}
                title={category?.name}
                className="text-center p-5"
              >
                {category?.templates
                  .filter((template) => template.type !== 73)
                  .filter((template) =>
                    template.sections.map((section) =>
                      section.articles.map(
                        (article) => article.status === "AVAILABLE"
                      )
                    )
                  )
                  .map((template) => {
                    if (template.title) {
                      return <Section template={template} key={template.id}  />
                    }
                  })}
              </Tab>
            );
          })}
        </Tabs>
        
      </Container>
    </div>
  );
}

export default Groups
