import React from 'react'
import { AiOutlineMail, AiFillGithub,  AiOutlineFile, AiOutlineLinkedin} from "react-icons/ai";
import Resume from '../../assets/Amy_Gao_Resume.pdf'
import './contact.css'
import '../../App.css'
export default function Contact() {
    return (
        
        <div class = 'contact-buttons'> 
            <a  href = {'mailto:amyy.gao@mail.utoronto.ca'} className="btn btn-circle"> <AiOutlineMail></AiOutlineMail> </a>
            <a  href = {'https://www.linkedin.com/in/agao/'} className="btn btn-circle"> <AiOutlineLinkedin/> </a>
            <a  href = {'https://github.com/amygaoo'} className="btn btn-circle"> <AiFillGithub/> </a> 
            <a href = {Resume} target = "_blank" className="btn btn-circle"> <AiOutlineFile/></a>
        </div>
        
    )
}
