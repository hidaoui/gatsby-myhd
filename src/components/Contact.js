import React from 'react'

export const Contact = () => {
    return (
        <div className="container-fluid">
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="john smith"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="email@email.com"/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" rows="3" placeholder="your description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-5">submit</button>
        </form>
        </div>
    )
}
