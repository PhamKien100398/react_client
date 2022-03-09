import React from 'react';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import Main from './components/MeetingRoom/Main/Main';
import Room from './components/MeetingRoom/Room/Room'
import styled from 'styled-components';
import Home from './components/home/HomeComponent'
import Login from './components/login/LoginComponent';
import ResetPassword from './components/reset-password/ResetPaswordComponent';
import DashboardComponent from './components/users/dashboard/DashboardComponent';
import ManagerUserComponent from './components/amdin/manager-user/ManagerUserComponent';
import ExamDetailComponent from './components/users/exam-detail/ExamDetailComponent';
import ExamQuestionComponent from './components/users/exam-question/ExamQuestionComponent';
import ExamResultComponent from './components/users/exam-result/ExamResultComponent';
import ProfileComponent from './components/users/profile/ProfileComponent';
import QuestionBankComponent from './components/amdin/manager-question/question-bank/QuestionBankComponent'
import ManagerTestComponent from './components/amdin/manager-test/ManagerTestComponent'
import AddTestComponent from './components/amdin/manager-test/add-test/AddTestComponent';
import DetailTestComponent from './components/amdin/manager-test/detail-test/DetailTestComponent';
import ManageCourceComponent from './components/amdin/manager-cource/ManageCourceComponent';

function App() {
  return (
    <BrowserRouter>
      {/* <AppContainer> */}
        <Switch>
          <Route path = "/verification-service/password-reset" component = {ResetPassword} exact/>
          <Route path = "/login" component = {Login} exact/>
          <Route path = "/" component = {Home} exact/>

          {/* router user */}
          <Route exact path = "/user/dashboard" render = {() =>{
              return localStorage.getItem("jwtToken") ? <DashboardComponent /> : <Redirect to = "/login"/>
          }}/>
          <Route exact path = "/user/exam_detail/:id" render = {(props) =>{
              return localStorage.getItem("jwtToken") ? <ExamDetailComponent {...props}/> : <Redirect to = "/login"/>
          }}/>
          <Route path = "/user/exam_detail/:id/start" exact render = {(props) =>{
              return localStorage.getItem("jwtToken") ? <ExamQuestionComponent {...props}/> : <Redirect to = "/login"/>
          }}/>
          <Route path = "/user/exam_detail/:id/result" exact render = {(props) =>{
              return localStorage.getItem("jwtToken") ? <ExamResultComponent {...props}/> : <Redirect to = "/login"/>
          }}/>
          <Route path = "/user/profile" exact render = {() =>{
              return localStorage.getItem("jwtToken") ? <ProfileComponent /> : <Redirect to = "/login"/>
          }}/>



          {/* Router admin */}
          <Route exact path = "/admin/users" render = {() =>{
              return localStorage.getItem("jwtToken") ? <ManagerUserComponent/> : <Redirect to = "/login"/>
          }}/>
          <Route exact path = "/admin/question" render = {() =>{
              return localStorage.getItem("jwtToken") ? <QuestionBankComponent/> : <Redirect to = "/login"/>
          }}/>
          <Route exact path = "/admin/test" render = {() =>{
              return localStorage.getItem("jwtToken") ? <ManagerTestComponent/> : <Redirect to = "/login"/>
          }}/>
          <Route exact path = "/admin/test/add-test" render = {() =>{
              return localStorage.getItem("jwtToken") ? <AddTestComponent/> : <Redirect to = "/login"/>
          }}/>

          <Route exact path = "/admin/test/detail-test/:id" render = {(props) =>{
              return localStorage.getItem("jwtToken") ? <DetailTestComponent {...props}/> : <Redirect to = "/login"/>
          }}/>
          
          <Route exact path = "/admin/cource" render = {(props) =>{
              return localStorage.getItem("jwtToken") ? <ManageCourceComponent/> : <Redirect to = "/login"/>
          }}/>

          {/* meeting */}
          <AppContainer>
            <Route exact path="/meet" component={Main} />
            <Route exact path="/room/:roomId" component={Room} />
          </AppContainer>
          {/* <AppContainer>
              <Route exact path="/meet" render = {() =>{
                  return localStorage.getItem("jwtToken") ? <Main /> : <Redirect to = "/login"/>
              }}/>
              <Route exact path="/room/:roomId" render = {(props) =>{
                  return localStorage.getItem("jwtToken") ? <Room {...props}/> : <Redirect to = "/login"/>
              }}/>
          </AppContainer> */}
        </Switch>
      {/* </AppContainer> */}
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
  background-color: #454552;
  text-align: center;
`;

export default App;
