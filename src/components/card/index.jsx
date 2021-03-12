import { Card, Button, Col } from "react-bootstrap";
import {useImage} from "../../config";


const CardSection = ({ article }) => {
   
  return (
      <div className="news-card">
          
            <Card className="border border-dark" style={{width:"25rem", height:"30rem"}}>
            <Card.Img
                className="object-cover"
                alt={article.title}
                src={useImage(article.thumbnail.hash)}

            />
            <Card.Body  >

                <Card.Title>
                    {article.title}
                </Card.Title>
                <Card.Link
                    className="text-dark"
                    href={article.publisherImageCdnHash}
                >
                    {article.publisher}
                </Card.Link>
                <Card.Footer className="bg-white border-top border-dark" >
                <Button variant="dark" className="btn text-dark">
                <a
                    href={article.url.url}
                    className="text-white"
                >
                    Selengkapnya
                </a>
                </Button>
                </Card.Footer>
            </Card.Body>
            </Card>
            
        </div>
        
  );
}

export default CardSection