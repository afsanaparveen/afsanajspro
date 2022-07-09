import React from 'react'
class TODO extends React.Component 
{  //this is the way to write html code inside react application
    constructor(props){
         super(props)
        
            this.state={
                text: '',
                item: []
            }
            this.handleChange=this.handleChange.bind(this)
            this.handleSubmit=this.handleSubmit.bind(this)
        }
        handleChange(e)
        {
            this.setState({text: e.target.value})
        }
        handleSubmit(e)
        {
            e.preventDefault()
            if(this.state.text.length===0) return
            const newItem = {
                text: this.state.text,
                id: Date.now()
            }
            this.setState(state =>({
                items: state.items.concat(newItem),
                text: ''
            }))
        }
        render() 
        {

            return(
                <div>
                    <h1>TODO application</h1>
                    <TODOList todoitems={this.state.items}/>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlForm="id">input item</label>
                        
                        <input id="id" onChange={this.handleChange} value={this.state.text}/>
                        <button>Add</button>
                    </form>
                    </div>
                    
            )      
                    
                          
}
    }

export default TODO
class TODOList extends React.Component{
    render(){
        return( 
        <ul>
            {this.props.todoitems.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
            </ul>

        )
    }
}