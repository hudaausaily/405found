import React from 'react';
import Navbar from '../components/navbar';
import RightBarcreateGrope from '../components/rightBarcreateGrope';
import Sidebar from '../components/sidebar';
import { useState , useEffect } from 'react';
import axios from 'axios';

const Groups = () => {


  const current_ID = JSON.parse(localStorage.getItem('id'));

  const[data,setData]=useState([]);
  const[showUpdateForm,setShowUpdateForm]=useState(false);
  const [pendingMembers,setPendingMembers] = useState([]);
  const [acceptedMembers,setAcceptedMembers] = useState([]);

  useEffect(()=>{
    getGroups();
    getPendingMempers();
    getAcceptedMempers();
          },[])

          // لعرض كل الجروبات في الموقع

  const getGroups =()=>{
      
      axios.get("http://localhost/405_found/back_end/groups.php")
    
      .then((res)=>{
          console.log(res.data)
          setData(res.data)
      })
 } 


// لاضافة عضو لجروب معين
const AddToGroup = (groupId) => {
let inputs = {user_id:current_ID , group_id:groupId};
axios.post(`http://localhost:80/405_found/back_end/membersGroup.php/save`,inputs)
.then((respone)=>{
    console.log(respone.data);
    getGroups();
    getPendingMempers();
    
          // getFriendsRequest();
})
}
   //للجروبات pending لعرض كل طلبات المستخدم اللي حالتهم 
  const getPendingMempers = () => {

      axios.get(`http://localhost:80/405_found/back_end/getPendingMember.php/${current_ID}`)
      .then((respone)=>{
          console.log(respone.data);
          let pendingMembers = respone.data.map((ele)=>{
              return ele.group_id
          })
          console.log(pendingMembers);
          setPendingMembers(pendingMembers);
          // setPendingMempers(respone.data)
      })
  }

       //للجروبات accepted لعرض كل طلبات المستخدم اللي حالتهم 
       const getAcceptedMempers = () => {

        axios.get(`http://localhost:80/405_found/back_end/getAcceptedMember.php/${current_ID}`)
        .then((respone)=>{
            console.log(respone.data);
            let acceptedMembers = respone.data.map((ele)=>{
                return ele.group_id
            })
            console.log(acceptedMembers);
            setAcceptedMembers(acceptedMembers);
            // setPendingMempers(respone.data)
        })
    }

// لحذب طلب الاضافة 
  const removeRequest = (GroupId) => {
    let inputs = {user_id:current_ID , group_id:GroupId};
    axios.put(`http://localhost:80/405_found/back_end/getPendingMember.php/edit`,inputs)
    .then((respone)=>{
        console.log(respone.data);
        getGroups();
        getPendingMempers();
    })

  }

// __________
const [text, setText] = useState("");
const [file, setFile] = useState(null);
const [groupDescription, setGroupDescription] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("text", text);
  formData.append("user_id", current_ID);
  formData.append("file", file);
  formData.append("group_description", groupDescription);

  try {
    const response = await axios.post(
      "http://localhost:80/405_found/back_end/groups.php",
      formData
    );
    console.log(response.data);
    setShowUpdateForm(false);
    window.location.assign('/Allgroups');


  } catch (error) {
    console.error(error);
  }
};


    return (
        <div className="theme-layout">
        <Navbar/>
       
       	
        <section>
        
        
          <div className="gap gray-bg">
            <div className="container-fluid">
            
              <div className="row">
                <div className="col-lg-12">
                  <div className="row" id="page-contents">
                  
              <Sidebar/>
                    <div className="col-lg-6">
                      <div className="central-meta">
                        <div className="groups">
                          <span><i className="fa fa-users" /> Groups</span>
                        </div>
                        <ul className="nearby-contct">
                          {/* _____________ */}
                          {data.filter(function(ele) {
                    // لحتى ما اطبع المستخد اللي عامل تسجيل دخول
                    if (ele.user_id === current_ID) {
                        return false; // skip
                    }
                    return true;
                    }).map((ele,index)=>(
                          <li key={index}>
                            <div className="nearly-pepls">
                              <figure>
                                <a href="time-line.html" title><img src={require(`../image/${ele.group_image}`)} alt="" /></a>
                              </figure>
                              <div className="pepl-info">
                                <h4><a href="time-line.html" title>{ele.name}</a></h4>
                                <span> <a href={`/singleGroup/${ele.group_id}/show`}> Show Group </a></span>
                                <em>32k Members</em>


                          
                                {(() => {
                            if (pendingMembers.includes(ele.group_id) || acceptedMembers.includes(ele.group_id) ){
                                if(pendingMembers.includes(ele.group_id)){
                                  return ( 
                                          <p  title onClick={()=>removeRequest(ele.group_id)} className="add-butn" data-ripple>remove request</p> 

                                      
                                      )

                                }
                                if(acceptedMembers.includes(ele.group_id)){
                                    return (
                                        <p onClick={()=>removeRequest(ele.group_id)} title className="add-butn" data-ripple>join now</p>

                

                                    
                                                )

                                }
                              
                             
                            }else{
                              return ( 
                                        <p title onClick={()=>AddToGroup(ele.group_id)} className="add-butn" data-ripple>join now</p>

                              
                            
                              )
                          }
              
            })()}
                              </div>
                            </div>
                          </li>



))}
                          {/* __________________ */}
                        

                        </ul>
                      </div>{/* photos */}
                    </div>{/* centerl meta */}
                
                    <RightBarcreateGrope/>    {/* sidebar */}
                  </div>	
                </div>
              </div>
            </div>
          </div>	
        </section>
      
        <div className="bottombar">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="copyright"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                <i><img src="images/credit-cards.png" alt="" /></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Groups
