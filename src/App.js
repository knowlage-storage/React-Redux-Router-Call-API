import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			txtUsername:'',
			txtPassword:'',
			txtDesc:'',
			gender:0,
			language:'vi',
			chkStatus:true
		}
		
	}

	ChangeInput=(event)=>{
		var target=event.target;
		var name=target.name;
		var value=target.type==='checkbox'?target.checked: target.value;
		this.setState({
			[name]:value,
		})
	}

	HandleSubmit=(event)=>{
		event.preventDefault();
		console.log(this.state);
	}
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
							<div className="panel panel-info">
								<div className="panel-heading">
									<h3 className="panel-title">Form</h3>
								</div>
								<div className="panel-body">
									
									<form onSubmit={this.HandleSubmit}>
										<div className="form-group">
											<label >Username</label>
											<input 
												type="text" 
												className="form-control" 
												name="txtUsername"
												onChange={this.ChangeInput}
											/>
										</div>
										
										<div className="form-group">
											<label >Password</label>
											<input 
												type="text" 
												className="form-control" 
												name="txtPassword"
												onChange={this.ChangeInput}
											/>
										</div>

										<div className="form-group">
											<label >Description</label>
											<textarea name="txtDesc" className="form-control" rows="3" onChange={this.ChangeInput}></textarea>
										</div>

										<label >Gender</label>
										<select 
											name="gender" 
											className="form-control" 
											onChange={this.ChangeInput}
											value={this.state.gender}
										>
											<option value={0}>Male</option>
											<option value={1}>Female</option>
										</select>
										
										<label >Language</label>
										<div className="radio">
											<label>
												<input 
													type="radio"
													name="language"
													value="vi"
													onChange={this.ChangeInput}
													checked={this.state.language==='vi'}
												/>
												VietName
											</label>
											<br/>
											<label>
												<input 
													type="radio" 
													name="language"
													value="en"
													onChange={this.ChangeInput}
													checked={this.state.language==='en'}
												/>
												English
											</label>
										</div>
										<br/>
										<label >Status</label>
										<div className="checkbox">
											<label>
												<input 
													type="checkbox" 
													name="chkStatus"
													value={this.state.chkStatus}
													onChange={this.ChangeInput}
													checked={this.state.chkStatus===true}
												/>
												Checkbox
											</label>
										</div>
									
										<button type="submit" className="btn btn-primary">Submit</button>&nbsp;
										<button type="reset" className="btn btn-success">Reset</button>
									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>          
			);
		}
	}

export default App;
