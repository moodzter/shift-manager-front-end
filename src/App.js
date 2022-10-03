import './App.css';
import NavBar from './components/navbar';
import { useState } from 'react';
import Employees from './components/Employees';
import CreateForm from './components/CreateEmployee';
import SpecificEmployee from './components/SpecificEmployee';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {

  let [showEmployees, setShowEmployees] = useState( false );
  let [showCreateForm, setShowCreateForm] = useState ( false );
  let [showSpecific, setSpecific] = useState(false);
  let [tempSpecificEmployee, setTemp] = useState({});
  let [postCreate, setPostCreate] = useState(false);
  let [showLogin, setShowLogin] = useState(true);

  const settingEmployee = (employee) => {
    setTemp(employee);
  };
  return (
    <div>
      <NavBar setShowEmployees={setShowEmployees}
              showEmployees={showEmployees}
              setShowCreateForm={setShowCreateForm}
              setShowLogin={setShowLogin}
              showLogin={showLogin}
              setTemp={setTemp}
              setPostCreate={setPostCreate}
              setSpecific={setSpecific}/>

      {showLogin ? 
        <Login/>
      : null}

      {showEmployees ? <Employees setShowEmployees={setShowEmployees}
                                  setShowCreateForm={setShowCreateForm}
                                  settingEmployee={settingEmployee}
                                  setSpecific={setSpecific}
                                  setPostCreate={setPostCreate}
                                  setShowLogin={setShowLogin}
                                  showEmployees={showEmployees}
                                  showCreateForm={showCreateForm}/>
        : null}

      {showCreateForm ? <CreateForm setShowEmployees={setShowEmployees}
                                    setShowCreateForm={setShowCreateForm}
                                    showEmployees={showEmployees}
                                    showCreateForm={showCreateForm}/>
        : null}
      {showSpecific ? <SpecificEmployee employee={tempSpecificEmployee}
                                        setShowEmployees={setShowEmployees}
                                        setSpecific={setSpecific}/>
        : null}
      {postCreate ? <CreatePost/>
        : null}
      <Footer/>
    </div>
  );
};

export default App;
