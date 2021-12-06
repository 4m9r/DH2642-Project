# DH2642-Project
Project for the course  Interaction Programming and the Dynamic Web (DH2642)

Movies are often a major talking point amongst friends and family.
Our project presents FILM BUFF, an application that helps people discover movies and knowledge about those movies in a more fun and interactive way!

Film Buff helps users search for movies based on popularity, genre, etc. Additionally:
  - Users can create lists of their favourite movies
  - Users can create an account
  - Users can get recommendations of movies they might like based on a movie selection
  - Users can search a movie and see the details of it
  - There will be quizzes about random movies with a leaderboard system so the users can compete with each other
  - Users can see the lists that have been created by others 
  - Users can make their own lists and collaborate on them if they want

Done 
  - [X] Users can see search results and details from an API call
  - [X] Navigation between pages
  - [X] Users can see the drop down Menu bar on the right side of the page 
  - [X] The skeleton of Quiz page and Authentication page (sign up and log in) have been implemented
  - [X] The skeleton of Leaderboard list and list of movies for users have also been implemented
  - [X] The basic initial implementation of firebase for quizzes has been done
  - [X] Basic implementation of users list (a list of lists) on the right side of the page 

Planning to do
  - [ ] Implementation of finding similar movies to a chosen movie
  - [ ] Users will be able to take a quiz on a chosen movie using firebase
  - [ ] Users will collaborate on lists of their favourite movies
  - [ ] Users will be able to authenticate using firebase
  - [ ] Implementing navigation between all the pages
  - [ ] More CSS styling

- loginView.js and signUpView.js
  - Will be used to authenticate the users
- MenuView.js
  A drop down menu, used for navigation by users
- detailsView.js and detailsPresenter.js
 - Used to render the details for each movie (and find similar movies)
- searchView.js and searchPresenter.js
- Used for searching movies
- showPresenter.js and app.js
 - Used for connecting the pages with hashes
- quizView.js and quizPresenter.js
  - Used for displaying quizzes of a chosen movie
- movieListView.js and listCollectionView.js and userListView.js and userListPresenter.js
 - Used to show users' lists
- leaderboardView.js
 - Used for ranking all the users based on their quiz scores
- promiseNoData.js
 - Used for checking if the promise has any data
- firebaseModel.js
- Used for accessing database for quizzes and authentication and creating a persisting model 
- userModel.js
 - all the calculations behind the scene happening
 - movieSource.js
 - used for calling the API
- style.css
-  Used for styling the website
- vue.html
 - Used for rendering


