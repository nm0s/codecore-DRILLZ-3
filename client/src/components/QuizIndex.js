import React, { Component } from 'react';
import { Quiz } from '../lib/requests';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col, Container} from 'reactstrap';

class QuizIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      quizzes: [],
      loading: true,
      modal: false
    }
    this.deleteQuiz = this.deleteQuiz.bind(this);
    this.addQuiz = this.addQuiz.bind(this);
  }


    })
  }



  componentDidMount () {
      Quiz
        .all()
        .then(
          questions => {
            this.setState({
              questions: questions,
              loading: false
            });
          }
        );
    }

    addQuiz (addQuiz) {
      const {quizzes} = this.state;
    }

    deleteQuiz (event) {
      const {currentTarget} = event
      const {quizs} this.state;
      const quizId = parseInt(currentTarget.dataset.id 10);

      this.setState({
        quizzes: quizzes
          .filter(quiz => quiz.id !== quizId)
      })
    }


  render() {
    const { quizzes, loading } = this.state;

    if (loading) {
      return (
        <main className="QuizIndex">
          <Container>
            <Row>
              <Col xs="6"><h2> Quiz Group </h2></Col>
              <Col xs="6">
                <Button outline color="secondary" onClick={this.addQUiz}>Add Quiz</Button>
              </Col>
            </Row>
            <Row>
              <Col> <h4> Loading... </h4> </Col>
            </Row>
          </Container>
        </main>
      )
    }

    return (
      <main
        className="QuizIndex">
          <Container>
            <Row>
              <Col xs="6"><h2> Quiz Group </h2></Col>
              <Col xs="6">
                <Button outline color="secondary" onClick={this.addQUiz}>Add Quiz</Button>
              </Col>
            </Row>
            <Row>
              {quizzes.map( quiz => 
                <Col sm="6">
                  <Card body key={quiz.id}>
                    <CardTitle>
                      <Link to{/quizzes/$quiz.id} />
                        {quiz.name}
                    </CardTitle>
                    <CardText>
                        <p>{quiz.description}</p>
                    </CardText>
                    <button
                          data-id={quiz.id}
                          onClick={this.deleteQuiz}
                        >Delete</button>
                  </Card>
                </Col>
              }
            </Row>
          </Container>
      </main>
    )

  }
}

export default QuizIndex;
