import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle, Button, Container } from 'reactstrap';

import './Films.css';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';

const Films = ({ moviesList, deleteMovie, likeMovie, dislikeMovie, state }) => {
    function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    moviesList.sort(function(a, b) {
        return compareStrings(a.title, b.title);
    })

    const allMoviesDisplayed = moviesList.map(movie =>
        <Card key={movie.id} className="App-Film">
            <CardBody>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardTitle>{movie.title}</CardTitle>
            <CardSubtitle>{movie.category}</CardSubtitle>
            <CardText>
                <ThumbUpAlt
                    onClick={likeMovie(`${movie.id}`)}
                    className="App-Film-Like"
                />
                    <div className="App-Film-Count-Likes">{movie.likes}</div>
                <ThumbDownAlt
                    onClick={dislikeMovie(`${movie.id}`)}
                    className="App-Film-Dislike"
                />
                    <div className="App-Film-Count-Dislikes">{movie.dislikes}</div>
            </CardText>
            <Button
                onClick={deleteMovie(`${movie.id}`)}
                color="danger"
            >
                Supprimer
            </Button>
            </CardBody>
        </Card>
    )

    const specificCategoryMoviesDisplayed = moviesList.map(movie =>
        movie.category === state.selectValue &&
        <Card key={movie.id} className="App-Film">
            <CardBody>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardTitle>{movie.title}</CardTitle>
            <CardSubtitle>{movie.category}</CardSubtitle>
            <CardText>
                <ThumbUpAlt
                    onClick={likeMovie(`${movie.id}`)}
                    className="App-Film-Like"
                />
                    <div className="App-Film-Count-Likes">{movie.likes}</div>
                <ThumbDownAlt
                    onClick={dislikeMovie(`${movie.id}`)}
                    className="App-Film-Dislike"
                />
                    <div className="App-Film-Count-Dislikes">{movie.dislikes}</div>
            </CardText>
            <Button
                onClick={deleteMovie(`${movie.id}`)}
                color="danger"
            >
                Supprimer
            </Button>
            </CardBody>
        </Card>
    )

    return (
        <div className="App-Films">
            <Container>
                {state.selectValue === "all" && allMoviesDisplayed}
                {state.selectValue !== "all" && specificCategoryMoviesDisplayed}
            </Container>
        </div>
    );
}

export default Films;