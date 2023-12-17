import React from 'react'
import Gradesheet from './Gradesheet'
import '../../Styles/Table.css'
import QuestionComponent from './QuestionComponent'
import TeacherNavbar from '../../Components/TeacherNavbar'
function Domain1() {
  return (
    <>    <TeacherNavbar />
 
    <div className="table">
    <QuestionComponent />
    <Gradesheet />
  
  </div>
  </>
  )
}

export default Domain1