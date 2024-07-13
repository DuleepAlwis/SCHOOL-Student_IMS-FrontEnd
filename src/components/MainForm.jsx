import React, { useState } from "react";
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
    const [responseMsg,setResponseMsg] = useState("");
    const [successState,setSuccessState] = useState(false);
    const [errorState,setErrorState] = useState(false);

    const createOrg = (e)=>{
        e.preventDefault()
        console.log(orgDetails);
        console.log(import.meta.env.VITE_APP_NAME);
        const result = OrgService.createOrganization(orgDetails);
        console.log("==================");
        console.log(result);
        if(result.form.data!=null){
            setResponseMsg(result.form.data.message);
            setSuccessState(true);
            setErrorState(false);

        }
        if(result.form.error!=null){
            setResponseMsg(result.form.error.response.data.message);
            setSuccessState(false);
            setErrorState(true);
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
        console.log(responseMsg+" "+successState+" "+errorState);
    }

    const clearAll = (e)=>{
        e.preventDefault();
        setResponseMsg("");
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
    }

    if(showForm.showCreateOrg){
        return (
            <div>
                <div className="main-form-container">
                   
                    <form onSubmit={createOrg}>
                    <div>
                        <h3 className="org-create-header">Organization Details</h3>
                    </div>
                    <div className="form-inner-container">
                        <label for="orgName">Organization Name</label>
                        <input type="text" id="orgName" placeholder="Organization Name" onChange={(e)=>setOrgDetails({...orgDetails,orgName:e.target.value})} required/>
                        <label for="address">Address</label>
                        <input type="text" id="address" placeholder="Address" onChange={(e)=>setOrgDetails({...orgDetails,address:e.target.value})} required/>
                        <label for="city">City</label>
                        <input type="text" id="city" placeholder="EX:-Wellawatha" onChange={(e)=>setOrgDetails({...orgDetails,city:e.target.value})} required/>
                        <label for="state">District/State</label>
                        <input type="text" id="state" placeholder="EX:-Colombo" onChange={(e)=>setOrgDetails({...orgDetails,district:e.target.value})} required/>
                        <label for="country">Country</label>
                        <input type="text" id="country" placeholder="EX:-Sri Lanka" onChange={(e)=>setOrgDetails({...orgDetails,country:e.target.value})} required/>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="stu.education@gmail.com" onChange={(e)=>setOrgDetails({...orgDetails,email:e.target.value})} required/>
                        {successState && <span className="success-container">{responseMsg}</span>}
                        {errorState && <span className="error-container">{responseMsg}</span>}
                        <button type="submit" className="main-form-btn">Save</button><button type="reset" className="main-form-btn">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}