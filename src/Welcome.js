import React from 'react';
import PostData from './Stocklist.json';


class Welcome extends React.Component{
    logout(){
        this.props.history.push('/logout');
    }

    render(){
        const {Email} = this.props.match.params;

        return(
        <div className="center_div">
            <h3>Hello <br/>{Email}</h3>
            <button onClick={this.logout.bind(this)}>Logout</button>
            {PostData.map((postDetail, index)=>{
        
        return <div className="new-div"> <h1>  {postDetail.STATUS}</h1> 
                    <h1>  {postDetail.COL}</h1>  
<h1>  {postDetail.CLR}</h1> 
<h1>  {postDetail.CUT}</h1> 
<h1>  {postDetail.POL}</h1> 
<h1>  {postDetail.SYM}</h1> 
<h1>  {postDetail.FLOURESENCE}</h1> 
<h1>  {postDetail.NATTS}</h1> 
<h1>  {postDetail.MILKY}</h1> 
<h1>  {postDetail.eye_clean}</h1> 
<h1>  {postDetail.DIA_MN}</h1> 
<h1>  {postDetail.DIA_MX}</h1> 
<h1>  {postDetail.DPL}</h1> 
<h1>  {postDetail.TBL}</h1> 
<h1>  {postDetail.HT}</h1> 
<h1>  {postDetail.LW}</h1> 
<h1>  {postDetail.type2a_name}</h1>  
<h1>  {postDetail.heart_and_arrow}</h1> 
<h1>  {postDetail.measurement}</h1> 
<h1>  {postDetail.GIRDLE}</h1> 
<h1>  {postDetail.LN}</h1> 
<h1>  {postDetail.WD}</h1> 
<h1>  {postDetail.CA}</h1> 
<h1>  {postDetail.CH}</h1> 
<h1>  {postDetail.PA}</h1> 
<h1>  {postDetail.PD}</h1> 
<h1>  {postDetail.KTSVIEW}</h1> 
<h1>  {postDetail.COMMENT}</h1> 
<h1>  {postDetail.LOC}</h1> 
<h1>  {postDetail.INS}</h1> 
<h1>  {postDetail.EFCM}</h1> 
<h1>  {postDetail.Culet}</h1> 
<h1>  {postDetail.Origin}</h1>
       
        
        </div>
                            
            })}
            
        </div>
            
        );
    }
}
export default Welcome;