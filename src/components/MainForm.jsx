import React, { useState, useEffect, useRef ,useCallback } from "react";
import "../saas/components/_main_form.scss";
import OrgService from "../Service/OrgService";

export const MainForm = ({showForm,setShowForm})=>{

    let orgDetailsObj = {
        id:0,
        orgName:"",
        city:"",
        address:"",
        district:"",
        orgCode:"",
        isActive:"",
        email:"",
        country:""
    };

    const [orgDetails,setOrgDetails] = useState(orgDetailsObj);
    // const [responseMsg,setResponseMsg] = useState("");
    // const [successState,setSuccessState] = useState(false);
    // const [errorState,setErrorState] = useState(false);
    const [enableScroll, setEnableScroll] = useState(false);
    const divRef = useRef(null);

    // useEffect(()=>{

    //   console.log("======clear response========");
    //   const timer = setTimeout(() => {
    //     setResponseMsg("");
    //     setSuccessState(false);
    //     setErrorState(false);     
    //   }, 5000); // Adjust the time as needed
  
    //   // Cleanup function to reset the state when the component is unmounted or when the component mounts again
    //   return () => {
    //     clearTimeout(timer);
    //     setResponseMsg("");
    //     setSuccessState(false);
    //     setErrorState(false);   
    //   };  
    // },[]);

    const timer = setTimeout(() => {
      // setResponseMsg("");
      // setSuccessState(false);
      // setErrorState(false);     
    }, 7000);

    const handleScroll = useCallback(() => {
        if (divRef.current) {
          const divBottom = divRef.current.getBoundingClientRect().bottom;
          const viewportHeight = window.innerHeight;
          const gapThreshold = 0; // Adjust this threshold as needed
    
          console.log("GAP " + (viewportHeight - divBottom) + " v"+viewportHeight+" d" + divBottom);
          if ((viewportHeight - divBottom) < gapThreshold) {
            setEnableScroll(true);
          } else {
            setEnableScroll(false);
          }
        }
      }, []);

      useEffect(() => {
        if (showForm.showCreateOrg) {
          handleScroll(); // Initial check when form becomes visible
          window.addEventListener('scroll', handleScroll);
        } else {
          setEnableScroll(false); // Reset scroll state when form is hidden
          window.removeEventListener('scroll', handleScroll);
        }
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [showForm.showCreateOrg, handleScroll]);

    const createOrg = async (e)=>{
        e.preventDefault()
        console.log(orgDetails);
        console.log(import.meta.env.VITE_APP_NAME);
        const result = await OrgService.createOrganization(orgDetails);
        console.log("==================");
        console.log(result);
        if(result.form.data!=null){
           // setResponseMsg(result.form.data.message);
            // setSuccessState(true);
            // setErrorState(false);
            // clearTimeout(timer);
            setShowForm({...showForm,responseMsg:result.form.data.message,successState:true,errorState:false});

        }
        if(result.form.error!=null){
            //setResponseMsg(result.form.error.response.data.message);
            // setSuccessState(false);
            // setErrorState(true);
            // clearTimeout(timer);
            setShowForm({...showForm,responseMsg:result.form.error.response.data.message,successState:false,errorState:true});

        }

        setOrgDetails(
            {
                id:0,
                orgName:"",
                city:"",
                address:"",
                district:"",
                orgCode:"",
                isActive:"",
                email:"",
                country:""
            }
        );
        console.log(showForm.responseMsg+" "+showForm.successState+" "+showForm.errorState);
        document.getElementById("create-org-form").reset();
        
        
    }


    if(showForm.showCreateOrg){
        return (
            
                <div className="main-form-container">
                   
                    <form id="create-org-form" onSubmit={createOrg}>
                    <div>
                        <h3 className="org-create-header">Organization Details</h3>
                    </div>
                    <div ref={divRef}  className={`form-inner-container${enableScroll ? ' enable-scroll' : ''}`}>
                        <label htmlFor="orgName">Organization Name</label>
                        <input type="text" id="orgName" placeholder="Organization Name" onChange={(e)=>setOrgDetails({...orgDetails,orgName:e.target.value})} required/>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" placeholder="Address" onChange={(e)=>setOrgDetails({...orgDetails,address:e.target.value})} required/>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" placeholder="EX:-Wellawatha" onChange={(e)=>setOrgDetails({...orgDetails,city:e.target.value})} required/>
                        <label htmlFor="state">District/State</label>
                        <input type="text" id="state" placeholder="EX:-Colombo" onChange={(e)=>setOrgDetails({...orgDetails,district:e.target.value})} required/>
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" placeholder="EX:-Sri Lanka" onChange={(e)=>setOrgDetails({...orgDetails,country:e.target.value})} required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="stu.education@gmail.com" onChange={(e)=>setOrgDetails({...orgDetails,email:e.target.value})} required/>
                        {showForm.successState  && <span className="success-container">{showForm.responseMsg}</span>}
                        {showForm.errorState && <span className="error-container">{showForm.responseMsg}</span>}
                        <button type="submit" className="main-form-btn">Save</button><button type="reset" className="main-form-btn">Cancel</button>
                        </div>
                    </form>
                </div>
        )
    }
}