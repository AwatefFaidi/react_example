import React, { Component } from 'react';
import axios from 'axios';
export default class Gallery extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:10,
            currentkeyword:''
        }
    }
    componentDidMount()
    {
     //   this.getHits();
    }
    getHits()
    {
        let url="https://pixabay.com/api/?key=11022155-86224f583eaaec6d696bfb7f7&q="+this.state.currentkeyword
        +"&page="+this.state.currentPage+"&per-page="+this.state.pageSize;
        console.log(url);
        axios.get(url).then((resp)=>
        {
            console.log(resp);
this.setState({
    hits:resp.data.hits
});
        }).catch(err=>
            {
                console.log(err);
            })
    }
    setKeyword=(event)=>
        {
            this.setState(
                {
                currentkeyword:event.target.value
                })
        }
        search=(event)=>{
            event.preventDefault();
             this.getHits();
        }
    render() {
        return (
            <div>
                <form onSubmit={this.search}> 
                    <div className="row m-2 p-2">
                        <div className="col">
                            <input type ="text" 
                            value={this.state.currentkeyword}
                            onChange={this.setKeyword}
                            placeholder="keyword" className="form-control"/>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success" type="submit">chercher</button>
                        </div>

                    </div>
                </form>
<div className="row">
                {
                    
                this.state.hits.map(hit=>
                
                    <div  className="col-md-4">
                      <div className="card">
                          <div className="card-header">{hit.tags} | {hit.webformatWidth} x {hit.webformatHeight} </div>
                          <div className="card-body">
                            <img className="card-img"  height={200} src={hit.webformatURL}/>
                          </div>
                          </div>
                    </div>

                
                    )
                   
                    }
                     </div>
            </div>
        )
    }
}
