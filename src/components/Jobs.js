import React, { Component } from 'react'

const getCategories=items=>{
    let tempItems=items.map(
        items=>{
            return items.node.product;
        }
    )
    let tempProducts=new Set(tempItems);
    let categories=Array.from(tempProducts);
    categories = ['all',...categories];
    return categories;
}

export default class Jobs extends Component {
    constructor(props){
        super(props);
        
        this.state={
            items:props.items.edges,
            jobItems:props.items.edges,
            categories:getCategories(props.items.edges)
        };
    }
    handleItems=(category)=>{
        let tempItems=[...this.state.items];
        if(category==="all"){
            this.setState(()=>{
                 return {jobItems:tempItems}   
            });
        }else{
            let items=tempItems.filter(({node})=>node.product === category);
            this.setState(()=>{
                return {jobItems:items}   
           });
        }
    }
    render() {

        

        if(this.state.items.length>0){
            return (
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-12">
                            {this.state.categories.map((category,index)=>{
                                return (
                                    <button type="button" className="btn btn-primary m-3" key={index} onClick={()=>{this.handleItems(category)}}>{category}</button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="row">
                        {this.state.jobItems.map(({node})=>{
                            return (
                                <div key={node.id} className="col">
                            
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{node.jobnumber}</p>
                                            <p>{node.jobtitle}</p>
                                            <p>{node.product}</p>
                                            <span className="badge badge-primary">{node.jobprice} &euro;</span>
                                        </div>
                                    </div> 

                                </div>
                            );    
                        })}
                    </div>
                </div>
            )
        }else{
            return (
                <div className="row">
                    <div className="col-11 col-md-6 my-3 d-flex mx-auto">
                        <p>There is no items</p>
                    </div>
                </div>
            )
        }

        
    }
}
